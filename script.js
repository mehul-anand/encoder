// Function to encode a message using a Caesar cipher
function encodeMessage() {
  const message = document.getElementById('inputMessage').value;
  let shift = parseInt(document.getElementById('shift').value);
  
  // Normalize shift to be within the range of 0 to 25
  shift = ((shift % 26) + 26) % 26;

  const encodedMessage = caesarCipher(message, shift);
  document.getElementById('output').innerText = encodedMessage;
  document.getElementById('copyFeedback').innerText = ''; // Clear copy feedback
}

// Function to decode a message using a Caesar cipher
function decodeMessage() {
  const message = document.getElementById('inputMessage').value;
  let shift = parseInt(document.getElementById('shift').value);
  
  // Normalize shift to be within the range of 0 to 25
  shift = ((shift % 26) + 26) % 26;
  
  // To decode, use negative shift
  const decodedMessage = caesarCipher(message, -shift);
  document.getElementById('output').innerText = decodedMessage;
  document.getElementById('copyFeedback').innerText = ''; // Clear copy feedback
}

// Caesar cipher implementation
function caesarCipher(str, shift) {
  return str.split('').map(char => {
      if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0);
          let base = code >= 65 && code <= 90 ? 65 : 97;
          return String.fromCharCode(((code - base + shift) % 26 + 26) % 26 + base);
      }
      return char;
  }).join('');
}

// Function to copy text to clipboard
function copyText() {
  const outputText = document.getElementById('output').innerText;
  if (outputText) {
      navigator.clipboard.writeText(outputText).then(() => {
          document.getElementById('copyFeedback').innerText = 'Text copied to clipboard!';
      }).catch(err => {
          document.getElementById('copyFeedback').innerText = 'Failed to copy text.';
          console.error('Failed to copy text: ', err);
      });
  } else {
      document.getElementById('copyFeedback').innerText = 'No text to copy.';
  }
}
