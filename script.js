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
      outputElement.textContent = "Please enter a number less than 4000";
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

document.getElementById('convert-roman-btn').addEventListener('click', convertRomanNumber);
document.getElementById('roman').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
      event.preventDefault(); 
      convertRomanNumber(); 
  }
});

function convertRomanNumber() {
  var romanInput = document.getElementById('roman').value.toUpperCase();
  var outputElement = document.getElementById('output-roman');

  if (!isValidRomanNumeral(romanInput)) {
      outputElement.textContent = "Please enter a valid Roman numeral";
      return;
  }

  outputElement.textContent = convertToNumber(romanInput);
}

function isValidRomanNumeral(roman) {
  // Regular expression to validate Roman numerals
  var romanPattern = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  return romanPattern.test(roman);
}

function convertToNumber(roman) {
  var romanToNumber = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
  };
  var result = 0;

  for (var i = 0; i < roman.length; i++) {
      if (romanToNumber[roman[i]] < romanToNumber[roman[i + 1]]) {
          result -= romanToNumber[roman[i]];
      } else {
          result += romanToNumber[roman[i]];
      }
  }

  return result;
}

function goToFacebook() {
  window.open("https://www.facebook.com/profile.php?id=61558568662712", "_blank");
}
