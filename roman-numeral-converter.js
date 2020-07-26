const ROMAN_KEYS = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
const TRIPLE_KEYS = [1000,100,10,1]; 
const ARABIC_KEYS = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

class Convert{
  constructor(){
    this.roman = "";
    this.value = 0;
  }

  //!!!only values in arabicKeys can be used as val  
  addVal(val){
    this.value += val;
    let index = ARABIC_KEYS.indexOf(val);
    this.roman = this.roman.concat(ROMAN_KEYS[index]);
  }

  takeVal(val){
    this.value -= val;
    if(val == 900 || val == 400 || val == 90 || val == 40 || val == 9 || val == 4){
      this.roman = this.roman.substring(0,this.roman.length-2);
    }else{
      this.roman = this.roman.substring(0,this.roman.length-1);
    }
  }
}

function convertToRoman(num) {
 let converted = new Convert();
 let i = 0;
 let j = 0;
 let val;
 while(i<ARABIC_KEYS.length){
   if(converted.value === num){
     return converted.roman;
   }
   val = ARABIC_KEYS[i];
   converted.addVal(val);
   if(converted.value>num){
      converted.takeVal(val);
      i++;
      j=0;
      continue;
   }
   if(TRIPLE_KEYS.includes(val)){
     j++;
     if(j === 2){
       j=0;
     }
   }else{
     i++;
   }
 }
 return converted.roman;
}

convertToRoman(3999);

