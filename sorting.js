function alphabeticalOrder(arr) {
    // Only change code below this line
  
    return arr.sort(function(a, b) {
      return a === b ? 0 : a > b ? 1 : -1;
    });
    // Only change code above this line
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
  
  //nonmutating sort

  var globalArray = [1, 30, 4, 21, 100000];
function nonMutatingSort(arr) {
  // Only change code below this line
var newArr = globalArray.slice(0, globalArray.length).sort(function(a, b) {
      return a-b
    });
// console.log(newArr)
return newArr

  // Only change code above this line
}
nonMutatingSort(globalArray);