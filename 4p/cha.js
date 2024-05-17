
let form = document.querySelector("form");
let random = Math.floor((Math.random() * 100) + 1); // Corrected to generate a number between 1 and 100

form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting
    let guess = parseInt(document.querySelector(".guessField").value);
    let lowOrHi = document.querySelector(".lowOrHi");

    if (guess === random) {
        lowOrHi.innerHTML = `RIGHT ANSWER: ${random}`;
    } else if (guess !== random) {
        lowOrHi.innerHTML = `WRONG ANSWER`;
    }
});

