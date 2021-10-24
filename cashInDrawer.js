function checkCashRegister(price, cash, cid) {
    var change, total=0,sum=0, newCid=[];
    
    for(let i=0;i<cid.length;i++){
      total = total+cid[i][1]
    }
    change = cash-price;
  console.log(change , "change")
  console.log(total , "total")
    // console.log("total is ",total)
    if (change>total)
    return  {status: "INSUFFICIENT_FUNDS", change: []} 
else if (parseInt(change)===parseInt(total))
return  {status: "CLOSED", change: cid} 
    else {
      
    if (parseInt(change/100)>0 && cid[8][1]>=0){
       var hundreds =parseInt(change/100)
      // change = change%(cid[8][1])
          // console.log("ONE HUNDRED", hundreds*100)
          // if(cid[8][1]<hundreds*100)
          // return  {status: "INSUFFICIENT_FUNDS", change: []} 
          // else 
    
    if(hundreds*100>=cid[8][1]){
      newCid.push(["ONE HUNDRED", cid[8][1]])
      change = change-(cid[8][1])
    }
    else{
   newCid.push(["ONE HUNDRED", hundreds*100])
      change = change-(hundreds*100)
    }
    }
    if (parseInt(change/20)>0 && cid[7][1]>=0){
     var twenties =parseInt(change/20)
      // change = change%(twenties*20)
      // console.log("TWENTY", twenties*20)
      //  if(cid[7][1]<twenties*20)
      //     return  {status: "INSUFFICIENT_FUNDS", change: []} 
      //     else
  
        if(twenties*20>=cid[7][1]){
      newCid.push(["TWENTY", cid[7][1]])
       change = change-(cid[7][1])
        }
      else{
   newCid.push(["TWENTY",twenties*20])
      change = change-(twenties*20)
    }
    }
  
     if (parseInt(change/10)>0 && cid[6][1]>=0){
      var tens =parseInt(change/10)
      // change = change%(tens*10)
      // console.log("TEN", tens*10)
      // if(cid[6][1]<tens*10)
      //     return  {status: "INSUFFICIENT_FUNDS", change: []} 
      //     else
  
        if(tens*10>=cid[6][1]){
       newCid.push(["TEN",cid[6][1]])
       change = change-(cid[6][1])
        }
      else{
   newCid.push(["TEN",tens*10])
      change = change-(tens*10)
    }
  
    
    }
  
       if (parseInt(change/5)>0 && cid[5][1]>=0){
      var fives =parseInt(change/5)
      // change = change%(fives*5)
      //   console.log("FIVE", fives*5)
      //   if(cid[5][1]<fives*5)
      //     return  {status: "INSUFFICIENT_FUNDS", change: []} 
      //     else
   if(fives*5>=cid[5][1]){
       newCid.push(["FIVE", cid[5][1]])
       change = change-(cid[5][1])
        }
      else{
   newCid.push(["FIVE",fives*5])
      change = change-(fives*5)
    }
  
     
    }
  
          if (parseInt(change/1)>0 && cid[4][1]>=0){
      var ones =parseInt(change/1)
      // change = change%(ones*1)
      //  console.log("ONE", ones*1)
      //   if(cid[4][1]<ones*1)
      //     return  {status: "INSUFFICIENT_FUNDS", change: []} 
      //     else
  if(ones*1>=cid[4][1]){
       newCid.push(["ONE", cid[4][1]])
       change = change-(cid[4][1])
        }
      else{
   newCid.push(["ONE", ones*1])
      change = change-(ones*1)
    }
  
     
    }
   
  
      if (parseInt(change/0.25)>0 && cid[3][1]>=0){
      var quarters =parseInt(change/0.25)
      // change = change%(quarters*0.25)
      //   console.log("QUARTER", quarters*0.25)
      //     if(cid[3][1]<quarters*0.25)
      //     return  {status: "INSUFFICIENT_FUNDS", change: []} 
      //     else
  if(parseFloat(quarters*0.25)>=cid[3][1]){
       newCid.push(["QUARTER", cid[3][1]])
      change = ((change)-(cid[3][1]))
        }
      else{
   newCid.push(["QUARTER", quarters*0.25])
      change = ((change)-(quarters*0.25))
    }
  
  
     
    }
  
      if (parseInt(change/0.1)>0 && cid[2][1]>=0){
       var dimes =parseInt(change/0.1)
      // change = change%(dimes*0.1)
      //   console.log("DIME", dimes*0.1)
      //      if(cid[2][1]<dimes*0.1)
      //     return  {status: "INSUFFICIENT_FUNDS", change: []} 
      //     else
  if(parseFloat(dimes*0.1)>=cid[2][1]){
      newCid.push(["DIME", cid[2][1]])
      change = ((change)-(cid[2][1]))
        }
      else{
   newCid.push(["DIME",  dimes*0.1])
      change = ((change)-(dimes*0.1))
    }
  
     
    }
       if (parseInt(change/0.05)>0 && cid[1][1]>=0){
       var nickels =parseInt(change/0.05)
      // change = change%(nickels*0.05)
      //    console.log("NICKEL", nickels*0.05)
      //     if(cid[1][1]<nickels*0.05)
      //     return  {status: "INSUFFICIENT_FUNDS", change: []} 
      //     else
  if(parseFloat(nickels*0.05)>=cid[1][1]){
      newCid.push(["NICKEL", cid[1][1]])
       change = ((change)-(cid[1][1]))
        }
      else{
   newCid.push(["NICKEL",nickels*0.05])
      change = ((change)-(nickels*0.05))
    }
  
     
    }
  
    if (parseInt(change/0.01)>0 && cid[0][1]>=0){
       var penny =parseInt(change/0.01)
      // change = change%(penny*0.01)
      //       console.log("PENNY", penny*0.01)
      //         if(cid[1][1]<penny*0.01)
      //     return  {status: "INSUFFICIENT_FUNDS", change: []} 
      //     else
  if(parseFloat(penny*0.01)>=cid[0][1]){
    newCid.push(["PENNY", cid[0][1]])
       change = ((change)-(cid[0][1]))
        }
      else{
   newCid.push(["PENNY", penny*0.01+0.01])
      change = ((change)-(penny*0.01))
      console.log("change after penny", change)
    }
  
      
    }
  
    for(let i=0;i<newCid.length;i++){
      sum=sum+newCid[i][1]
    
    }
      console.log(sum)
      console.log(change)
    if (sum<change){
       return  {status: "INSUFFICIENT_FUNDS", change: []}
    }
    else  return  {status: "OPEN", change: newCid} 
    
    }  
}
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])