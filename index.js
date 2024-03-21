function add() {
    calculate('add');
  }

  function subtract() {
    calculate('subtract');
  }

  function multiply() {
    calculate('multiply');
  }

  function divide() {
    calculate('divide');
  }

  function calculate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
      alert('Please enter valid numbers.');
      return;
    }

    var result;

    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          alert('Cannot divide by zero.');
          return;
        }
        break;
      default:
        alert('Invalid operation.');
        return;
    }

    document.getElementById('result').innerHTML = 'Result: ' + result;
  }