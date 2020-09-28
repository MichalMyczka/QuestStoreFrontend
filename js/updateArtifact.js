const form = document.querySelector("#artifactUpdate-form");
const form2 = document.querySelector("#artifactGet-form");
let artifactList = [];

function artifactListHtml(){
    document.getElementById("artifactsList").innerHTML = `
    <div class="artifacts-list">
        <label>
            <select id="artifacts-list-inner">
            </select>
        </label>
    </div>
`;
}

function addArtifactsToList() {
    artifactListHtml();
    console.log(artifactList);
    let sel = document.getElementById("artifacts-list-inner");
    for (let i = 0; i <= artifactList.length; i++) {
        let opt = document.createElement('option');
        opt.innerHTML = artifactList[i]["artifactName"];
        opt.value = artifactList[i]["artifactName"];
        sel.appendChild(opt);
    }
}

getArtifacts();

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = `artifactName=${this.artifactName.value}&codecoinsCost=${this.codecoinsCost.value}&artifactDescription=${this.artifactDescription.value}&artifactIsSolo=${this.artifactIsSolo.value}&artifactIsActive=${this.artifactIsActive.value}`;
    console.log(data);
    updateArtifact(data);
});

function getArtifacts(){
    console.log("blep");
    fetch("http://localhost:8000/updateArtifact",
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
        .then(function (getArtifacts) {
            console.log(getArtifacts);
            artifactList = getArtifacts;
            addArtifactsToList();

        }).catch(function (error) {

        const message = document.querySelector(".message");
        message.innerHTML = error;
    });

    }

function updateArtifact(data) {
    fetch("http://localhost:8000/updateArtifact",
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
        .then(function (artifactUpdate) {

            console.log(artifactUpdate);


        }).catch(function (error) {

        const message = document.querySelector(".message");
        message.innerHTML = error;
    });


}

