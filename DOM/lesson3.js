// task1

function changeContent(){
	rowNum = +prompt("Введите номер строки (0-2)", "0");
	colomnNum = +prompt("Введите номер строки (0,1)","0");
	content = prompt("Введите новое значение");  
	
	var x = document.getElementById('myTable').rows[rowNum].cells;
	x[colomnNum].innerHTML = content;
}

// task2

function removecolor(){
	var x = document.getElementById("colorSelect");
	x.remove(x.selectedIndex);
}

// task3 

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
}