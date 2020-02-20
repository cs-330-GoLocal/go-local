const msgForm = (ev) => {
    let msgBox = document.getElementById("messageform");
    console.log(msgBox);
    console.log("got msgBox");
    msgBox.style.display = "block";
}

let msgBtn = document.querySelector(".page-follow")
msgBtn.addEventListener("click", msgForm);
