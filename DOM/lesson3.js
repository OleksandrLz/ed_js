// task1

function changeContent(){
	/** пожалуйста обьявляй все переменные через var */
	rowNum = +prompt("Введите номер строки (0-2)", "0");
	colomnNum = +prompt("Введите номер строки (0,1)","0");
	content = prompt("Введите новое значение");  
	
	var x = document.getElementById('myTable').rows[rowNum].cells;
	x[colomnNum].innerHTML = content;

	/** 
		вот я проверила оно работает но хотелось бы что бы если у тебя есть задание с работой с DOM чтобы ты подключал свой 
		файл к файлу html чтобы я сразу могла проверить его работоспособность
	*/
}

// task2

function removecolor(){
	/** 
		не знаю что это и о чем это но оно не работает так как нужно когда ты выбираешь из селекта цвет а потом нажимаешь удалить 
		то этот элемент должен удаляться из дропдауна а он там все равно остаеться переделать)
	*/
	var x = document.getElementById("colorSelect");
	x.remove(x.selectedIndex);
}

// task3 

/**
	вот так вот - document.body.childNodes[1] - лучше элемент не искать - потому что структура документа может быть очень разной и не всегда 
	параграф бьудет идти 2 ребенком и вообще структура меняеться а твой код должен быть гибким - лучше сделать тут поиск по 
	querySelector или по id например

	var element = document.querySelector('p');  // p
*/
var element = document.body.childNodes[1];  // p
var boldItems = document.getElementsByTagName('strong');

function toColor(){
   for (var i = 0; i < boldItems.length; i++){                                                    
    boldItems[i].style.color = "yellow";
   }
}

function returnColor(){
  for (var i = 0; i < boldItems.length; i++){
       boldItems[i].style.color = "black";
  }
}

element.addEventListener("mouseover", toColor);
element.addEventListener("mouseout", returnColor);

// task4

function insert_Row() {
	var x = document.getElementById('sampleTable').insertRow(0);
	var cell1 = x.insertCell(0);
	var cell2 = x.insertCell(1);

/** лучше бы с каким-то текстом - но ладно уже как есть и так нормально) */
}
