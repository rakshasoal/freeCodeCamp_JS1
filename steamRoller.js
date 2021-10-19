function steamrollArray(arr) {
    var newArr=[]
  
      const loopAgain = (arr) => {
   
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])===true){
        loopAgain(arr[i])
        }
        else newArr.push(arr[i])
  }
        }
  
    for(let i=0; i<arr.length;i++){
      if(Array.isArray(arr[i])===true){
        console.log("this is array", arr[i])
        loopAgain(arr[i])
        }
        else {newArr.push(arr[i])}
        
  
    }
  
  
  
  
  
  console.log(newArr)
  return newArr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);