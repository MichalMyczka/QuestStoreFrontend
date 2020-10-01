let questList = [];
let newActiveQuest = [];
let userID = localStorage.getItem("loggedUserID");


function questTile() {
    for (let i=0; i <= questList.length; i++){

        let sel = document.getElementById("tiles");

        let questID = questList[i]["questID"];
        let questName =  questList[i]["questName"];
        let reward = "Reward: " + questList[i]["reward"];
        let isBasic = questList[i]["isBasic"];

        if(questList[i]["isBasic"] === true){
            isBasic = "Basic"
        }
        else{
            isBasic = "Extra"
        }
        let isActive = questList[i]["isActive"];

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
        button.onclick = function () {
            newActiveQuest = [userID, questID];
            activateQuest(newActiveQuest);
            // console.log(newActiveQuest);
            // console.log("zalogowany user o id: " + userID);
        }


        let notAvailable = document.createElement("p");
        notAvailable.innerHTML = "Not Available";

        div.appendChild(h3);
        div.appendChild(p1);
        div.appendChild(p2);
        if(isActive === true){
            div.appendChild(button);
        }
        else{
            div.appendChild(notAvailable);
        }
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

function activateQuest(data) {
    fetch("http://localhost:8000/codecoolerQuests",
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
        .then(function (showQuest) {   //TODO wyjasnic to response

        }).catch(function (error) {

        const message = document.querySelector(".message");
        message.innerHTML = error;
    });
}

getQuests();