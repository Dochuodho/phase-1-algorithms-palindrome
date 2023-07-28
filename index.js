function isPalindrome(word) {
  // Write your algorithm here

//iterate from the beginning to the middle

for (let i=0; i< word.length/2; i++){
  //compare the letter we're iterating over to the corresponding letter at the end of the string
  const j = word.length - 1 - i 
  
  // if any letters don't match, return false
  if (word[i] !== word[j]) return false;
}

//return true
return true;


/* 
  Add your pseudocode here
  
  It is possible to argue that if the first letter equals the 
  last letter and the second letter indicates that it is the same as the
   second-to-last letter up until the middle letter, we should return true.

  Repeat from the beginning through the middle, comparing each letter to its 
  counterpart at the conclusion. Return false if any of the letters don't match.

*/

/*
  Add written explanation of your solution here

  I came up with a solution that reduces the time and space complexities. 
  One particular way was by reducing the number of storage locations.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
}

module.exports = isPalindrome;
