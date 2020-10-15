// Anagrams
/*
What is the input to the program?
  A string
What is the output of the program?
  An array / list of unique anagrams created from the string
What is the input to each recursive call?
  An instance of anagrams() with a permutation of the remaining string
What is the output of each recursive call?
  ''
*/

function anagrams(string) {
  // Base case
  if (string.length < 2) {
    return string;
  } 

  // Recursive Case
  const anagramsArr = []; // This array will hold our anagrams
  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    // Cause we don't want any duplicates:
    if (string.indexOf(char) !== i) {
      // if char was used already
      continue; // skip it this time
    }

    let remainingString =
      string.slice(0, i) + string.slice(i + 1);

    // Queue up for loops that will be processed in the 
    // backwards phase of recursion
    for (let subAnagram of anagrams(remainingString)) {
      anagramsArr.push(char + subAnagram);
    }
  }
  return anagramsArr;
}

console.log(anagrams("east"));
