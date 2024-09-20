function encryptText() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = btoa(inputText); // Base64 encoding
    document.getElementById('encryptedText').innerText = encryptedText;
  }