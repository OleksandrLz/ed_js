Опеределить на какой контекст будет ссылатся this в результате выполнений следующих примеров

function isContextEqualTo(contextLink) {
   console.log(contextLink === this);
}

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.getName = function () {
       isContextEqualTo(window); // в контексте обьекта
       isContextEqualTo(user); // в контексте обьекта
       return this.name;
    };
}

Person.prototype.getAge = function () {
    isContextEqualTo(window); // в контексте обьекта
    return this.age;
};

var user = new Person("erer", 45);

var getAge = Person.prototype.getAge;
var getName = user.getName;

console.log(getAge()); //  в контексте window
console.log(getName()); //  в контексте window
console.log(user.getName()); //  в контексте user

Person.prototype.getAge = function() {
    isContextEqualTo(user); //  в контексте обьекта
    return this.name;
}

console.log(user.getAge()); //  в контексте user
