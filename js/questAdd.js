
const form = document.querySelector("#questAdd-form");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = `questName=${this.questName.value}&codecoinsEarned=${this.codecoinsEarned.value}&questIsActive=${this.questIsActive}&questDescription=${this.questDescription.value}&questIsBasic=${this.questIsBasic}`;
    addQuest(data);
});

function addQuest(data) {
    fetch("http://localhost:8000/addQuest",
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
        .then(function (questAdd) {

        }).catch(function (error) {

        const message = document.querySelector(".message");
        message.innerHTML = error;
    });
}