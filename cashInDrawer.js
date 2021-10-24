function checkCashRegister(price, cash, cid) {
    var change, total=0, newCid=[];
    for(let i=0;i<cid.length;i++){
      total = total+cid[i][1]
    }
    console.log("total is ",total)
    if (total<cash)
    return  {status: "INSUFFICIENT_FUNDS", change: []} 
    else {change = total-price;
  
    if (Number.isInteger(change/100)>0){
      var hundreds =change/100
      change = change%(hundreds*100)
      newCid.push(["ONE HUNDRED", hundreds])
    }
    if (Number.isInteger(change/20)>0){
      var twenties =change/20
      change = change%(twenties*20)
      newCid.push(["TWENTY", twenties])
    }
  
     if (Number.isInteger(change/10)>0){
      var tens =change/10
      change = change%(tens*10)
      newCid.push(["TEN", tens])
    }
  
       if (Number.isInteger(change/5)>0){
      var fives =change/5
      change = change%(fives*5)
      newCid.push(["FIVE", fives])
    }
  
        if (Number.isInteger(change/1)>0){
      var fives =change/5
      change = change%(fives*5)
      newCid.push(["FIVE", fives])
    }
  
    if (Number.isInteger(change/1)>0){
      var ones =change/1
      change = change%(ones*1)
      newCid.push(["ONE", ones])
    }
  
      if (Number.isInteger(change/0.25)>0){
      var quarters =change/0.25
      change = change%(quarters*0.25)
      newCid.push(["QUARTER", quarters])
    }
  
      if (Number.isInteger(change/0.1)>0){
      var dimes =change/0.1
      change = change%(dimes*0.1)
      newCid.push(["DIME", dimes])
    }
       if (Number.isInteger(change/0.05)>0){
      var nickels =change/0.05
      change = change%(nickels*0.05)
      newCid.push(["NICKEL", nickels])
    }
  
    if (Number.isInteger(change/0.05)>0){
      var penny =change/0.01
      change = change%(nickels*0.01)
      newCid.push(["PENNY", penny])
    }
    }
    console.log(newCid)
     return  {status: "OPEN", newCid} 
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
