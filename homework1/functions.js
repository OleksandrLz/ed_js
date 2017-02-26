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
