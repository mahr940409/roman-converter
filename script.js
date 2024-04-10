document.getElementById('number').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
      event.preventDefault(); 
      convertNumber(); 
  }
});

document.getElementById('convert-btn').addEventListener('click', convertNumber);

function convertNumber() {
  var numberInput = parseInt(document.getElementById('number').value);
  var outputElement = document.getElementById('output');

  if (isNaN(numberInput)) {
      outputElement.textContent = "Please enter a valid number";
      return;
  }

  if (numberInput < 1) {
      outputElement.textContent = "Please enter a number greater than or equal to 1";
      return;
  }

  if (numberInput >= 4000) {
      outputElement.textContent = "Please enter a number less than or equal to 3999";
      return;
  }

  outputElement.textContent = convertToRoman(numberInput);
}

function convertToRoman(num) {
  var romanNumerals = [
      ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
      ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
      ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
      ["", "M", "MM", "MMM"]
  ];

  var roman = "";
  var digits = num.toString().split('').reverse();

  for (var i = 0; i < digits.length; i++) {
      roman = romanNumerals[i][parseInt(digits[i])] + roman;
  }

  return roman;
}