/*alert ('Kate, u are so beautiful!');
let years = prompt('Сколько вам лет?', '');
let question = confirm('It is ok!');*/

/*let name = prompt('What is your name?', '');
let userName = alert(name);*/

/*let question = prompt('What is the main name of JavaScript?', '');
if (question == 'ECMAScript') {
    alert ('You are true');
}
else {
    alert('ECMAScript!');
}*/

/*let number = prompt('Enter your number','');
if (number == 1){
    alert ('1');
}
else if (number == 0){
    alert ('0');
}
else {
    alert ('-1');
}*/

let login = prompt('Enter your login', '');
if (login == 'Admin'){
    let password = prompt('Enter your password','');
    if (password == 1234){
        alert('You are welcome');
    }
    else if (password == null){
        alert('Enter canceled');
    }
    else {
        alert('Incorrect password');
    }
}
else if (login == null){
    alert('Enter canceled');
}
else{
    alert('I do not know you');
}
 
















