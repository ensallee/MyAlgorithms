//reverse a string without using the .reverse method on an array:
function reverse(str) {
  let reversed = '';

  for (let char of str) {
    reversed = char + reversed
  }

  return reversed;
}

//return true if the string is a palindrome and false if the string is not a palindrome. Do include spaces and punctuation.
function palindrome(str) {
  let reversed = str.split('').reverse().join('')

  return str === reversed;
}

//reverse an integer, preserving the sign (positive or negative) and getting rid of any leading 0s
//Examples: // --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
function reverseInt(n) {
  let reversed = n.toString().split('').reverse().join('')
  return parseInt(reversed) * Math.sign(n)
}

// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
function maxChar(str) {
  let map = {}
  let maxVal = 0
  let maxChar = ''

  for (let char of str) {
    if (map[char]) {
      map[char]++
    } else {
      map[char] = 1
    }
  }

  for (let key in map) {
    if (map[key] > maxVal) {
      maxVal = map[key]
      maxChar = key
    }
  }
  return maxChar;
}

// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz")
    } else if (i % 3 === 0) {
      console.log("fizz")
    } else if (i % 5 === 0) {
      console.log("buzz")
    } else {
      console.log(i)
    }
  }
}
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
function anagrams(string1, string2) {
  let map1 = generateMap(string1)
  let map2 = generateMap(string2)

  if (Object.keys(map1).length !== Object.keys(map2).length) {
    return false
  } else {
    for (let key in map1) {
      if (map1[key] !== map2[key]) {
        return false
      }
    }
    return true
  }
}

//this is a helper method for anagrams
function generateMap(str) {
  let strippedString = str.replace(/[^\w]/g, "").toLowerCase()
  let charMap = {}

  for (let char of strippedString) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }
  return charMap
}

//Capitalize the first letter of each word in a string.
function capitalize(str) {
  return str.split(" ").map(word => {
    let cap = word[0].toUpperCase()
    return cap += word.slice(1)
  }).join(" ")
}

//Form a visual staircase of n height by console.logging out steps with #.
//There should be spaces to the right of each #.
//Example: steps(3)
//       '#  '
//       '## '
//       '###'
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

//Form a visual pyramic of height n by console.logging out levels with #. There should be spaces on the right and left of each #.
//// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//multiply number of rows times 2 and subtract 1 and that will get you number of columns
function pyramid(n) {
  const midpoint = Math.floor((2 * n -1) / 2)

  for (let row=0; row < n; row++) {
    let level = '';

    for (let column=0; column < 2 * n-1; column++) {
      if (midpoint-row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }

    console.log(level)
  }
}

// Write a function that returns the number of vowels used in a string.
function vowels(str) {
  let counter = 0
  const checker = ["a", "e", "i", "o", "u"]

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      counter++;
    }
  }
  return counter;
}
