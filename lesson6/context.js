//Опеределить на какой контекст будет ссылатся this в результате выполнений следующих примеров

 
function isContextEqualTo(contextLink) {
   console.log(contextLink === this);
}

function name() {
   isContextEqualTo(window); // true, ссылаеться на глобальный объект
}

var name = "Vasya";

var user = {
    getName: function () {
        isContextEqualTo(window); //?? ссылаеться на глобальный объект window === this (user)
        isContextEqualTo(user); //?? ссылаеться на объект user 
    }
}

console.log(user.getName()); // true, false

var getName = user.getName;

console.log(getName()); // true, false

user.getName = name;

console.log(user.getName()); // error

user.getName.call(window); // error
