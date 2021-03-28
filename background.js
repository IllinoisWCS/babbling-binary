document.getElementById("first-check").addEventListener("click", function () {
    var user_input = document.getElementById("first-input").value;
    var output = document.getElementById("first-output");

    if (user_input == "3") {
        output.innerHTML = "Correct! Well done.";
    } else if (user_input == "4") {
        output.innerHTML = "Close! Remember that computer scientists number the places start from 0, not 1";
    } else if (user_input == "0") {
        output.innerHTML = "Not quite! Remember that we number the places from right to left, instead of left to right";
    } else {
        output.innerHTML = "Incorrect. Try again!";
    }
});

document.getElementById("first-input").addEventListener("keyup", function(event) {
    if (event.code === "Enter") {
        document.getElementById("first-check").click();
    }
});

// -------------------------------------

document.getElementById("second-check").addEventListener("click", function () {
    var user_input = document.getElementById("second-input").value;
    var output = document.getElementById("second-output");

    if (user_input == "2") {
        output.innerHTML = "Correct! Well done.";
    } else if (user_input == "3") {
        output.innerHTML = "Close! Remember that computer scientists number the places start from 0, not 1";
    } else if (user_input == "1") {
        output.innerHTML = "Not quite! Remember that we number the places from right to left, instead of left to right";
    } else {
        output.innerHTML = "Incorrect. Try again!";
    }
});

document.getElementById("second-input").addEventListener("keyup", function(event) {
    if (event.code === "Enter") {
        document.getElementById("second-check").click();
    }
});

// -------------------------------------

document.getElementById("third-check").addEventListener("click", function () {
    var user_input = document.getElementById("third-input").value;
    var output = document.getElementById("third-output");

    if (user_input == "1") {
        output.innerHTML = "Correct! Well done.";
    } else if (user_input == "2") {
        output.innerHTML = "Close! Remember that computer scientists number the places start from 0, not 1";
    } else {
        output.innerHTML = "Incorrect. Try again!";
    }
});

document.getElementById("third-input").addEventListener("keyup", function(event) {
    if (event.code === "Enter") {
        document.getElementById("third-check").click();
    }
});

// -------------------------------------

document.getElementById("fourth-check").addEventListener("click", function () {
    var user_input = document.getElementById("fourth-input").value;
    var output = document.getElementById("fourth-output");

    if (user_input == "0") {
        output.innerHTML = "Correct! Well done.";
    } else if (user_input == "1") {
        output.innerHTML = "Close! Remember that computer scientists number the places start from 0, not 1";
    } else if (user_input == "3") {
        output.innerHTML = "Not quite! Remember that we number the places from right to left, instead of left to right";
    } else {
        output.innerHTML = "Incorrect. Try again!";
    }
});

document.getElementById("fourth-input").addEventListener("keyup", function(event) {
    if (event.code === "Enter") {
        document.getElementById("fourth-check").click();
    }
});

// -------------------------------------

document.getElementById("btd-check").addEventListener("click", function() {
    var user_input = document.getElementById("btd-input").value;
    var output = document.getElementById("btd-output");

    if (user_input == "146") {
        output.innerHTML = "Correct! Well done.";
    } else {
        output.innerHTML = "Incorrect. The number you inputted is equivalent to " + parseInt(user_input).toString(2) + ". Try again!"; 
    }
});

document.getElementById("btd-input").addEventListener("keyup", function(event) {
    if (event.code === "Enter") {
        document.getElementById("btd-check").click();
    }
});

// -------------------------------------

document.getElementById("dtb-check").addEventListener("click", function() {
    var user_input = document.getElementById("dtb-input").value;
    var output = document.getElementById("dtb-output");

    if (user_input == "1110") {
        output.innerHTML = "Correct! Well done.";
    } else {
        output.innerHTML = "Incorrect. The number you inputted is equivalent to " + parseInt(user_input, 2).toString() + ". Try again!"; 
    }
});

document.getElementById("dtb-input").addEventListener("keyup", function(event) {
    if (event.code === "Enter") {
        document.getElementById("dtb-check").click();
    }
});

// -------------------------------------

document.getElementById("atn-check").addEventListener("click", function() {
    var user_input = parseInt(document.getElementById("atn-input").value);
    var output = document.getElementById("atn-output");

    if (user_input == 43) {
        output.innerHTML = "Correct! Well done.";
    } else if (user_input < 0 || user_input > 127) {
        output.innerHTML = "Be careful! The number you inputted won't convert to a valid ASCII character.";
    } else if (user_input > 31) {
        output.innerHTML = "Incorrect. The number you inputted is the ASCII character " + String.fromCharCode(user_input) + ".";
    } else {
        output.innerHTML = "Incorrect. The number you inputted can't be outputted.";
    }
});

document.getElementById("atn-input").addEventListener("keyup", function(event) {
    if (event.code === "Enter") {
        document.getElementById("atn-check").click();
    }
});

// -------------------------------------

document.getElementById("nta-check").addEventListener("click", function() {
    var user_input = document.getElementById("nta-input").value;
    var output = document.getElementById("nta-output");

    var int_ver = user_input.charCodeAt(0);

    if (user_input == "C") {
        output.innerHTML = "Correct! Well done.";
    } else if (user_input == "c") {
        output.innerHTML = "Close! Remember that ASCII is case-sensitive";
    } else if (user_input.length > 1 || user_input.length == 0) {
        output.innerHTML = "Be careful! You inputted more than one letter.";
    } else if (int_ver < 0 || int_ver > 127) {
        output.innerHTML = "Be careful! The character you inputted doesn't seem to be an ASCII character.";
    } else {
        output.innerHTML = "Incorrect. The ASCII character you inputted is " + int_ver.toString();
    }
});

document.getElementById("nta-input").addEventListener("keyup", function(event) {
    if (event.code === "Enter") {
        document.getElementById("nta-check").click();
    }
});