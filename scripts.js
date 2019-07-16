let fname = prompt('What is ur first name?');
let lname = prompt('What is ur last name?');

while(!fname || !lname){
    fname = prompt('What is ur first name?');
    lname = prompt('What is ur last name?');
}

document.querySelector('#greeting').innerHTML = `<p>Hello, ${fname} ${lname}</p>`;
