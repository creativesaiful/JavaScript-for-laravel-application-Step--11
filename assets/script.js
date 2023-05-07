

const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

function calculateBMI() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100; // convert cm to m

  const bmi = weight / (height * height);

  resultDiv.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
}

calculateBtn.addEventListener("click", calculateBMI);


const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  calculateBMI();
});