function makeModal(info,images,ratio,c,d) {

    const modal_template = 
    `<div class = "backmodal" onclick = "closeModal()">
    </div class = "backmodal">
    <button onclick=closeModal() class="ptr modal1"><i class="fa fa-times"></i></button>
    <button onclick="handleFavorites(event)" class="favbtn modal2 ptr"><i class="fa fa-star"></i></button>
    <div class="modal" ratioAttr = "${ratio}">
        <div class = "modal-imgs">
        ${images}
        </div>
        ${info}
        <br>
        <div class = "like-bar">
            <div class = "recommend" style = "width:${ratio}%">Likes: <b>${c}</b></div>
            <div class = "unrecommend" style = "width:${100-ratio}%">Dislikes: <b>${d}</b></div>
        </div>
        <button onclick="likeIt()" class="ptr mlik"><i class = "fa fa-thumbs-up"></i></button>Likes: <b>${c}</b>
        <button onclick="dislikeIt()" class="ptr mlik"><i class = "fa fa-thumbs-down"></i></button>Dislikes: <b>${d}</b>
        <br>
        <div class = "tabs">
            <button class="ptr" onclick="onTab(0)">Comments</button>
            <button class="ptr" onclick="onTab(1)">Questions</button>
        </div>
    
        <div class = "tabpane" id = "comments">
            <input type="text">
            <button class="ptr" onclick="addComment()">Post</button>
            <div class="opin">
            </div>
        </div>
        <div class = "tabpane" id = "questions">
            <input type = "text">
            <button class="ptr" onclick="addQuestion()">Ask</button>
            <div class="ask">
            </div>
        </div>
    </div>`;
    console.log("hello");
    document.querySelector("#dummy").innerHTML += modal_template;
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
    likeb = document.querySelectorAll(".modal > button")[0];
    dislikeb = document.querySelectorAll(".modal > button")[1];
    num1 = document.querySelector(".recommend > b");
    num2 = document.querySelector(".unrecommend > b");

    if(likeb.classList.contains("liked")){
        num1.innerHTML = parseInt(num1.innerHTML)-1;
        likeb.classList.remove("liked");
    }
    else{
        num1.innerHTML = parseInt(num1.innerHTML)+1;
        likeb.classList.add("liked");
        if(dislikeb.classList.contains("dled")) {
            dislikeb.classList.remove("dled");
            num2.innerHTML = parseInt(num2.innerHTML)-1;
        }
    }

    n1 = parseInt(num1.innerHTML);
    n2 = parseInt(num2.innerHTML);
    e = Math.ceil((n1)/(n1+n2)*100);

    document.querySelector(".recommend").style = "width:"+e+"%;";
    document.querySelector(".unrecommend").style = "width:"+(100-e)+"%;";
    
    lar = document.querySelectorAll(".modal > b");
    lar[0].innerHTML = num1.innerHTML;
    lar[1].innerHTML = num2.innerHTML;
}

function dislikeIt() {
    likeb = document.querySelectorAll(".modal > button")[0];
    dislikeb = document.querySelectorAll(".modal > button")[1];
    num1 = document.querySelector(".recommend > b");
    num2 = document.querySelector(".unrecommend > b");

    if(dislikeb.classList.contains("dled")) {
        num2.innerHTML = parseInt(num2.innerHTML)-1;
        dislikeb.classList.remove("dled");
    }
    else{
        num2.innerHTML = parseInt(num2.innerHTML)+1;
        dislikeb.classList.add("dled");
        if(likeb.classList.contains("liked")) {
            num1.innerHTML = parseInt(num1.innerHTML)-1;
            likeb.classList.remove("liked");
        }
    }

    n1 = parseInt(num1.innerHTML);
    n2 = parseInt(num2.innerHTML);
    e = Math.ceil((n1)/(n1+n2)*100);

    document.querySelector(".recommend").style = "width:"+e+"%;"
    document.querySelector(".unrecommend").style = "width:"+(100-e)+"%;"

    lar = document.querySelectorAll(".modal > b");
    lar[0].innerHTML = num1.innerHTML;
    lar[1].innerHTML = num2.innerHTML;
}

function closeModal() {
    elem = document.querySelector("#dummy");
    elem.innerHTML = ``;
}

function addComment() {
    const comment = document.querySelector("#comments > input").value;
    const commentcard = 
    `<div class = "comment-card" style="margin-left:10px;">
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
    console.log("hello");
    card.addEventListener("click",function(ev) {
        a = ev.currentTarget.querySelectorAll("h2,h3,h4");
        b = ev.currentTarget.querySelectorAll("img");
        c = parseInt(ev.currentTarget.getAttribute("likes"));
        if(isNaN(c)){
            c = 4;
        }
        d = parseInt(ev.currentTarget.getAttribute("dls"));
        if(isNaN(d)){
            d = 1;
        }

        e = Math.ceil((c/(c+d))*100);

        texts = ``
        images = ``
        for(text of a) {
            texts+=text.outerHTML;
        }
        for(image of b) {
            images += image.outerHTML;
        }
        if(ev.target.classList.contains("fa") || ev.target.classList.contains("favbtn")) {
            return;
        }
        makeModal(texts,images,e,c,d);
    });
}

function cardMe() {
    for(card of document.querySelectorAll(".postcard")) {
        console.log("hello");
        card.addEventListener("click",function(ev) {
            a = ev.currentTarget.querySelectorAll("h2,h3,h4");
            b = ev.currentTarget.querySelectorAll("img");
            c = parseInt(ev.currentTarget.getAttribute("likes"));
            if(isNaN(c)){
                c = 4;
            }
            d = parseInt(ev.currentTarget.getAttribute("dls"));
            if(isNaN(d)){
                d = 1;
            }
    
            e = Math.ceil((c/(c+d))*100);
    
            texts = ``
            images = ``
            for(text of a) {
                texts+=text.outerHTML;
            }
            for(image of b) {
                images += image.outerHTML;
            }
            if(ev.target.classList.contains("fa") || ev.target.classList.contains("favbtn")) {
                return;
            }
            makeModal(texts,images,e,c,d);
        });
    }
}
