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