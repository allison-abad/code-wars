function sortArray(array){
var odd = array.filter(isOdd).sort(ascending);
return array.map(replaceOddNum)
function ascending (a,b){
return a > b;
}
function isOdd(num){
return num % 2;
}
function replaceOddNum(num){
return isOdd(num)?odd.shift():num
}
} 
