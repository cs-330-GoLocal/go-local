const getChildren = (parent) => { //returns an array of children 
    return parent.children;
}

const Tags = () =>{
    let allOptions = document.querySelectorAll(".dropbtn option");
    console.log(allOptions);
    for (option of allOptions){
        const text = option.innerText;
        option.onclick = addTag(text);
    }
}

const addTag = (text) => {
    let template = `<a class="tag">${text} <span class="remove-icon"> × </span></a>`
    let element = document.getElementById('alltags');
    element.innerHTML += template;
}

//Tags();