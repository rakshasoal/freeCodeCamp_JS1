function myReplace(str, before, after) {
    str =  str.split(" ")
   
   //  console.log(str)
     // console.log(str.indexOf(before))
    str[str.indexOf(before)]=after;
   //  console.log(str.join(" "))
    return str.join(" ")
   
   }
   
   myReplace("He is Sleeping on the couch", "Sleeping", "sitting");