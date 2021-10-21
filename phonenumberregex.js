function telephoneCheck(str) {
    var flag
                var regex3 = /(555)[\s\S]\d\d\d[\s\S]\d\d\d/
                 var regex1 = /^\d\d\d[-]\d\d\d-\d\d\d$/
         var regex4 = /5{10}/
        var regex2 = /^1{1}[\s\S][(]\d\d\d[)][\s\S]\d\d\d[\s\S]\d\d\d/
        var regex5 = /^1{1}[\s\S]\d\d\d[\s\S]\d\d\d[\s\S]\d\d\d/

        
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
       telephoneCheck("1 555)555-5555");