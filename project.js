
const increbtn = document.getElementById('increbtn');
const count = document.getElementById('count');
const reset = document.getElementById('reset');
const decrebtn = document.getElementById('decrebtn');

let c = 0;
increbtn.onclick = function(){
    c++;
    count.textContent = c;
}

decrebtn.onclick = function(){
    c--;
    count.textContent = c;
}
reset.onclick = function(){
    c = 0;
    count.textContent = c;
}