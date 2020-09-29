
const form = document.querySelector("#mentorAdd-form");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = `mName=${this.mName.value}&mSurname=${this.mSurname.value}&mEmail=${this.mEmail.value}&mPhone=${this.mPhone.value}&mPassword=${this.mPassword.value}&mClass=${this.mClass.value}`;
    addMentor(data);
});

function addMentor(data) {
    fetch("http://localhost:8000/creepAddMentor",
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
        .then(function (mentorAdd) {

        }).catch(function (error) {

        const message = document.querySelector(".message");
        message.innerHTML = error;
    });
}