const msgForm = (ev) => {
    let msgBox = document.getElementById("messageform");
    msgBox.style.display = "block";
}

let msgBtn = document.querySelector(".page-follow")
msgBtn.addEventListener("click", msgForm);
