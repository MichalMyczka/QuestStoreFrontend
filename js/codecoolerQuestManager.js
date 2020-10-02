const form = document.querySelector("activeQuest-form");
let questList = [];
let questListDone = document.getElementById("quests-list-inner")

function addQuestsToList() {
    let sel = document.getElementById("quests-list-inner");
    for(let i=0; i <= questList.length; i++){
        let opt = document.createElement('option');
        opt.innerHTML = questList[i]["questID"];
        opt.value = questList[i]["questID"];
        sel.appendChild(opt);
    }
}

getQuests();

// questListDone.onchange = function (){
//     for(let i=0; i <=questList.length;i++){
//
//         if(questList[i][""])
//     }
// }

function getQuests(){
    fetch("http://localhost:8000/codecoolerQuestManager",
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