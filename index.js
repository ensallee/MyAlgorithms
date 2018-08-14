//Capitalize the first letter of each word in a string.
function capitalize(str) {
  return str.split(" ").map(word => {
    let cap = word[0].toUpperCase()
    return cap += word.slice(1)
  }).join(" ")
}
