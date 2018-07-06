Write function avg which calculates average of numbers in a given list.


function find_average (array){
 var sum = 0
 for (var i = 0;i < array.length; i ++ ){
   sum+=array[i]
 }
 return(sum/array.length)
}
