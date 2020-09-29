const form = document.querySelector("#newArtifact-form");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = `artifactName=${this.artifactName.value}&codecoinsCost=${this.codecoinsCost.value}&artifactDescription=${this.artifactDescription.value}&artifactIsSolo=${this.artifactIsSolo.value}&artifactIsActive=${this.artifactIsActive.value}`;
    addArtifact(data);
});

function addArtifact(data) {
    fetch("http://localhost:8000/mentorAddArtifact",
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
        .then(function (artifact) {

        })

        .catch(function (error) {
        const message = document.querySelector(".message");
        message.innerHTML = error;
    });
}