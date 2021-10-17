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