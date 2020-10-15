// Organization Chart
/*
What is the input to the program?
  A string
What is the output of the program?
  An array / list of unique anagrams created from the string
What is the input to each recursive call?
  An instance of anagrams() with a permutation of the remaining string
What is the output of each recursive call?
  ''

Write a recursive function that prints the following organization chart. 
Your output should be as shown below with proper indentation to show the 
hierarchy. You may store the org chart in an object and send that as an 
input to your program.
*/
const chart = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve,
        Kyle,
        Andra,
      },
      Zhao: {
        Richie,
        Sofia,
        Jen,
      },
    },
    Schrage: {
      VanDyck: {
        Sabrina,
        Michelle,
        Josh,
      },
      Swain: {
        Blanch,
        Tom,
        Joe,
      },
    },
    Sandberg: {
      Goler: {
        Eddie,
        Julie,
        Annie,
      },
      Hernandez: {
        Rowi,
        Inga,
        Morgan,
      },
      Moissinac: {
        Amy,
        Chuck,
        Vinni,
      },
      Kelley: {
        Eric,
        Ana,
        Wes,
      },
    },
  },
};