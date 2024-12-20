const no_dice = document.getElementById("no_dice");
const button = document.getElementById("button");
const result = document.getElementById("result");
const imgs = document.getElementById("imgs");
let values = [];
let images = [];

button.onclick = function() { 
    values = [];
    images = [];
    for(let i = 0; i < no_dice.value; i++){
        let value = Math.floor(Math.random() * 6) + 1;  
        values.push(value);
        images.push(`<img src="Images/${value}.png">`);
    }
    let together = values.join(", ");
    result.textContent = "dice: " + together;
    imgs.innerHTML = images.join('');
}