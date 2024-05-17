const color = document.querySelectorAll(".button");
const body = document.querySelector("body");

color.forEach((button) => {
    button.addEventListener("click", function(e) { // Corrected "fucntion" to "function"
        if (e.target.id == "grey") {
            body.style.backgroundColor = e.target.id;
        }
            if (e.target.id == "white") {
                body.style.backgroundColor = e.target.id;
            }
            if (e.target.id == "blue") {
                body.style.backgroundColor = e.target.id;
          
        }
        if (e.target.id == "yellow") {
            body.style.backgroundColor = e.target.id;
        }
    });
});
// let form = document.querySelector("form");
// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     let height = parseInt(document.querySelector("#height").value);
//     let weight = parseInt(document.querySelector("#weight").value);
//     let result = document.querySelector("#results");

//     if (height === "" || height < 0 || isNaN(height)) {
//         result.innerHTML = `Enter a valid height value`;
//     } else if (weight === "" || weight < 0 || isNaN(weight)) {
//         result.innerHTML = `Enter a valid weight value`;
//     } else {
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//         result.innerHTML = `<span>${bmi}</span>`;
//     }
// });
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


