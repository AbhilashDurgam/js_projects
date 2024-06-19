const input = document.getElementById('input');
const btn = document.getElementById('btn');
const mytext = document.getElementById('mytext');
let age;

btn.onclick = function(){
    age = input.value;
    age = Number(age);
    if (age == 0){
        mytext.textContent = `your age is not be zero please enter your age properly`
    }
    else if (age < 0){
        mytext.textContent = `your age not be in negitive`
    }
    else if (age >= 18){
        mytext.textContent = `you are eligible to vote`;
    }
    else if (age < 18){
        mytext.textContent = `you are not eligible for vote`;
    }
    else{
        mytext.textContent = `Enter a number only`
    }
}