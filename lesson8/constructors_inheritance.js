// 1task

function Calculator() {

  var methods = {
    "-": function(a, b) {
      return a - b;
    },
    "+": function(a, b) {
      return a + b;
    }
  };

  this.calculate = function(str) {

    var split = str.split(' ');
    var a = +split[0];
    var op = split[1];
    var b = +split[2];

    if (!methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return methods[op](+a, +b);
  };

  this.addMethod = function(name, func) {
    methods[name] = func;
  };
}

var powerCalc = new Calculator();
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});


var result = powerCalc.calculate('2 ** 3');
console.log( result );

// 2 task
function User(fullName) {
  this.fullName = fullName;
	
  Object.defineProperties(this, {
    firstName: {
      get: function(){
        return this.fullName.split(' ')[0];
      },
      set: function(newFirstName){
        this.fullName = newFirstName + ' ' + this.lastName;
      }
    },
	lastName: {

      get: function() {
        return this.fullName.split(' ')[1];
      },

      set: function(newLastName) {
        this.fullName = this.firstName + ' ' + newLastName;
      }
    }
  });
}


var vasya = new User('Александр Пушкин');
// чтение firstName/lastName
console.log( vasya.firstName ); // Александр
console.log( vasya.lastName ); // Пушкин

// запись в lastName
vasya.lastName = 'Толстой';

console.log( vasya.fullName ); // Александр Толстой
