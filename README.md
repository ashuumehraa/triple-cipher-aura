# Triple-Layer Custom Cipher

A compact, modern web app that applies a unique triple-layer encryption and decryption inspired by Triple DES but using custom methods.

## Features

- **Triple-Layer Encryption:**
  - **Layer 1:** Caesar-style letter shifting by a numeric key (1-25).
  - **Layer 2:** Group reversal of characters by a configurable group size (2-10).
  - **Layer 3:** XOR encryption using a numeric key (1-255).
- Intuitive interface with inputs for text and three keys.
- Real-time Encrypt and Decrypt buttons.
- Responsive and visually attractive, works well on mobile, tablets, and desktop.
- Fully client-side; no server or backend required.
- Developer credit: Ashutosh Jhariya.

## How It Works

The encryption applies three sequential transformations to the input text:

1. Letters are shifted within the alphabet by Key 1 (like a Caesar cipher).
2. The shifted text is broken into groups (Key 2) and each group of characters is reversed.
3. Each character code in the reversed text is XOR-ed with Key 3.

Decryption reverses these steps in the exact opposite order.

## Usage

1. Open `index.html` in any modern browser.
2. Enter the text you want to encrypt or decrypt.
3. Specify the three keys:
   - Key 1: Shift amount (1-25)
   - Key 2: Group size for reversal (2-10)
   - Key 3: XOR key (1-255)
4. Click **Encrypt** to encode the text or **Decrypt** to decode.
5. View results in the output box.

## File Structure

custom-triple-cipher/
│
├── index.html # Main HTML file with UI and embedded JS
├── style.css # CSS for layout and styling (if separated)
├── script.js # JavaScript with cipher logic (if separated)
└── README.md # This documentation file

text

## Customization

- Modify the keys for different encryption strength.
- Styling can be changed easily via CSS.
- Cipher logic can be enhanced or replaced in `script.js`.

## License

This project is open source under the MIT License.

## Contact

Developer: Ashutosh Jhariya  
Feel free to reach out for suggestions or collaborations.
