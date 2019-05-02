// Establish an emtpy Array in the global scope
let nameArr = [];

nameArr[0] = prompt('What is your first name?');
nameArr[1] = prompt('What is your last name?');

// name is an Array of 'first name' and 'last name.'
function checkName(name){
    if(!name[0] || !name[1]){
        // Developer's Note: We are requiring both pieces of information even if only 1 is blank!
        name[0] = prompt('Really, what is your first name?');
        name[1] = prompt('Really, what is your last name?');

        // RECURSION - Fxn. calls itself again
        name = checkName(name);
    }

    return name;
}

// We capture what is RETURNED by checkName and overwrite 'nameArr' with that value;
nameArr = checkName(nameArr);

// Use innerHTML to 'inject' #greeting with a <p> containing the value of name
document.querySelector('#greeting').innerHTML = `<p style="color: white;">${nameArr[0]} ${nameArr[1]}</p>`;

