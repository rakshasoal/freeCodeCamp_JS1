// function sumAll(arr) {
//     var max = Math.max(arr[0],arr[1])
//      var min = Math.min(arr[0],arr[1])
//      console.log(max)
//      console.log(min)
//      var num = min
//      var sum=0
//      while(num<=max){
//      sum =sum+num
//      num++
//     //  console.log(num)
//      }
//   console.log(sum)
//     return sum;
//   }
  
//   sumAll([1, 4]);

  function diffArray(arr1, arr2) {
    var newArr = [];

    function onlyInFirst(first, second) {
  for(let i=0;i<first.length;i++){
      if (second.indexOf(first[i])===-1){
       newArr.push(first[i])
        }
    
        function destroyer(arr) {
            let valsToRemove = Object.values(arguments).slice(1);
          console.log(valsToRemove)
            for (let i = 0; i < arr.length; i++) {
              for (let j = 0; j < valsToRemove.length; j++) {
                if (arr[i] === valsToRemove[j]) {
                  delete arr[i];
                }
              }
            }
            return arr.filter(item => item !== null);
          }
          destroyer([1, 2, 3, 1, 2, 3], 2, 3)

          function whatIsInAName(collection, source) {
            // "What's in a name? that which we call a rose
            // By any other name would smell as sweet.”
            // -- by William Shakespeare, Romeo and Juliet
            var srcKeys = Object.keys(source);
          
            // filter the collection
            return collection.filter(function(obj) {
              for (var i = 0; i < srcKeys.length; i++) {
                if (
                  !obj.hasOwnProperty(srcKeys[i]) ||
                  obj[srcKeys[i]] !== source[srcKeys[i]]
                ) {
                  return false;
                }
              }
              return true;
            });
          }
    
  }
}
onlyInFirst(arr1,arr2)
onlyInFirst(arr2,arr1)
console.log(newArr)
return newArr;
  }
  
  diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])