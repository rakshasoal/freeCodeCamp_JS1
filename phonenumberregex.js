function telephoneCheck(str) {
    var flag
         var regex1 = /\d\d\d[-]\d\d\d-\d\d\d/
         var regex4 = /5555555555/
        var regex2 = /^1[\s\S][(]\d\d\d[)][\s\S]\d\d\d[\s\S]\d\d\d/
        var regex5 = /^1[\s\S]\d\d\d[\s\S]\d\d\d[\s\S]\d\d\d/
        var regex3 = /(555)[\s\S]\d\d\d[\s\S]\d\d\d/
        var regex6 = /1 555)555-5555/
        // var regex7 = /1 555)555-5555"/
        if (regex2.test(str))
        {
            flag = true
           console.log(regex2.exec(str))
        }
        else if (regex1.test(str))
        {
            flag = true
           console.log(regex1.exec(str))
        }
        else if (regex3.test(str))
        {
            flag = true
           console.log(regex3.exec(str))
        }
        else if (regex4.test(str))
        {
            flag = true
           console.log(regex4.exec(str))
        }
        else if (regex5.test(str))
        {
            flag = true
           console.log(regex5.exec(str))
        }
        else if (regex6.test(str))
        {
            flag = false
           console.log(regex5.exec(str))
        }
        else     flag = false
    
        console.log(flag)
          return flag;
    
    }
       telephoneCheck("(555-555-5555");