const dict = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function rot13(str) {
  var array = str.split("");
  for(let i=0;i<array.length;i++) {
    var character = array[i];
    if(character.match(/[ \W]/)){
       continue;
    }
    var newIndex = dict.indexOf(character)+13;
    if(newIndex>25){
      newIndex -= 26;
    }
    character = dict[newIndex];
    array[i] = character;
  }
  str = array.join("");
  return str;
}

rot13("SERR PBQR PNZC");
