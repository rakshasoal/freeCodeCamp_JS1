function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
  // for(let i = beginSlice;i<endSlice;i++){
  var slicedArr = anim.slice(beginSlice, endSlice)
  console.log(slicedArr)
  return slicedArr
  }
  
  
    // Only change code above this line
  
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);

  function nonMutatingSplice(cities) {
    // Only change code below this line
    var newArr = cities.slice(0,3)
    return newArr;
  
    // Only change code above this line
  }
  var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);

  //concat 

  function nonMutatingConcat(original, attach) {
    // Only change code below this line
  console.log(original.concat(attach))
  return original.concat(attach)
    // Only change code above this line
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  nonMutatingConcat(first, second);