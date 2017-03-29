// task 1
// Create regexp that will find only positive digits in string
var re = /\d+(\.\d+)?/g ;
var str = "1.5 0 12. 123.4.";
alert( str.match(re) );   // 1.5, 0, 12, 123.4

// task 2
//Создайте рег выражение которое найдет все слова которые написаны вот таким вот образом: СлОвО и выведите их в массив
var re = /[А-Я]?([а-я][А-Я])+[а-я]?/g;
var str = "КаЖдЫй день пРоИсХоДиТ что то просто чУдЕсНоЕ";
var arr = str.match(re);
console.log(arr);

// task 3
//Найдите все числа в строке и верните их сумму:
var re = /\d+(\.\d+)?/g;
var str = "КаЖ2дЫй де34нь пРо4ИсХоДиТ 4 чт3о то 1-5 пр5 о44.5сто чУдЕ3сНоЕ";
var arr = str.match(re);
var sum = 0;
for (var i = 0; i < arr.length ; i++){
  sum += +arr[i];
}
console.log(arr);
console.log(sum);
// task 4

// task 5
var re = /(-?\d+(?:\.\d+)?)(\s?[-+\*\/]\s?)(-?\d+(?:\.\d+)?)/;
var str = "-1.23 * 3.45";
var arr = [];
function getElem(exp){
  arr = exp.match(re);
  arr.shift();
return arr;
}
getElem(str);
alert(getElem(str));
