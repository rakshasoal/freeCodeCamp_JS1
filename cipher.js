
function rot13(str) {
    let Alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let newStr=''
      for (let i = 0; i < str.length; i++) {
         if( str[i].match(/[^a-zA-Z0-9]/g))
         {  newStr+=str[i]}
                 for (let j = 0; j < Alphabets.length; j++) {
              if (str[i] === Alphabets[j]) {
                
                  if (j + 13 < Alphabets.length) {
              
                     newStr+=Alphabets[j + 13]
                  }
                  else {
                      
                      newStr+=Alphabets[j -13 ]
                  } 
              }         
              }  
          }
          return newStr;
          }
    console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))