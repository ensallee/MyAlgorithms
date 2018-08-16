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
