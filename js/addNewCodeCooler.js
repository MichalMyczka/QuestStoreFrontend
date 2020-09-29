const form = document.querySelector("#createCodeCooler-form");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = `cName=${this.cName.value}&email=${this.email.value}`;

    //&user_Surname=${this.user_Surname.value}&email=${this.email.value}
    //&cSurname=${this.cSurname.value}&cEmail=${this.cEmail.value}
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
            console.log(user);
        })

        .catch(function (error) {
            const message = document.querySelector(".message");
            message.innerHTML = error;
        });
}
