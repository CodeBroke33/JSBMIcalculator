function calculateBMI() {
    var height = parseFloat(document.getElementById('height-input-field').value);
    var weight = parseFloat(document.getElementById('weight-input-field').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      document.getElementById('result').innerText = 'Please enter valid values for height and weight.';
      return;
    }

    var bmi = weight / ((height / 100) ** 2);
    var resultText = 'Your BMI is: ' + bmi.toFixed(2);

    // Use switch statement for BMI categories
    switch (true) {
      case bmi < 18.5:
        resultText += ' (Underweight)';
        break;
      case bmi >= 18.5 && bmi < 25:
        resultText += ' (Normal weight)';
        break;
      case bmi >= 25 && bmi < 30:
        resultText += ' (Overweight)';
        break;
      default:
        resultText += ' (Obese)';
    }

    document.getElementById('result').innerText = resultText;
  }