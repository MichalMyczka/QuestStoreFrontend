const form = document.querySelector("#artifactUpdate-form");
const form2 = document.querySelector("#artifactGet-form");
let artifactsList = [];

function artifactListHtml(){
    document.getElementById("artifactsList").innerHTML = `
    <div class="artifacts-list">
    <label>
        <select id="artifacts-list-inner"></select>
</label>
</div>
`;
}

function addToList() {
    artifactListHtml();
    console.log(artifactsList);
    let sel = document.getElementById('artifacts-list-inner');
    for (let i = 0; i < artifactsList.length; i++) {
        let opt = document.createElement('option');
        opt.innerHTML = artifactsList[i]["artifact_Name"];
        opt.value = artifactsList[i]["artifact_Name"];
        sel.appendChild(opt);
    }
}

getArtifacts();

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = `artifactName=${this.artifactName.value}&codecoinsCost=${this.codecoinsCost.value}&artifactDescription=${this.artifactDescription.value}&artifactIs_solo=${this.artifactIs_solo.value}&artifactIs_Active=${this.artifactIs_Active.value}`;
    console.log(data);
    updateArtifact(data);
});

function getArtifacts(){
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
            artifactsList = getArtifacts;
            addToList();

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

