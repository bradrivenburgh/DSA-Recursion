// Counting Sheep
/*
What is the input to the program?
  Number of sheep I have
What is the output of the program?
  Count of all sheep that jumped over fence
What is the input to each recursive call?
  An instance of the countSheep function with 
  numSheep decreased by one as its argument
What is the output of each recursive call?
  An instance of countSheep
*/

function countingSheep(num) {
  // Base Case
  if (num === 0) {
    return "All sheep jumped over the fence"
  }

  //Recursive Case
  const string = `${num}: Another sheep jumps over the fence \n`;
  return string + countingSheep(num - 1);
}

console.log(countingSheep(3));