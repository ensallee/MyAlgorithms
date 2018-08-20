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
