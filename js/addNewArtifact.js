const form = document.querySelector("#newArtifact-form");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = `artifactName=${this.artifactName.value}&codecoinsCost=${this.codecoinsCost.value}&artifactDescription=${this.artifactDescription.value}`;
    console.log(data);
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
            // user is authenticated, and cookie send by server is set in browser
            console.log(artifact);
        })

        .catch(function (error) {
        const message = document.querySelector(".message");
        message.innerHTML = error;
    });
}