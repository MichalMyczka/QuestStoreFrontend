const form = document.querySelector("#createCodeCooler-form");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = `codeCoolerName=${this.codeCoolerName.value}
    &codeCoolerSurname=${this.codeCoolerSurname.value}
    &codeCoolerAdress=${this.codeCoolerAdress.value}
    &codeCoolerPhone=${this.codeCoolerPhone.value}
    &codeCoolerEmail=${this.codeCoolerEmail.value}`;

    console.log(data);
    addUser(data);
});

function addUser(data) {
    fetch("http://localhost:8000/mentorAddUser",
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
        .then(function (data) {
            console.log(data);
            // switch (user.role_ID) {
            //     case 3:
            //         window.location.href = "CreepPages/creepStartingPage.html";
            //         break;
            //     case 2:
            //         window.location.href = "MentorPages/mentorStartingPage.html";
            //         break;
            //     case 1:
            //         window.location.href = "CodecoolerPages/codecoolerStartingPage.html"
            //         break;
            // }
            // if(user.role_ID ===3) {
            //     window.location.href = "CreepPages/creepStartingPage.html";
            // }

        }).catch(function (error) {
        const message = document.querySelector(".message");
        message.innerHTML = error;
    });
}
