const display = document.querySelector('.calc .display');
document.querySelectorAll('.calc .buttons button')
    .forEach( btn => btn.addEventListener('click', btnClicked));

function btnClicked(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.calc .eq').addEventListener('click' ,
  () => display.value = eval(display.value) );

document.querySelector('.calc .eq').addEventListener('click' , validateExtraSum);

function validateExtraSum () {
    if (display.value === display.value + '+' + '+') {
        alert('error');
    }
}

let input = document.querySelector('input');
display.oninput = handleInput;
 function handleInput(e) {
     
 }