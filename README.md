# RGB to Hex Color Converter
This is a simple RGB to Hex Color Converter built with React, TypeScript, Vite, and Tailwind CSS. The app allows you to input RGB values, converts them to a Hex color code, and provides a feature to copy the Hex code to your clipboard.

## Features
- Convert RGB to Hex: Input Red, Green, and Blue values between 0 and 255, and the app converts them to a Hexadecimal color code.
- Clipboard Support: Copy the generated Hex code to the clipboard by clicking on the copy icon.
- Paste RGB Values: You can paste a space-separated RGB value (e.g., 33 126 196) into the first input (Red), and it will automatically populate all three inputs (Red, Green, and Blue).

## Technologies Used
- React: A JavaScript library for building user interfaces.
- TypeScript: Typed superset of JavaScript that provides static typing.
- Vite: A fast build tool that serves your app during development.
- Tailwind CSS: A utility-first CSS framework for building responsive UIs.
- PostCSS: Used for processing Tailwind CSS.
- Autoprefixer: Adds vendor prefixes to CSS rules for cross-browser compatibility.

## Installation
### Prerequisites
Before you begin, ensure you have the following installed on your machine:

- Node.js (v18 or above)
- npm (Node Package Manager)

### Steps to Install and Run
1. Clone the Repository

Clone this repository to your local machine:
```bash
git clone https://github.com/FabrizioMarras/RgbtoHex.git
```

Navigate to the Project Directory
```bash
cd RgbtoHex
```

2. Install Dependencies

Install the required dependencies by running:

```bash
npm install
```

3. Run the App

Start the Vite development server:

```bash
npm run dev
```

4. Open the App

Open your browser and navigate to the local development server:

```bash
http://localhost:3000
```

## Usage
1. Enter RGB Values: You can either manually enter values for Red, Green, and Blue or paste a space-separated RGB value (e.g., 33 126 196) into the first input (Red).
2. Convert to Hex: Click the "Convert to Hex" button, and the Hex color code will be displayed.
3. Copy to Clipboard: Click the clipboard icon to copy the generated Hex code to your clipboard.
4. See Color Preview: The box below the Hex code will show a preview of the color based on the RGB or Hex values.

## Example
To convert the RGB value `33 126 196`:

- Red: 33
- Green: 126
- Blue: 196

The app will display the Hex color code: `#217ec4`.

#
