let form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#results");

    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `Enter a valid height value`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Enter a valid weight value`;
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      if(bmi < 18.6){
        result.innnerHTML = `<span>${bmi}</span><span>less then 18.6</span>`
      } else if ( bmi > 24.9){
      result.innerHTML = `<span>${bmi}</span> <br><span>it is greater then 24</span>`;
    }
    }
});
