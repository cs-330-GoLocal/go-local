const Replace = (classname) =>{
    let buttons = document.querySelectorAll('.' + classname + ' button');  //I can technically use the varaible string to replace .restaurant so it takes in a class name
    for (button of buttons){
        if (button.innerHTML === "Like"){
            let template = `<i class="fas fa-thumbs-up"></i>`
            button.innerHTML = template;
        }
        else if (button.innerHTML === "Dislike"){
            let template = `<i class="fas fa-thumbs-down"></i>`
            button.innerHTML = template;
        }
    }
}

Replace('restaurant');
Replace('bar');
Replace('beach');
Replace('camp');


// $(document).ready(function(){
//       $("<span>10</span>").insertAfter(".postcard button");
//   });

const getLikeButtons = () =>{
    let newarray = [];
    let array = document.querySelectorAll('.postcard button');
    for(let i = 0; i < array.length; i++){
        if(i%2 == 0){
            newarray.push(array[i]);
        }
    }
    return newarray;
}

let likeButtons = getLikeButtons();
console.log(likeButtons);

const getDislikeButtons = () => {
    let newarray = [];
    let array = document.querySelectorAll('.postcard button');
    for(let i = 0; i < array.length; i++){
        if(i%2 == 1){
            newarray.push(array[i]);
        }
    }
    return newarray;
}

let dislikeButtons = getDislikeButtons();
console.log(dislikeButtons);

const extractNumber = (string) => { //takes in a string and returns the numbers inside the string in a form of a string 
    let str = string; 
    let matches = str.match(/(\d+)/); 
    console.log(matches[0]);
    return matches[0];
} 

const pressedButton = (buttonarray) =>{  //pass in likeButtons and dislikeButtons
    for(elem of buttonarray){
        elem.onclick = handleclick; 
    }
}

const handleclick = (ev) =>{
    let icon = console.log(ev.currentTarget.innerHTML);  //this gives me the button tag whether it is dislike or like
    let button = ev.currentTarget.innerHTML;
    if(button === `<i class="fas fa-thumbs-up" aria-hidden="true"></i>`){
        console.log(ev.currentTarget.parentElement);  //this gives me the parent div tag with the button tag inside 
        let div2 = ev.currentTarget.parentElement.getElementsByTagName("h5");  //this gives me an array of size 2 of h5 tags 
        console.log(div2);
        let number = extractNumber(div2[0].innerHTML);
        console.log(number);
        const increment = Number(number) + 1; 
        div2[0].innerHTML = increment + " Likes";
    }
    else if(button === `<i class="fas fa-thumbs-down" aria-hidden="true"></i>`){
        console.log(ev.currentTarget.parentElement);  //this gives me the parent div tag with the button tag inside 
        let div2 = ev.currentTarget.parentElement.getElementsByTagName("h5");  //this gives me an array of size 2 of h5 tags 
        console.log(div2);
        console.log(div2[1].innerHTML);
        let number = extractNumber(div2[1].innerHTML);
        console.log(number);
        const increment = Number(number) - 1; 
        div2[1].innerHTML = increment + " Dislikes";
    }
    
}

pressedButton(dislikeButtons);
pressedButton(likeButtons);
