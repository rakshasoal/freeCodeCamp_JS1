function telephoneCheck(str) {
    var flag
    var len1, len2
                var regex3 = /^\(555\)[\d]{3}[\s-]*[\d]{3}/
                 var regex1 = /^555[-]\d\d\d-\d\d\d/
         var regex4 = /5{10}/
          var regex2 = /^1{1}[\s-]*\d\d\d[\s-]*\d\d\d[\s-]*\(*\d\d\d/
        var regex5 = /^1{1}[\s-]*\(\d\d\d\)[\s-]*[\d]{3}[\s-]*[\d]{3}/
        var regex6 = /[(]/
        var regex7 = /[)]/
        if(regex6.test(str)){len1= (str.match(regex6).length)
        console.log(len1)}
         else len1=0
       if(regex7.test(str)){var len2= (str.match(regex7).length)
        console.log(len1)}
       else len2 = 0
       if (len1!==len2)
       {
         flag = false 
       }
        
       if (regex2.test(str))
        {
            flag = true
           console.log("regex2 ",regex2.exec(str))
        }
        else if (regex1.test(str))
        {
            flag = true
           console.log("regex1 ",regex1.exec(str))
        }
        else if (regex3.test(str))
        {
            flag = true
           console.log("regex3 ",regex3.exec(str))
        }
        else if (regex4.test(str))
        {
            flag = true
           console.log("regex4 ",regex4.exec(str))
        }
        else if (regex5.test(str))
        {
            flag = true
           console.log("regex5 ",regex5.exec(str))
        }
               else     flag = false
    
        console.log(flag)
          return flag;
    
    }
       telephoneCheck("1 555)555-5555") 