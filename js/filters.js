const cards = JSON.parse(cards.json);

function filter(listOfFilters) {
    for (cat of document.querySelectorAll(".category")) {
        cat.parentNode.removeChild(cat);
    }
    
    for (card of cards) {
        for(catg of card.categories) {
            if(listOfFilters.contains(catg)) {
                description = card.info.join("\n")
                catg.createPosts(catg,"",catg.name,description)
            }
        }
    }
}

function createPosts(category,photourl,location,description) {
    if(photourl === ""){
        photourl = "images/GoLocal-logo.jpeg";
    }

    if(category === ""){
        category = "Blank"
    }

    var newCategory = true;
    var categories = document.getElementsByClassName("category");

    for(item of categories) {
        if(item.id === category) {
            newCategory = false;
        }
    }

    if(newCategory){
        var template = `
        <div class ="category" id = "${category}">
            <h1>${category}</h1>
            <div class = "cat-content">
                <div class = "postcard">
                    <div class = "postimg">
                        <img src="${photourl}" alt="${location} Picture">
                    </div>
                    <h2>${location}</h2>
                    <h4>${description}</h4>
                </div>
            </div>
        </div>
        `;
        document.querySelector(".main").innerHTML += template;
    }
    else {
        var template = `
                <div class = "postcard">
                    <div class = "postimg">
                        <img src="${photourl}" alt="${location} Picture">
                    </div>
                    <h2>${location}</h2>
                    <h4>${description}</h4>
                </div>
            `;
        document.querySelector("#" + category + "> .cat-content").innerHTML += template;
    }
}