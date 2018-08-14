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
