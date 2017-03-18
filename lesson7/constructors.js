// 1 task
Создайте объект с помощи функции-конструктора Person. В объекте должны быть свойства name, 
last_name && age, метод isCanWalk() который будет возвращать true, 
и метод countPersons как статический метод который будет считать сколько екземпляров Person мы создали;
создайте несколько екземпляров Person например: var Lily = new Person(аргументы ...)

function Person(name, last_name, age) {
	this.name = name;
	this.last_name = last_name;
	this.age = age;
	this.isCanWalk = function() {
    return true;	
  };
 	Person.count++;	
}
Person.count = 0;
Person.countPersons = function() {
      alert( this.count ); 
    };
var Alex = new Person('Alex', 'Ivanov', 25);
var Nick = new Person('Nick', 'Lebowsky', 26);
var Iren = new Person('Iren', 'Qwerty', 24);

Person.countPersons();

// 2 task
Создайте обьект bus через функцию-констурктор Car который будет иметь свойства canRide, wheels && model;
В нем переопределите метод toString() который будет при его вызове выводить:
"Это объект bus! Он может ехать? 'тут значение свойства canRide' 
У него 'тут значение свойства wheels' колеса и у него модель 'тут значение cвойства model'";

Создайте несколько экземпляров-объектов функции Car и выведите результат метода toString() для каждого из них!
	
function Car(name, canRide, wheels, model){
	this.name = name;
	this.canRide = canRide;
	this.wheels = wheels;
	this.model = model;	
	this.__proto__.toString = function(){
		var str = 'Это объект '+this.name+'! '+'Он может ехать? '+this.canRide+' У него '+this.wheels+' колеса и у него модель ' +this.model;
		return str;
	};
}

var bus = new Car('bus', 'Yes', 4, 'Bogdan');
var taxi = new Car('taxi', 'Yes', 4, 'Audi');
console.log(bus.toString());
console.log(taxi.toString());

// 3 task
var ladder = {
  step: 0,
  up: function() {
    this.step++;
    return this;
  },
  down: function() {
    this.step--;
    return this;
  },
  showStep: function() {
    alert( this.step );
    return this;
  }
}

ladder.up().up().down().up().down().showStep(); // 1
