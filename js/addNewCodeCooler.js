const form = document.querySelector("#createCodeCooler-form");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // const data = `user_Name=${this.user_Name.value}
    // &user_Surname=${this.user_Surname.value}
    // &codeCoolerAdress=${this.codeCoolerAdress.value}
    // &email=${this.email.value}`;

    const data = `email=${this.email.value}`;


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
        .then(function (user) {
            // user is authenticated, and cookie send by server is set in browser
            console.log(user);
        })

        .catch(function (error) {
            const message = document.querySelector(".message");
            message.innerHTML = error;
        });
}
