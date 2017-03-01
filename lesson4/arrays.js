//1 task
var arr = ["у", "м", "а", "р", " ", "а", "л", "ы", "м", 5, " ", "а", "м", "а", "М", 1];
arr.pop();
arr.splice(9, 1);
arr.reverse();
var str = arr.join('');
alert(str);

//2 task
function isPal(str){
  var newStr = str.toLowerCase().replace(/\s/g, '');
	var strRev = newStr.split('').reverse().join('');
	if (newStr == strRev){
		return 'true';
	} return 'false';
}
console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false

//3 task
var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
function anClean(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    var sorted = arr[i].toLowerCase().split('').sort().join(''); 
    obj[sorted] = arr[i]; 
  }
  var result = [];
  for (var key in obj) result.push(obj[key]);
  return result;
}
alert( anClean(arr) );

//4 task
var arr = [ 'rrrA', 'toboR', 'ekiL', 'dooG', 'esoR' ];
function sortArr(a){
  var str = arr.join(' ');
  arr = str.split('').reverse();
  str = arr.join('');
  arr = str.split(' ');
  return arr;
}
console.log(sortArr(arr));

//5 task
//1
var number = 100;
var sum = 0;
for (var i = 1; i <= number; i++){
	sum += i;
}
console.log(sum);
//2
var number = 100;
var sum = 0;
for (var i = 1; i <= number; i++){
	if(i % 2 === 0){
	sum += i;
	}
}
console.log(sum);

//6 task
function callMe(a,b,c){
	var sum = 0;
	if (isNaN(a) || isNaN(b) || isNaN(c)){
		console.error("Тут текст ошибки");
	    return null;
	} sum = a+b+c;
	  return document.write(sum);
}
callMe(2,3,5);
callMe(2,3,'qwerty');

//7 task
myArr = ['воз', 'киборг', 'Корсет', 'костер', 'Сектор'];
function callMeAgain(arr){
	var str = arr.join(',');
	str = str.toLowerCase();
	arr = str.split(',');
	arr = arr.sort();
	return arr;
}
console.log(callMeAgain(myArr));
