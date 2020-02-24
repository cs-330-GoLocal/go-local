const msgForm = (ev) => {
    let msgBox = document.getElementById("form");
    msgBox.classList.remove("hide");
}

const msgSend = (ev) => {
    let msgBox = document.getElementById("form");
    msgBox.classList.add("hide");
    alert("Message Sent!");
}

const closeMe = (ev) => {
    let msgBox = document.getElementById("form");
    msgBox.classList.add("hide");
}

let msgBtn = document.querySelector(".page-follow");
msgBtn.addEventListener("click", msgForm);

let sendBtn = document.getElementById("sendbutton");
sendBtn.addEventListener("click", msgSend);

let closeBtn = document.getElementById("closebutton")
closeBtn.addEventListener("click",closeMe)