# 🎮✨ JS Game - Number Guessing Extravaganza! ✨🎲

This is the ultimate guide to our number-guessing game, where you'll test your luck and intuition! Let's dive into the colorful world of code and emojis! 🌈👩‍💻

## 🤩 Overview

Our fantastic game challenges you to guess a number between 1 and 10. With a bit of luck and some smart thinking, you can beat the system! 🧠🏆

## 🧩 HTML Structure - The Game's Stage

### 🎨 Key HTML Elements Explained:

-   **`<head>`**:  The brain of the operation! 🧠 We've got our character set, viewport settings, external resources (like fonts and the voice library), and CSS styling here.
-   **`<body>`**:  The main stage! 🎭
    -   **`<div class="container">`**: Our main container that wraps the entire game. 📦
    -   **`<div class="container__conteudo">`**: Holds the content of our game.
    -   **`<div class="container__informacoes">`**: Encapsulates game info, input, and buttons. ℹ️
    -   **`<div class="container__texto">`**: Contains the `<h1>` and `<p>` elements for displaying text. ✍️
    -   **`<input type="number">`**: The player's input area. Numbers from 1 to 10 allowed! 🔢
    -   **`<div class="chute container__botoes">`**: Buttons for gameplay. 🕹️
        -   **`<button onclick="verificarChute()">`**:  The "Guess" button. It's activated to verify the player's guess. ✅
        -   **`<button onclick="reiniciarJogo()" disabled>`**: The "New Game" button. Starts a new round when enabled. 🔄
    -  **`<img src="./img/ia.png">`**: Adding some visual flair with an image. 🖼️
-   **`<script src="/js/app.js">`**: The link to the magic (JavaScript). 🪄

## 🌈 CSS - Making it POP!

- A lot of the visual aspects are managed in the `/css/style.css`, you can add some color effects and make a better view to the game.

## 🤖 JavaScript - The Game's Brains!
### 🧠 Key JavaScript Functions:

-   **`verificarChute()`**:  The heart of the game! ❤️ This function checks if the player's guess is correct. If it's right, we celebrate! 🎉 If not, we provide a hint. 🤫
-   **`reiniciarJogo()`**: The reset button! 🔄 It's like starting a new round. Everything gets reset to its original state.

### 🛠️ How It Works (In a Nutshell):

1.  **Initialization**: The game starts with a secret number and a set of instructions.
2.  **Player's Turn**: The player inputs a guess.
3.  **Verification**: `verificarChute()` compares the guess to the secret number.
4.  **Feedback**: The player gets feedback, or is able to play again.
5.  **Reset**: `reiniciarJogo()` allows a fresh start.

## 🤩✨ Let's Play! ✨🤩

Ready to test your intuition and luck? Let the number guessing game begin! 🎲🍀

Feel free to customize the CSS and improve the JavaScript to add your personal touch. Happy coding and playing! 👩‍💻👨‍💻

