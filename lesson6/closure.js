// 1 task
//Create a function that will always return a number multiply on 3!
var multiplyNum = function(){
    var multiply = function (x) {
        return x *3;
    };
    return multiply; 
};
var f = multiplyNum();
var y = f(3); // 9

// Write a JavaScript program to calculate the factorial of a number using 1 task, 
// but ask user for a number to get factorial from using prompt() function.
// Then give an answer to user after calculation is finished using alert(number);

var factorialNum = function(){
	var number = +prompt('Write a number');
    var factorial = function(){
        var result = number;
		for (var i = 1; i < number; i++){
			result *= i;
		}
		return result;
    };
    alert(factorial()); 
};
var f = factorialNum();
var y = f();

// 2 task ?

//Make this syntax possible: var a = add(2)(3); // 5

var add = function (a) {
    return function (b) {
        return a + b;
    };
};

console.log(add(2)(3)); // 5

// 3 task

// Transform array of numbers to array of functions that will alert that digits:
// in result we will have: [function (){...}, function (){...}, function (){...}, function (){...}]
var numberArray = [1, 2, 3, 4, 10, 5, 6, 7];
var funcArray = numberArray.map(function(item){
	var number = item;
	var f = function(){
	  alert(number);
	};
  return f;

});
console.log(funcArray[1]);