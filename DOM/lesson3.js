// task1

function changeContent(){
	var rowNum = +prompt("Введите номер строки (0-2)", "0");
	var colomnNum = +prompt("Введите номер строки (0,1)","0");
	var content = prompt("Введите новое значение");  
	
	var x = document.getElementById('myTable').rows[rowNum].cells;
	x[colomnNum].innerHTML = content;
}

// task2

<!DOCTYPE html>  
<html>
 <head>  
  <meta charset=utf-8 />  
  <title>Remove items from a dropdown list</title>  
 </head>
 <body>
  <form>  
   <select id="colorSelect">  
    <option>Red</option>  
    <option>Green</option>  
    <option>White</option>  
    <option>Black</option>  
   </select>
   <input type="button" onclick="removecolor()" value="Select and Remove">
  </form>
  <script>
    function removecolor(){
	    var x = document.getElementById("colorSelect");
  	  x.remove(x.selectedIndex);
    }
    
  </script>
 </body>
</html>

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
