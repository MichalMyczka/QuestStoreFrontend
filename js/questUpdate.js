const form = document.querySelector("#questUpdate-form");
const form2 = document.querySelector("#questGet-form")
let questList = [];

function questListHtml (){
    document.getElementById("questsList").innerHTML = `
    <div class="quests-list">
        <label>
            <select id="quest-list-inner">
                <option>Group</option>
                <option>Solo</option>
            </select>
        </label>
    </div>
`;
}

function addToList(){
    getQuests();
    questListHtml();
    console.log(questList);
    console.log("bla");
    for(let i=0; i <= questList.length; i++){
        document.getElementById("quest-list-inner").innerHTML += `
        <option> questList[i] </option>`
    }
}

addToList();

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = `questName=${this.questName.value}&codecoinsEarned=${this.codecoinsEarned.value}&questDescription=${this.questDescription.value}&questIs_basic=${this.questIs_basic.value}&questIs_Active=${this.questIs_Active.value}`;
    console.log(data);
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

            console.log(getQuests);
            function addToQuestList (){
                questList += getQuests;
            }

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

            console.log(questUpdate);


        }).catch(function (error) {

        const message = document.querySelector(".message");
        message.innerHTML = error;
    });

}