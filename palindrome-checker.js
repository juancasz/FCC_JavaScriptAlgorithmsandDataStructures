function palindrome(str) {
  let first;
  let second;
  str = str.replace(/[_\W+]/g,"");
  str = str.toLowerCase();
  if(str.length % 2 === 0){
    first = str.slice(0,(str.length+1)/2);
  }else{
    first = str.slice(0,str.length/2);
  }
  second = str.slice((str.length+1)/2).split("").reverse().join("");
  if(first === second){
    return true;
  }
  return false;
}

palindrome("2_A3*3#A2");
