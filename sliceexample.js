var array = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus']
  
  var everything = array.slice()
  // everything = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus']
  
  var kitchen = array.slice(2, 4)
  // kitchen = ['cup', 'sandwich']
  
  var random = array.slice(4)
  // random = ['bag', 'phone', 'cactus']
  
  var noPlants = array.slice(0, -1)
  // noPlats = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone']
  
  // array will still equal ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus']


  function viewArgs() {
    return arguments;
}
console.log(viewArgs([3, 5, 1, 2, 2], 2, 3, 5));    
console.log(viewArgs([2, 3, 2, 3, 2, 3]));   
console.log(viewArgs(3,2,1,"life the universe and all"));
console.log(viewArgs("Douglas","Adams"));
console.log(viewArgs(["hello", "World!", 'and', 'thanks', 'for','all','the', 'fish'], "dolphines", 42));    