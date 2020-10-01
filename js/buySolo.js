let artifactList = [];
let artifactSoloList = [];
let imageList = ["../../images/beer.jpg","../../images/mentorHelp.jpg","../../images/webinar.jpg","../../images/coding.jpg","../../images/gaming.jpg","../../images/coffee.jpg"]
let iteration = 0;

function soloArtifactTile() {

    for (let i=0; i <= artifactList.length; i++){
        if(artifactList[i]["solo"] === true){
            artifactSoloList = artifactList[i];
        let sel = document.getElementById("soloArtifacts");

        let artifactName =  artifactSoloList["artifactName"];
        let cost = "Cost: " + artifactSoloList["cost"];
        let description = artifactSoloList["description"];

        let isActive = artifactSoloList["active"];

        let div = document.createElement("div");
        div.classList.add("square");

        let image = document.createElement("img");
        image.src = imageList[iteration];
        image.width = 300;
        image.height = 300;

            iteration ++;

        let h3 = document.createElement("h3");
        h3.innerHTML = artifactName;

        let p1 = document.createElement("p");
        p1.innerHTML = description;

        let p2 = document.createElement("p");
        p2.innerHTML = cost;

        let button = document.createElement("button");
        button.classList.add("assignmentButton");
        button.type = "button";
        button.innerText = "Buy Artifact";

        let notAvailable = document.createElement("p");
        notAvailable.innerHTML = "Not Available";


        div.appendChild(image);
        div.appendChild(h3);
        div.appendChild(p1);
        div.appendChild(p2);
        if(isActive === true){
            div.appendChild(button);
        }
        else{
            div.appendChild(notAvailable);
        }
        sel.appendChild(div);
    }

    }
}


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
            soloArtifactTile();

        }).catch(function (error) {

        const message = document.querySelector(".message");
        message.innerHTML = error;
    });
}

getArtifacts();
