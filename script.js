//------------BMI-CALCULATOR------------

// Отримання елементів з DOM
const calculateBtn = document.getElementById('calculate');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const resultOutput = document.querySelector('#result');
const commentOutput = document.querySelector('.comment');

// Додавання події для кнопки "Calculate"
calculateBtn.addEventListener('click', function () {
  // Отримання значень введених користувачем
  const heightValue = Number(heightInput.value);
  const weightValue = Number(weightInput.value);

  // Перевірка на валідність введених значень
  if (isNaN(heightValue) || isNaN(weightValue)) {
    alert('Please enter valid height and weight values!');
    return;
  }

  // Перерахунок в метричну систему
  const heightInMeters = heightValue / 100;
  const bmiValue = weightValue / (heightInMeters * heightInMeters);
  const roundedBmiValue = bmiValue.toFixed(2); // Округлення значення BMI до двох знаків після коми

  // Виведення значення BMI
  resultOutput.innerHTML = roundedBmiValue;

  let status = '';

  // Визначення статусу залежно від значення BMI
  if (bmiValue < 18.5) {
    status = 'Underweight 😒';
  } else if (bmiValue < 25) {
    status = 'Normal Weight 😍';
  } else if (bmiValue < 30) {
    status = 'Overweight 😮';
  } else {
    status = 'Obese 😱';
  }

  // Виведення коментаря про статус BMI
  commentOutput.innerHTML = `Comment: you are <span id="comment">${status}</span>`;
});