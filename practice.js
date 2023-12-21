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
















// let a;
// let b;
// let c;

// a = window.prompt('Enter side A');
// a = Number(a);

// b = window.prompt('Enter side b');
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow (b, 2));

// console.log('Side C' , c);





















// Type conversion = Change the datatype of a value to another (strings, numbers, booleans)

// // let age = window.prompt('How old are you?')

// // age = Number(age);
// // age += 1;

// // console.log('You are ' + age + ' years old today!');





// how to accept user input

//easy way with window prompt

// let userName = window.prompt('What is your name');





//hard way with html textbox

// let userName;

// document.getElementById("myButton").onclick= function(){

//     userName = document.getElementById("myText").value;
//     console.log(userName);
//     document.getElementById("myLabel").innerHTML = " Hello " + userName;

// }





// let firstName = 'Greggory';
// let age = 31;
// let student = false;

// if(student === true)
// console.log('Hello ' + firstName + ', ' + ' you are ' + age + ' years old. You are in school.');

// else 
// console.log('Hello ' + firstName + ', ' + ' you are ' + age + ' years old. You are not school.')

// document.getElementById('p1').innerHTML = 'Hello ' + firstName
// document.getElementById('p2').innerHTML = 'You are ' + age + ' years old!'
// document.getElementById('p3').innerHTML = "Are you a student: " + student

    
        
