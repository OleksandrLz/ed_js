//task1
//Write a JavaScript program to test the first character of a string is uppercase or not
// function checkLet(str){
  
//(1)
// var result = str.match(/[A-Z,А-Я]/);
// if (result.index === 0){
//           console.log('The first letter is uppercase');
//   }
// }

// var s = "Script";
// checkLet(s);

//(2)
function checkLet(str){  
   reg = /^[A-Z,А-Я]/;  
   if (reg.test(str)){  
      console.log("The first letter is uppercase");  
    } else { console.log("The first letter is lowercase");
      }
}  
checkLet('Script');  
checkLet('script');
/**  а еще можно сделать вот так вот чтобы не мачить на все большие буквы ты же понимаешь языков много на все так не проверишь: 

var test = "Test me";

function testIfFirstLetterUpperCase(string) {
  var firstLetter = string[0];
  
  return firstLetter === firstLetter.toUpperCase();
}

testIfFirstLetterUpperCase(test);

*/

//task2
//Write a JavaScript program to check a credit card number.
function isCard(str){  
/** всегда обьявляй переменный через var !!!) */
 var reg = /^(?:([0-9]{16}))$/;  
	
/**
    здесь можно просто возвращать твое выражение из функции поскольку они будет либо true либо false
    return reg.test(str);
*/
  if (reg.test(str)){  
    return true;  
  } else {  
    return false;  
  }  
}  
  
console.log(isCard("1234567890123456")); // true 
console.log(isCard("12345678901234"));  // false

//task3
//Write a JavaScript program to count number of words in string.
function getCount(str){
  str = str.replace( /(^\s*|\s*$)/g,'');
  str = str.replace(/[  ]{2,}/g, ' ');
  str = str.replace(/\n /,'\n');
  var result = str.split(' ').length;
  return result;
}
console.log(getCount(' qwer qwer qwert rty ')); //4

//task4
//Write a JavaScript function to check whether a given value is IP value or not. (IPv4)
function checkIP(str){
var reg = /^((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))$/
return reg.test(str);
}
console.log(checkIP('111.254.125.156')); // true
console.log(checkIP('11.897.67.456'));   // false

//task5
//Write a JavaScript function to check whether a given value is hexcolor value or not.

function checkColor(str){  
	
 reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;  
	
/**
    здесь можно просто возвращать твое выражение из функции поскольку они будет либо true либо false
    return reg.test(str);
*/
    if (reg.test(str)){  
            return true;  
          } else {  
            return false;  
          }  
}  
  
console.log(checkColor("#000"));       // true
console.log(checkColor("#1234567"));   // false

//task6
//Write a JavaScript function to check whether a given value is Ukraine zip code or not.
function isZip(str){  
 reg = /^[0-9]{5}$/;  
	
/**
    здесь можно просто возвращать твое выражение из функции поскольку они будет либо true либо false
    return reg.test(str);
*/
      if (reg.test(str)){  
            return true;  
          } else {  
            return false;  
          }  
}  
  
console.log(isZip("01234")); // true 
console.log(isZip("Z0123")); // false

//task7
//Write a JavaScript function to print an integer with commas as thousands separators.

function getNumber(num){  
    var n = num.toString().split(".");  
    n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
    return n.join(".");  
}  
  
console.log(getNumber(1000)); 
console.log(getNumber(10000.23));  
console.log(getNumber(100000));
