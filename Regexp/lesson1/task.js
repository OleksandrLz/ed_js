// task 1
//Дана строка 'aaa@bbb@ccc@ddd@ggg@www@'.
//Найдите и замените все буквы находящиеся между символами "@ ... @" на пробелы.

var str = "aaa@bbb@ccc@ddd@ggg@www@";
console.log(str.replace(/@.*?@/g, "@   @"));

// task 2
//Запишите в replace выражение которое вернет следующий результат:

var date = "31/12/2025";
console.log(date.replace(/\//g, ' - ')); // 31 - 12 - 2025

// task 3
Напишите регулярное выражение которое для каждой картинки добавит закрывающий слеш в конце:

var text = '<img src="a">   <img src="b" id="c">';
text = text.replace(/>/g, '\/>');

// now text = '<img src="a"/>   <img src="b" id="c"/>'
alert(text);


//task 4
//Write a pattern that matches e-mail addresses.

var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var str1 = 'aleksandr123@ua.net'; 
var str2 = 'aleksandr12..3@ua.net'; 
console.log(reg.test(str1));//true
console.log(reg.test(str2));//false

// task 5
//Write a JavaScript program to search a date within a string.
 
function testForDate(str){
   var reg = /\d+\/\d+\/\d+/g;
  var result = str.match(reg);
  console.log(result);
 }
testForDate("Hello, my birthday is on 20/06/1993"); // returns [20/06/1993]
testForDate("Hello, my favourite days are 20/06/1993 and 20/06/2010"); // returns [20/06/1993, 20/06/2010]
