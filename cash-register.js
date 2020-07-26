function checkCashRegister(price, cash, cid) {
  const currency = [0.01,0.05,0.1,0.25,1,5,10,20,100];
  var available = 0;
  var changeValue = Math.round((cash-price)*100);
  var change = [];
  for(let i=0;i<cid.length;i++){
    available += 100*cid[i][1];
  }
  if(available == changeValue){
    return {status:"CLOSED",change: cid}; 
  }
  if(available<changeValue){
    return {status:"INSUFFICIENT_FUNDS",change: change};
  }
  const table = currency.map(coin => {
    return Math.round(100*coin);
  });
  const scaledCid = cid.map(coins => {
    return Math.round(coins[1]*100);
  });
  var builder = 0;
  for(var i=scaledCid.length-1;i>=0;i--){
    if(table[i]>changeValue){
      continue;
    }
    var coin = 0;
    while(builder<changeValue && scaledCid[i]>=table[i]){
      builder += table[i];
      coin += table[i];
      scaledCid[i] -= table[i];
    }
    if(builder>changeValue){
      builder -= table[i];
      coin -= table[i];
    }
    if(coin>0){
      change.push([cid[i][0],0.01*coin]);
    }
    if(builder == changeValue){
      return {status:"OPEN",change: change};
    }
  }  
  return {status:"INSUFFICIENT_FUNDS",change: []};
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);