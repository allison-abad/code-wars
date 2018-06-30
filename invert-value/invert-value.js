function invert(array) {
  var res = [];
  for(let i = 0; i < array.length; i++){
  if(array[i] === 0){
  res.push(array[i]);
  }
  else{
  res.push(array[i] * - 1)
  }
  }
   return res ;
}
