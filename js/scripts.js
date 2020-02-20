const msgForm = (ev) => {
    console.log("SEND MESSAGE BUTTON PRESSED");
    let msgBox = getElementByID("");
    msgBox.style.display = "none";
}

let msgBtn = document.querySelector(".page-follow")
msgBtn.addEventListener("click", msgForm);
