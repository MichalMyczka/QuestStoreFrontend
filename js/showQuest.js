let questList = [];



function questTile() {
    for (let i=0; i <= questList.length; i++){

        let sel = document.getElementById("test");
        let questName =  questList[i]["questName"];
        let reward = "Reward: " + questList[i]["reward"];
        let isBasic;

        if(questList[i]["isBasic"] === true){
            isBasic = "available"
        }
        else{
            isBasic = "not Available"
        }

        let div = document.createElement("div");
        div.classList.add("tile");
        let h3 = document.createElement("h3");
        h3.classList.add("tileName");
        h3.innerHTML = questName;
        let p1 = document.createElement("p");
        p1.classList.add("tileReward");
        p1.innerHTML = reward;
        let p2 = document.createElement("p");
        p2.classList.add("tileIsBasic");
        p2.innerHTML = isBasic;
        let button = document.createElement("button");
        button.classList.add("assignmentButton");
        button.type = "button";
        button.innerText = "Accept assignment";

        div.appendChild(h3);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(button);
        sel.appendChild(div);

    }
}

function getQuests(){
    fetch("http://localhost:8000/codecoolerQuests",
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
            questTile();

        }).catch(function (error) {

        const message = document.querySelector(".message");
        message.innerHTML = error;
    });
}

getQuests();