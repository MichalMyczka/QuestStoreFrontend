
const form = document.querySelector("#classAdd-form");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = `className=${this.className.value}`;
    addClass(data);
});

function addClass(data) {
    fetch("http://localhost:8000/creepAddClass",
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
        .then(function (classAdd) {

        }).catch(function (error) {

        const message = document.querySelector(".message");
        message.innerHTML = error;
    });
}