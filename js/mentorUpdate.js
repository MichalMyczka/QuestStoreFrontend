const form = document.querySelector("#mentorUpdate-form");
let mentorList = [];
let mentorListDone = document.getElementById("mentors-list-inner");
let data;



function addMentorsToList(){
    let sel = document.getElementById("mentors-list-inner");
    for(let i=0; i <= mentorList.length; i++){
        if (mentorList[i]["roleID"] === 2){
            let opt = document.createElement('option');
            opt.innerHTML = mentorList[i]["userName"];
            opt.value = mentorList[i]["userName"];
            sel.appendChild(opt);
        }
    }
}

getMentors();

mentorListDone.onchange = function (){
    for(let i=0; i <= mentorList.length; i++){

        if (mentorList[i]["userName"] === (mentorListDone.valueOf()).value){
            data = `mID=${mentorList[i]["userID"]}&`
            document.getElementById("mName").value = mentorList[i]["userName"];
            document.getElementById("mSurname").value = mentorList[i]["userSurname"];
            document.getElementById("mEmail").value = mentorList[i]["email"];
            document.getElementById("mPhone").value = mentorList[i]["phone"];
            document.getElementById("mPassword").value = mentorList[i]["password"];
            document.getElementById("mClass").value = mentorList[i]["userClassID"];
            document.getElementById("mIsActive").value = mentorList[i]["isActive"];
        }
    }
};

form.addEventListener('submit', function (e) {
    e.preventDefault();
    data += `mName=${this.mName.value}&mSurname=${this.mSurname.value}&mEmail=${this.mEmail.value}&mPhone=${this.mPhone.value}&mPassword=${this.mPassword.value}&mClass=${this.mClass.value}&mIsActive=${this.mIsActive.value}`;
    updateMentor(data);
});

function getMentors(){
    fetch("http://localhost:8000/creepEditMentor",
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
        .then(function (getMentors) {
                mentorList = getMentors;
                addMentorsToList();

        }).catch(function (error) {

        const message = document.querySelector(".message");
        message.innerHTML = error;
    });
}

function updateMentor(data) {
    fetch("http://localhost:8000/creepEditMentor",
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
        .then(function (mentorUpdate) {

        }).catch(function (error) {

        const message = document.querySelector(".message");
        message.innerHTML = error;
    });


}