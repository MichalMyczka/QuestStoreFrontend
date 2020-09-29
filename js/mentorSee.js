const form = document.querySelector("#mentorSee-form");
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
            document.getElementById("mName").innerText = "Name: " + mentorList[i]["userName"];
            document.getElementById("mSurname").innerText = "Surname: " + mentorList[i]["userSurname"];
            document.getElementById("mEmail").innerText = "Email: " + mentorList[i]["email"];
            document.getElementById("mPhone").innerText = "Phone: " + mentorList[i]["phone"];
            document.getElementById("mClass").innerText = "Mentor Class: " + mentorList[i]["userClassID"];
            document.getElementById("mIsActive").innerText = "Is Mentor Active: " + mentorList[i]["isActive"];
        }
    }
};

function getMentors(){
    fetch("http://localhost:8000/seeMentorProfile",
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