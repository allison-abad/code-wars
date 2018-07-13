Given: an array containing hashes of names
Return: a string formatted as a list of names separated by commas except
for the last two names, which should be separated by an ampersand.

function list(names){
  return names.map(function(x){ return x.name; }).join(", ").replace(/,(?!.*,)/gmi, " &")
}
