function translatePigLatin(str) {
    var newStr=''
    var vowel = /[aeiou]/gi
    if (str[0].match(vowel)){
        console.log(str+'way')
        newStr= str+'way'
  return newStr
    }
  
    else if (str.match(vowel) === null) {
     
      newStr = str + "ay";
      return newStr
    }
    else
    
     var vowelIndice = str.indexOf(str.match(vowel)[0]);
     
      for(let i =0;i<vowelIndice;i++){
     newStr=newStr+str[i]
  console.log(newStr,  "new string")
    }
    newStr = str.slice(newStr.length)+newStr+'ay'
    console.log("cons word ", str.slice(newStr.length)+newStr)
   
    return newStr
  }
  
  translatePigLatin("rhythm");