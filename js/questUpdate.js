const form = document.querySelector("#questUpdate-form");
let questList = [];
let questListDone = document.getElementById("quest-list-inner");



function addQuestsToList(){
    let sel = document.getElementById("quest-list-inner");
    for(let i=0; i <= questList.length; i++){
        let opt = document.createElement('option');
        opt.innerHTML = questList[i]["questName"];
        opt.value = questList[i]["questName"];
        sel.appendChild(opt);
    }
}

getQuests();

questListDone.onchange = function (){
    for(let i=0; i <= questList.length; i++){
        // console.log((questListDone.valueOf()[i]).value);
        // console.log(questList[i]["questName"]);
        if (questList[i]["questName"] === (questListDone.valueOf()).value){
            document.getElementById("questName").value = questList[i]["questName"];
            document.getElementById("codecoinsEarned").value = questList[i]["reward"];
            document.getElementById("questDescription").value = questList[i]["description"];
            document.getElementById("questIsBasic").value = questList[i]["isBasic"];
            document.getElementById("questIsActive").value = questList[i]["isActive"];
        }
    }
};

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = `questName=${this.questName.value}&codecoinsEarned=${this.codecoinsEarned.value}&questDescription=${this.questDescription.value}&questIsBasic=${this.questIsBasic.value}&questIsActive=${this.questIsActive.value}`;
    updateQuest(data);
});

function getQuests(){
    fetch("http://localhost:8000/updateQuest",
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
        .then(function (getQuests) {

            questList = getQuests;
            console.log(questList);
            addQuestsToList();

        }).catch(function (error) {

        const message = document.querySelector(".message");
        message.innerHTML = error;
    });
}

function updateQuest(data) {
    fetch("http://localhost:8000/updateQuest",
        {
            credentials: 'same-origin',
            method: "POST",
            body: data
        })
        .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(function (questUpdate) {

        }).catch(function (error) {

        const message = document.querySelector(".message");
        message.innerHTML = error;
    });


}