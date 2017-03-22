// 1 task
Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.
P.S. Код также должен легко модифицироваться для любых других интервалов.

var minNumber = 2;
var maxNumber = 10;
var arr = [];

for (var i = minNumber; i <= maxNumber; i++){
	for (var j = minNumber; j <= i; j++){
		if (i%j == 0){	
		  break;
		}
	}
	  if(j==i){ 
	  arr.push(i);
	  }
}
console.log(arr);

/** получаеться не совсем правильный алгоритм потому что если у меня промежуток от 20 до 100 выдает не простые числа пересмотри логику */ 

// 2 task
Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет

var obj = {
  className: 'open menu'
};
function addClass(obj, cls){
	var arr = obj.className.split(' ');

	for (var i = 0; i < arr.length; i++) {
  		if (arr[i] == cls) return;
	}
	/** здесь лучше было бы использовать метод массивов indexOf чтобы узнать есть ли подстрока в строке а потом уже добавлять если есть
	или не добавлять если нету */
	arr.push(cls);
	obj.className = arr.join(' ');	
}
addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert( obj.className );

//3 task
Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть

var obj = {
  className: 'open menu'
};

function removeClass(obj, cls){
	var arr = obj.className.split(' ');
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == cls){
			arr.splice(i, 1);
			i--;
		}		
	}
	
	/** здесь лучше было бы использовать метод массивов indexOf чтобы узнать позицию подстроки в строке а потом уже по этому индексу делать
	splice */
	
	obj.className = arr.join(' ');
}
obj = {
  className: 'my menu menu'
};
removeClass(obj, 'menu');
alert( obj.className ); // 'my'

// 4 task
Напишите код, который:
Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве. 
Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена». 
При этом ноль 0 не должен заканчивать ввод, это разрешённое число. 
Выводит сумму всех значений массива когда ввод прекращен.

var arr = [];
while(true){
	var number = +prompt('Введите число');
	if (number === '' || number === null || isNaN(number)) break;
	arr.push(number);
}
	var result = 0;
	for (var i = 0; i < arr.length; i++){
		result += arr[i];
	}
alert( result );

/** у меня аж все зависло когда я скрипт твое запустила ты создал бесконечный цикл а тебе нужно было бы запустить цикл с условием что если
я ввожду пустую строку или нажимаю отмена прекращать цикл */

// 5 task
Напишите код который принимает от пользователя значение x (можно например через prompt) и выводит значение следующей формулы

var x = +prompt('Введите число');
var result = 5*x*x*x - 5*x*(x*x + 4);
alert( result );

// 6 task
Последовательность чисел Фибоначчи вычисляется по формуле формулу F(n) = F(n-1) + F(n-2). 
В ней каждое следующее число вычисляется как сумма двух предыдущих. Первые два числа равны 1 и 1.
Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.

function fib(n) {
  var a = 1, /** тут у тебя ошибка!!! а у тебя это вообще работало ты же проверяешь его перед тем как отдавать на проверку мне?) */
  var b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert( fib(3) );

// 7 task
Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов. 
Если длинна больше 20, то обрезает строку и добавляет в конец строки '...'

function cutString(str){
	if (str.length <= 20){
		return str;
	} else {
		return str.substr(0,20)+'...';
	}
}

// 8 task
Напишите код который выведет сотрудника который выполнил больше всех задач.

var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};

var number = 0;
var maxName = '';
for (var name in tasksCompleted) {
  if (number < tasksCompleted[name]) {
    number = tasksCompleted[name];
    maxName = name;
  }
}
alert( maxName );

/** можно и через цикл но учимся пользоваться методами массива типа forEach или map */


