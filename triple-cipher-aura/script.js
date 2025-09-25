// Triple-layer custom cipher:
// Layer 1: Shift letters by key1
// Layer 2: Group reverse with group size key2
// Layer 3: XOR each character code with key3

function shiftChar(c, key) {
  const A = 'A'.charCodeAt(0);
  const a = 'a'.charCodeAt(0);
  if (c >= 'A' && c <= 'Z') {
    return String.fromCharCode(((c.charCodeAt(0) - A + key) % 26) + A);
  }
  if (c >= 'a' && c <= 'z') {
    return String.fromCharCode(((c.charCodeAt(0) - a + key) % 26) + a);
  }
  return c;
}

function unshiftChar(c, key) {
  return shiftChar(c, 26 - (key % 26));
}

function groupReverse(str, groupSize) {
  let result = '';
  for (let i = 0; i < str.length; i += groupSize) {
    let group = str.slice(i, i + groupSize);
    result += group.split('').reverse().join('');
  }
  return result;
}

function xorString(str, key) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i) ^ key;
    result += String.fromCharCode(code);
  }
  return result;
}

function encrypt(text, k1, k2, k3) {
  // Layer 1: shift letters
  let shifted = Array.from(text).map(c => shiftChar(c, k1)).join('');
  // Layer 2: group reverse
  let reversed = groupReverse(shifted, k2);
  // Layer 3: XOR
  let encrypted = xorString(reversed, k3);
  return encrypted;
}

function decrypt(text, k1, k2, k3) {
  // Reverse Layer 3: XOR
  let xorRev = xorString(text, k3);
  // Reverse Layer 2: group reverse
  let reversedRev = groupReverse(xorRev, k2);
  // Reverse Layer 1: unshift letters
  let decrypted = Array.from(reversedRev).map(c => unshiftChar(c, k1)).join('');
  return decrypted;
}

const inputText = document.getElementById('inputText');
const key1 = document.getElementById('key1');
const key2 = document.getElementById('key2');
const key3 = document.getElementById('key3');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const outputText = document.getElementById('outputText');

encryptBtn.addEventListener('click', () => {
  const text = inputText.value;
  const k1 = parseInt(key1.value);
  const k2 = parseInt(key2.value);
  const k3 = parseInt(key3.value);

  if (!text) {
    outputText.value = 'Please enter text to encrypt.';
    return;
  }
  if (
    isNaN(k1) || k1 < 1 || k1 > 25 ||
    isNaN(k2) || k2 < 2 || k2 > 10 ||
    isNaN(k3) || k3 < 1 || k3 > 255
  ) {
    outputText.value = 'Keys out of valid range.';
    return;
  }
  const encrypted = encrypt(text, k1, k2, k3);
  outputText.value = encrypted;
});

decryptBtn.addEventListener('click', () => {
  const text = inputText.value;
  const k1 = parseInt(key1.value);
  const k2 = parseInt(key2.value);
  const k3 = parseInt(key3.value);

  if (!text) {
    outputText.value = 'Please enter text to decrypt.';
    return;
  }
  if (
    isNaN(k1) || k1 < 1 || k1 > 25 ||
    isNaN(k2) || k2 < 2 || k2 > 10 ||
    isNaN(k3) || k3 < 1 || k3 > 255
  ) {
    outputText.value = 'Keys out of valid range.';
    return;
  }
  const decrypted = decrypt(text, k1, k2, k3);
  outputText.value = decrypted;
});
