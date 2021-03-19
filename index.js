document.getElementById("encode-button").addEventListener("click", function() {
    var encoded_message = "";
    var message = document.getElementById("encode-input").value;

    // references:
    // https://stackoverflow.com/questions/94037/convert-character-to-ascii-code-in-javascript
    // https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
    for (var i = 0; i < message.length; i++) {
        encoded_message += message.charCodeAt(i).toString(2).padStart(8, "0");
    }

    document.getElementById("encode-output").innerHTML = encoded_message;
  });

document.getElementById("decode-button").addEventListener("click", function() {
    var decoded_message = "";
    var message = document.getElementById("decode-input").value;
    
    // references:
    // https://stackoverflow.com/questions/11103487/how-to-convert-binary-representation-of-number-from-string-to-integer-number-in
    // https://www.w3schools.com/jsref/jsref_fromcharcode.asp
    for (var i = 0; i < message.length; i += 8) {
        decoded_message += String.fromCharCode(parseInt(message.substring(i, i+8), 2));
    }

    document.getElementById("decode-output").innerHTML = decoded_message;
});