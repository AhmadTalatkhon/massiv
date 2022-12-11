let text_area = document.getElementById ("textarea");
let numbers = document.getElementById ("num");


function func(){
    let text = text_area.value 
    text = text.trim();
    let matn = text.split(" ");
    numbers.innerText = matn.length;
    
}