//1 task
//Hoisting или "поднятие переменных"? - это когда интерпретатор JavaScript перемещает («поднимает») объявления функций и переменных в начало области видимости
myname = "global";
function func() {
    console.log(myname); // undefined
    var myname = "local";
    console.log(myname); // local
}
func();

//2 task
//Какие языковые конструкции в javascript создают scope? Что произойдет при выполнении следующего куска кода?
//1) В javascript только функции создают новый scope
var a = 90100;
function someFunc(){
  if(false){
    var a = 1;
  } else {
    var b = 2;
  }
  console.log(b); // 2
  console.log(a); // undefined
}
someFunc();

//3 task
function test() {
  this;
}
test();// object window , undefined

//4 task
Что такое глобальные переменные ? - переменные которые не находятся внутри какой-то функции.
Как они создаются ? - через var
var a = 5; //объявление var создаёт свойство window.a
Какие проблемы связаны с использованием глобальных переменных? - при 'поднятии' переменных они равны undefined.

//5 task
//1 Создайте страницу на которой при запуске всплывает окно с полем для ввода имени,
//потом при закрытии окна сохраните имя в переменной и выведите его в консоль или на экран

var name = prompt('Введите имя');
console.log(name);

//2 С предыдущим примером проверьте будет ли имя больше чем ваше собственное,
//если да то выводите его в консоль если нет то выведите alert с сообщением что мое имя короче чем ваше

var myName = 'Sasha';
if (name.length > myName.length){
	console.log(name);
} alert ('мое имя дольше чем ваше');

// 6 task

for (var i = 1; i <= 10; i++){
	if (i == 5){
		alert(5);
}
	if (i == 9){
		break;
}
}
// 7 task
//Напишите функцию подсчета факториала числа, но каждый раз возвращая факториал умножайте его на 2 если число четное.
function factorial(number){
	if (number == 1){
	return 1;
	} 
	var result = number;
	for (var i = 1; i < number; i++){
		result *= i;
	}
	if (result % 2 === 0){
		return result*2;
} else return result;

}
factorial(3);

// 8 task

var start = new Date();
function factorial(number){
	if (number == 1){
	return 1;
	} 
	var result = number;
	for (var i = 1; i < number; i++){
		result *= i;
	}
	if (result % 2 === 0){
		return result*2;
} else return result;

}
console.log(factorial(12));
var end = new Date();
var elapsed = end.getTime() - start.getTime();
console.log('время выполнения - '+elapsed+' миллисекунд');
