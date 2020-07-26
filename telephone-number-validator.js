function telephoneCheck(str) {
  if(str[0].match("-")){
    return false;
  }
  if(str.match(/[(]/)){
    var index = str.search(/[(]/);
    if(str[index+4] != ")"){
      return false;
    }
  }
  if(str.match(/[)]/)){
    var index = str.search(/[)]/);
    if(str[index-4] != "("){
      return false;
    }
  }
  str = str.replace(/[-() ]/g,"");
  if(str.match(/[A-Za-z]\W/)){
    return false;
  }
  if(str.length>11 || str.length<10){
    return false;
  }
  if(str.length == 11 && parseInt(str[0]) != 1){
    return false;
  }
  return true;
}

telephoneCheck("(555)555-5555");
