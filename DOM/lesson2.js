// task1

if (!elem.firstChild) {
 узел elem пуст 
 /** 
	ну как бы тогда уже тут пишем 
	return "Empty"; 
	например 
*/
};

// task2

	var table = document.body.children[0];

	for (var i = 0; i < table.rows.length; i++) {
		var row = table.rows[i];
		row.cells[i].style.backgroundColor = 'red';
	}
// task3

/** и где 3 задание?) */

// task4

function createSpanInBlockByID(blockID) {
  var elem = document.getElementById(blockID);

    var newElement = document.createElement('span');
    newElement.innerHTML = 'Привет!';
    elem.appendChild(newElement);
};
/** 
	а как же вот эта вот проверка?
	P.S. Эта функция должна проверять наличие элемента в этом блоке, 
			если он уже там есть второй раз она его добавлять не будет! 

	нужно сделать проверку вначале например: 
	
	if (elem.querySelector('span').length) { return; }

*/
createSpanInBlockByID('myBlock');

// task5

function createCloneNode(block) {
    var element = document.createElement(block); // создано для проверки
     element.innerHTML = "test";
	
    var clone = element.cloneNode(true);
    document.body.appendChild(clone);
};
createCloneNode('div');

/** 
	тут больше расчитано на то что тебе в функцию передадут уже существующий элемент
	а ты потом просто сделаешь его копию и запишешь в конец страницы, но впринцыпе ок пусть будет так
*/

// task6

function addChildrenTo(block, count, type) {
/** давай так учиимся быть универсальным и делать проверку на ошибки та где это возможно даже если в задании не написано, например
тут проверить как минимум нужно то что count число и что block строка */
  for (var i = 1; i <= count; i++) {
	   var element = document.createElement('type');
			/** тут нужно передать переменную type а не строку 'type' */
	   block.appendChild(element);
  }
}

// task7

function replaceElBy(blockCurrent, blockToReplace){
    blockCurrent.parentNode.replaceChild(blockToReplace, blockCurrent);
    if (blockToReplace.parentNode) {
        alert('Операция проведена успешно'); 
    }
}

// task8
var element = document.getElementById('test');
element.addEventListener('click', showName);

function showName() {
	console.log(this.tagName);
}

// task9
var element = document.getElementById('test');
element.addEventListener('click', showName);

function showName(){
	console.log(this.tagName.toLowerCase());
}

// task10

var elements = document.getElementsByClassName('www');

for(var i=0; i < elements.length; i++){
	addName(elements[i]);
}

/** тут я ошиблась в задании туманно написано я хотела что бы вы это добавили в название класса */
function addName(elem){
	elem.innerHTML += ' '+elem.tagName.toLowerCase();
}

// task11
//Создайте ol. Вставьте ему в конец li с текстом 'пункт'.
var parent = document.createElement('ol');
var elem = document.createElement('li');
elem.innerHTML = 'пункт';

parent.appendChild(elem);

// task12
var arr = [1, 2, 3];
var parent = document.getElementsByTagName('ul');

for(var i = 0; i < arr.length; i++){
	insertEl(arr[i]);
}

function insertEl(arrEl){
	var element = document.createElement('li');
	element.innerHTML = arrEl;
	parent[0].appendChild(element);
}

// task13
var arr = [1, 2, 3];
var parent = document.createElement('div');

for(var i = 0; i < arr.length; i++){
	insertEl(arr[i]);
}

function insertEl(arrEl){
	var element = document.createElement('p');
	element.innerHTML = arrEl;
	parent.appendChild(element);
}

var body = document.getElementsByTagName('body');
body[0].appendChild(parent);

// task14

var element = document.createElement('p');
element.innerHTML = '!!!';

var test = document.getElementById('test');
var parent = test.parentElement;
parent.insertBefore(element, test);

// task15
