const form = document.querySelector("#seeCodeCooler-form");
let ccList = [];
let ccListDone = document.getElementById("cc-list-inner");
let data;



function addccToList(){
    let sel = document.getElementById("cc-list-inner");
    for(let i=0; i <= ccList.length; i++){
        if (ccList[i]["roleID"] === 1){
            let opt = document.createElement('option');
            opt.innerHTML = ccList[i]["userName"];
            opt.value = ccList[i]["userName"];
            sel.appendChild(opt);
        }
    }
}

getcc();

ccListDone.onchange = function (){
    for(let i=0; i <= ccList.length; i++){

        if (ccList[i]["userName"] === (ccListDone.valueOf()).value){
            data = `mID=${ccList[i]["userID"]}&`
            document.getElementById("ccName").innerText = "Name: " + ccList[i]["userName"];
            document.getElementById("ccSurname").innerText = "Surname: " + ccList[i]["userSurname"];
            document.getElementById("ccBalance").innerText = "Account Balance: " + ccList[i]["totalBalance"];
            document.getElementById("ccBought").innerText = "Artifacts Bought: ";
        }
    }
};

function getcc(){
    fetch("http://localhost:8000/seeCodecoolerProfile",
        {
            credentials: 'same-origin',
            method: "GET",
        })
        .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(function (getcc) {
            ccList = getcc;
            console.log(ccList);
            addccToList();

        }).catch(function (error) {

        const message = document.querySelector(".message");
        message.innerHTML = error;
    });

}