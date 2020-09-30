const form = document.querySelector("#createCodeCooler-form");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = `cName=${this.cName.value}&cSurname=${this.cSurname.value}&email=${this.email.value}&cPassword=${this.cPassword.value}&cPhone=${this.cPhone.value}&cClass=${this.cClass.value}`;
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

        })

        .catch(function (error) {
            const message = document.querySelector(".message");
            message.innerHTML = error;
        });
}
