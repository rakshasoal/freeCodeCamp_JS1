// Only change code below this line
function urlSlug(title) {

    var newStr = (title.split(" ").filter(substr => substr !== "").join("-")).toLowerCase()
    return newStr
    
    }
    // Only change code above this line
    
    urlSlug("Winter Is Coming")

    // checking positive with every

    function checkPositive(arr) {
        // Only change code below this line
      
      return arr.every(item => item > 0 )
      
      
        // Only change code above this line
      }
      checkPositive([1, 2, 3, -4, 5]);

      // passing paratemets in functions
      function add(x) {
        // Only change code below this line
       return function(y) {
         return function(z) {
          return x + y+z;
        }
        }
      
        // Only change code above this line
      }
      add(10)(20)(30);