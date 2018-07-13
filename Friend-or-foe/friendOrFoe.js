Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!
Note: keep the original order of the names in the output.
let friends = ["Ryan", "Kieran", "Mark"]

function friend(friends){
  let name = []
  friends.forEach( function(el) {
    if( el.length === 4){
      name.push(el)
    }
  })
  return name
}

// Refactored
function friend(friends){
  return friends.filter( (el) =>{ return el.length === 4})
}
