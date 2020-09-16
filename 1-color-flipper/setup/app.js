const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const text = document.querySelector('.color');
btn.addEventListener('click',function(){
    const randomNumber = randomNo();
    document.body.style.backgroundColor = colors[randomNumber];
    text.textContent = colors[randomNumber];
});

function randomNo(){
    return Math.floor(Math.random()*colors.length);
}