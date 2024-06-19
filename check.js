const check = document.getElementById('check');
const visa = document.getElementById('visa');
const paypal = document.getElementById('paypal');
const phonepay = document.getElementById('phonepay');
const submitbtn = document.getElementById('submitbtn');
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');

submitbtn.onclick = function(){
    if (check.checked){
        t1.textContent = `you are subscribed to my chennal`
    }
    else{
        t1.textContent = `you are NOT subscribed`
    }

    if (visa.checked){
        t2.textContent = `you are paying with visa`
    }
    else if (paypal.checked){
        t2.textContent = `you are paying with paypal`
    }
    else if (phonepay.checked){
        t2.textContent = `you are paying with phone pay`
    }
    else{
        t2.textContent = `you are not paying any thing`
    }
}