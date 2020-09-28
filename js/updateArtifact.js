const form = document.querySelector("#artifactUpdate-form");
let artifactList = [];
let artifactListDone = document.getElementById('artifacts-list-inner');



function addArtifactsToList() {
    let sel = document.getElementById("artifacts-list-inner");
    for (let i = 0; i <= artifactList.length; i++) {
        let opt = document.createElement('option');
        opt.innerHTML = artifactList[i]["artifactName"];
        opt.value = artifactList[i]["artifactName"];
        sel.appendChild(opt);
    }
}

getArtifacts();

artifactListDone.onchange = function (){
    for (let i=0; i <= artifactList.length; i++){
        if(artifactList[i]["artifactName"] === (questListDone.valueOf()).value){
            document.getElementById("artifactName").value = artifactList[i]["artifactName"];
            document.getElementById("codecoinsCost").value = artifactList[i]["cost"];
            document.getElementById("artifactDescription").value = artifactList[i]["description"];
            document.getElementById("artifactIsSolo").value = artifactList[i]["solo"];
            document.getElementById("artifactIsActive").value = artifactList[i]["active"];
        }
    }
};

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = `artifactName=${this.artifactName.value}&codecoinsCost=${this.codecoinsCost.value}&artifactDescription=${this.artifactDescription.value}&artifactIsSolo=${this.artifactIsSolo.value}&artifactIsActive=${this.artifactIsActive.value}`;
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
            artifactList = getArtifacts;
            console.log(artifactList);
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

        }).catch(function (error) {

        const message = document.querySelector(".message");
        message.innerHTML = error;
    });
}

