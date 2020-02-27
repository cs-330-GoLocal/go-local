function makeModal(info,images,ratio) {
    const modal_template = 
    `<div class = "backmodal" onclick = "closeModal()">
    </div class = "backmodal">
    <div class="modal" ratioAttr = "${ratio}">
        <button onclick=closeModal()><i class="fa fa-times"></i></button>
        <div class = "modal-imgs">
        ${images}
        </div>
        ${info}
        <div class = "like-bar">
            <div class = "recommend" style = "width:${ratio}%">Like! ${ratio}%</div>
            <div class = "unrecommend" style = "width:${100-ratio}%">Dislike! ${100-ratio}%</div>
        </div>
        
        <div class = "tabs">
            <button onclick="onTab(0)">Comments</button>
            <button onclick="onTab(1)">Questions</button>
        </div>
    
        <div class = "tabpane" id = "comments">
            <input type="text">
            <button onclick="addComment()">Post</button>
            <div class="opin">
            </div>
        </div>
        <div class = "tabpane" id = "questions">
            <input type = "text">
            <button onclick="addQuestion()">Ask</button>
            <div class="ask">
            </div>
        </div>
    </div>`;

    document.querySelector("body").innerHTML += modal_template;
    onTab(0);
}

function onTab(id) {
    if(id===0) {
        document.querySelector("#comments").style = ""
        document.querySelector("#questions").style = "display:none;"
        document.querySelector(".tabs").children[0].classList.add("selected")
        document.querySelector(".tabs").children[1].classList.remove("selected")
    }
    if(id===1) {
        document.querySelector("#questions").style = ""
        document.querySelector("#comments").style = "display:none;"
        document.querySelector(".tabs").children[1].classList.add("selected")
        document.querySelector(".tabs").children[0].classList.remove("selected")
    }
}

function likeIt() {
     
}

function dislikeIt() {

}

function closeModal() {
    elem = document.querySelector(".modal");
    elem.parentNode.removeChild(elem);
    elemtwo = document.querySelector(".backmodal");
    elemtwo.parentNode.removeChild(elemtwo);
}

function addComment() {
    const comment = document.querySelector("#comments > input").value;
    const commentcard = 
    `<div class = "comment-card">
        <h3>Kiara<h3>
        <p>${comment}</p>
    </div>`;
    document.querySelector(".opin").innerHTML += commentcard;
    document.querySelector("#comments > input").value = "";
}

function addQuestion() {
    const comment = document.querySelector("#questions > input").value;
    const commentcard = 
    `<div class = "comment-card">
        <h3>Kiara<h3>
        <p>${comment}</p>
    </div>`;
    document.querySelector(".ask").innerHTML += commentcard;
    document.querySelector("#questions > input").value = "";
}

for(card of document.querySelectorAll(".postcard")) {
    card.addEventListener("click",function(ev) {
        a = ev.currentTarget.querySelectorAll("h2,h3,h4");
        b = ev.currentTarget.querySelectorAll("img");
        texts = ``
        images = ``
        for(text of a) {
            texts+=text.outerHTML;
        }
        for(image of b) {
            images += image.outerHTML;
        }
        makeModal(texts,images,71)
    });
}