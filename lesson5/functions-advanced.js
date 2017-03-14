// 1 task
//Напишите функцию которая будет выводить текст на екран: "Как ваше имя?"; 
//После ввода имя запишите как свойство "name" для ссылки внутри функции this;
//
//Создайте пустой объект и вызовите эту функцию для объекта и просто для окна и посмотрите изменился ли объект, 
//и создалась ли переменная name в окне браузера?

function writeName() {
 	this.name = prompt("Как ваше имя?");
}
var arr = {};
writeName.call(arr);
writeName.call(window);

// 2 task
//Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n
function sumTo(n){
	var sum = n;
	for(var i = 1; i < n; i++){
		sum += i;
	} 
	return sum;
}
sumTo(3); // 6
sumTo(4); // 10
 
// 3 task
//Задача «Hello World» для функций :)
//Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b. не используя Math.min();
function min(a,b){
	if(a < b){
		return a;
	} else {return b;
	  }
}
// 4 task
Создайте объект у которого будет: 
1) свойство "number" которое не будет перечисляемым при цикле for .. in и будет равно 9 
2) свойство "cantDelete" которое нельзя удалить 
3) метод "getDouble" которое будет записывать число которое будет передаватся в метод как аргумент умноженное на 2; 
а возвращать это же число деленное на 3; 
(то есть на set будет умножать число на 2, а на get будет отдавать это же число деленное на 3 )
//1
var obj = {
	number: 9,		
}
Object.defineProperty(obj, "number", {enumerable: false});
//2
/**
тут что то совсем не то получаеться:

нужно это свойство тоже создать через Object.defineProperty просто там нужно правильный параметр в аргументы передать 
*/
function cantDel(){}
 cantDel.prototype.cantDelete = 1;
obj = new cantDel();

//3
obj.getDouble = function() { 
	};

Object.defineProperty(obj, 'getDouble', {
	get: function(number) { return number / 3 ; },
	set: function(number) { return number * 2 ; },
});
// 5 task
Напишите код, который отсортирует массив объектов people по полю age.

var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

function compareAge(first, second) {
  return first.age - second.age;
}
people.sort(compareAge);
for(var i = 0; i < people.length; i++) {
  console.log(people[i].name); 
}

// теперь people: [vovochka, masha, vasya]
console.log(people[0].age) // 6

// 6 task
Напишите функцию unique(arr), которая возвращает массив, 
содержащий только уникальные элементы arr (arr — массив строк).

function unique(arr) {
  var result = [];
  nextInput:
    for (var i = 0; i < arr.length; i++) {
      var str = arr[i]; 
      for (var j = 0; j < result.length; j++) {
        if (result[j] == str) continue nextInput; 
      }
      result.push(str);
    }

  return result;
}
