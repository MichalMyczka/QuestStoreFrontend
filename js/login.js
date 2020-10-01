const form = document.querySelector("#login-form");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = `email=${this.email.value}&password=${this.password.value}`;
    login(data);
});

function login(data) {
    fetch("http://localhost:8000/login",
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
            let userID = user.userID;
            // alert("zalogowany user o ID nr: " + userID);
            localStorage.setItem("loggedUserID", userID);
            switch (user.roleID) {
                case 3:
                    window.location.href = "CreepPages/creepStartingPage.html";
                    break;
                case 2:
                    window.location.href = "MentorPages/mentorStartingPage.html";
                    break;
                case 1:
                    window.location.href = "CodecoolerPages/codecoolerStartingPage.html"
                    break;
            }

        }).catch(function (error) {

            const message = document.querySelector(".message");
            message.innerHTML = error;
    });
}