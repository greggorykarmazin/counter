let count = 0;

document.getElementById('decreaseBtn').onclick = function(){
count -=1;
document.getElementById("countLabel").innerHTML = count;
}

document.getElementById('resetBtn').onclick = function(){
    count =0;
    document.getElementById("countLabel").innerHTML = count;
    
}

document.getElementById('increaseBtn').onclick = function(){
    count +=1;
    document.getElementById("countLabel").innerHTML = count;
    
}





















// document.getElementById('submitButton').onclick = function(){
//     a = document.getElementById('aTextBox').value;
//     a = Number (a);

//     b = document.getElementById('bTextBox').value;
//     b = Number (b);

//     c = Math.sqrt(Math.pow(a, 2) + Math.pow (b, 2));

//     document.getElementById("cLabel").innerHTML = 'Side C: ' +c;
// }








































