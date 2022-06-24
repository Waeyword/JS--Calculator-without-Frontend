alert("Let's Calculate!");
let userChoice = prompt("What would you like to do? [+, -, *, /]");

let number1 = parseFloat(prompt("Enter the first Number: "));
let number2 = parseFloat(prompt("Enter the second Number: "));

if (userChoice == "+") {
  answer = number1 + number2;
  alert(answer);
} else if (userChoice == "-") {
  answer = number1 - number2;
  alert(answer);
} else if (userChoice == "*") {
  answer = number1 * number2;
  alert(answer);
} else if (userChoice == "/") {
  answer = number1 / number2;
  alert(answer);
} else {
  alert("Invalid Input. Try again");
}
