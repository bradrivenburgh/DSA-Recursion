// Power Calculator
/*
What is the input to the program?
  Two integers: base and exponent
What is the output of the program?
  Value of base raised to exponent
What is the input to each recursive call?
  An instance of powerCalculator with original base
  and exponent decreased by one
What is the output of each recursive call?
  The value of the reverse
*/

function powerCalculator(base, exponent) {
  // Base Case
  if (exponent < 0) {
    return "exponent should be >= 0";
  }
  
  if (exponent === 0) {
    return 1;
  }

  //Recursive Case
  return base * powerCalculator(base, (exponent - 1));
}

console.log(powerCalculator(10, 5));