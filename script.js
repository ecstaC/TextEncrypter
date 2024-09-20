function encryptText() {
  let inputText = document.getElementById('inputText').value;
  let encryptedText = btoa(inputText); // Base64 encoding
  document.getElementById('outputText').innerText = encryptedText;
}

function decryptText() {
  let inputText = document.getElementById('inputText').value;
  try {
    let decryptedText = atob(inputText); // Base64 decoding
    document.getElementById('outputText').innerText = decryptedText;
  } catch (e) {
    document.getElementById('outputText').innerText = "Invalid input for decryption!";
  }
}
