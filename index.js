// Create `prompt` to ask for name
// 'name' is here as a GLOBAL VARIABLE that 'anyone' in the <script> can freely access and modify.
let name = prompt('What is your name?');

// This is a FUNCTION DECLARATION
// Normally, we can avoid using the same name for a LOCAL parameter as a GLOBAL VARIABLE.
function checkName(nameStr){
    // !"" - If nameStr is 'falsey' then this will run.
    if(!nameStr){
    // If nameStr is false-y
        nameStr = prompt('Really, what is your name?');

        // RECURSION - Fxn. calls itself again
        nameStr = checkName(nameStr);
    }

    return nameStr;
}

// FUNCTION EXPRESSION
// let checkName = function() { // Function code }

// We capture what is RETURNED by checkName and overwrite 'name' with that value;
name = checkName(name);

// Use innerHTML to 'inject' #greeting with a <p> containing the value of name
document.querySelector('#greeting').innerHTML = `<p style="color: white;">${name}</p>`;
// document.querySelector('#greeting').textContent = `<p style="color: white;">${name}</p>`;

