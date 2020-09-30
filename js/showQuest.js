let questList = [];

function questTile() {
    document.getElementById("tile1").innerHTML = `
        <div class="tile" id="tile1">
        <h3></h3>
        <p>salary: 0cc</p>
        <button class="assignmentButton" type="button">Accept assignment</button>
    </div>
    `;
}

function addQuestsToList(){
    let sel = document.getElementById("quest-list-inner");
    for(let i=0; i <= questList.length; i++){
        let opt = document.createElement('option');
        opt.innerHTML = questList[i]["questName"];
        opt.value = questList[i]["questName"];
        sel.appendChild(opt);
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
            addQuestsToList();

        }).catch(function (error) {

        const message = document.querySelector(".message");
        message.innerHTML = error;
    });
}
questTile();
getQuests();