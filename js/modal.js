function makeModal(title,category,address,images) {
    const modal_template = 
    `<div class="modal">
        <button>Close</button>
        <div class = "modal-imgs">

        </div>
        <h1>${data.title}</h1>
        <h3>${data.category}</h3>
        <h4>${data.address}</h4>
        <span class = "like-bar">
            <div class = "recommend"></div>
            <div class = "unrecommend"></div>
        </span>
        <button>Recommend</button>
        <button>Discourage</button>
        
        <div class = "tabs">
            <button onclick="onTab(0)">Comments</button>
            <button onclick="onTab(1)">Questions</button>
        </div>
    
        <div class = "tabpane" id = "comments">
            <input type="text">
            <button>Post</button>
            <div class="opin">
            </div>
        </div>
        <div class = "tabpane" id = "questions">
            <input type = "text">
            <button>Ask</button>
            <div class="ask">
            </div>
        </div>
    </div>`;

    document.querySelector("body").innerHTML += modal_template;

    images = document.querySelector(".modal-imgs")
    for(image of images) {
        images.innerHTML += `<img src="${image}">`
    }

}

function onTab(id) {
    if(id===0) {
        document.querySelector("#comments").style = ""
        document.querySelector("#questions").style = "display:none;"
    }
    if(id===1) {
        document.querySelector("#questions").style = ""
        document.querySelector("#comments").style = "display:none;"
    }
}

function likeIt() {

}

function addComment(comment) {
    const commentcard = 
    `<div class = "comment-card">
        <h3>Kiara McNulty<h3>
        <p>${comment}</p>
    </div>`;
    document.querySelector(".opin").innerHTML += commentcard;
}

for(card of document.querySelectorAll(".postcard")) {
    card.addEventListener("click",function(ev) {
        ev.currentTarget;
    });
}