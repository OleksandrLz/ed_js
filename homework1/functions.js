// 1 task
function getName() {
x = prompt('What is your name?','name');
alert("Hello, " + x);
}
getName(); 

// 2 task
function double(x) {
return x *= 2;
}
double(6);

// 3 task
function range(x, y) {
var sum = 0;
for (; x <= y; x++) {
sum += x;
}
return sum;
}
range(1,3);

// 4 task
function double(x) {
 x *= 2;	
var triple = function() { return x *= 3; };
return triple();
/* LILY:
вот здесь вообще супер, но можно дадже еще лучше - зачем создавать функцию вот это а потом ее же возвращать можно сразу сделать вот так вот
return function() { return x *= 3; }

но вобще тебе не нужно было создавать новую функцтю double а нужно было восползоваться старой а именно где-то так:

function multiply23(x) {
return x*double(x);
}

вот тут ты бы ее использовал не обьвляя наново
*/
}
var w = double(6);
alert(w);

// 5 task
function isOdd(value) {
	if (value%2 == 1)
		return true;
	else
		return false;
}
var q = isOdd(3);
alert(q);

// 6 task
function isOdd(value1, value2) {
	for (var i = value1; i <= value2; i++) {
		if (i%2 == 1){
			document.write(i+' ');
		} 
	}
}
/* LILY:
вот здесь впринцыпе тоже самое у тебя уже есть функция isOdd эту можно назвать например isOddInRange и внутри
ее используем функцию isOdd например:
function isOdd(value1, value2) {
	for (var i = value1; i <= value2; i++) {
		isOdd(i);
	}
}
*/
isOdd(3, 8);

// 7 task
function getNumber(){
	var num = 0;
	function promtNumber(){
		return num = parseInt(prompt('write a number','number'));
	}
	do {
		promtNumber();
	} while (num !== 9); 
}
getNumber();
