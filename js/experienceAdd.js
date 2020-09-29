
const form = document.querySelector("#experienceAdd-form");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = `levelTitle=${this.levelTitle.value}&codepointAmount=${this.codepointAmount.value}`;
    addExperience(data);
});

function addExperience(data) {
    fetch("http://localhost:8000/createExperienceLvl",
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
        .then(function (experienceAdd) {

        }).catch(function (error) {

        const message = document.querySelector(".message");
        message.innerHTML = error;
    });
}