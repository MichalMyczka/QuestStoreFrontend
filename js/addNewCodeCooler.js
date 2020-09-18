const form = document.querySelector("#createCodeCooler-form");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = `user_Name=${this.user_Name.value}
    &user_Surname=${this.user_Surname.value}
    &codeCoolerAdress=${this.codeCoolerAdress.value}
    &email=${this.email.value}`;

    //&codeCoolerPhone=${this.codeCoolerPhone.value} goes up to data, commented for test

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

        }).catch(function (error) {
        const message = document.querySelector(".message");
        message.innerHTML = error;
    });
}
