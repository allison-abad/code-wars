
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
 let arr = [age1, age2 ,age3 ,age4 ,age5 ,age6 ,age7 ,age8]

 arr = arr.map((el) => {
   return el * el
 }).reduce((a, b) => { return a += b})

 return Math.floor(Math.sqrt(arr) / 2)
}

predictAge(80,80,95,55,60,63,64,45)
//86
