//Опеределить на какой контекст будет ссылатся this в результате выполнений следующих примеров
//1 task
function isContextEqualTo(contextLink) {
   console.log(contextLink === this);
}

function name() {
   isContextEqualTo(window); // true, ссылаеться на глобальный объект
}

var name = "Vasya";

var user = {
    name: "Lylya",
    getName: function () {
        return this.name;
    }
}

console.log(user.getName()); // Lylya, ссылаеться на объект user

var getName = user.getName;

console.log(getName()); // Vasya, ссылаеться на глобальный объект "window"

//2 task
