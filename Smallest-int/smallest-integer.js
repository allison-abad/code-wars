class SmallestIntegerFinder {
  findSmallestInt(args) {
  var small = args[0];
   //for loop
   //intiate incramentor i as zero
   //condition: Checking if i is less than the length of the array incr i by 1(i++)
   for(var i=0; i < args.length; i++){
   // check if the previous small number is less than the current index in the loop
   // if it is, do nothing
   // if it isn't, reassign the small variable
    if (small < args[i]){
     // nada
    } else{
     small = args[i];
    // console.log(args[i])
    }
  }
  return small;
