// task3

var elements = document.getElementsByTagName('form');
console.log(elements.length);

/** 
  Можно еще вот так вот сделать:
  document.forms.length;
  https://www.w3schools.com/jsref/coll_doc_forms.asp
*/

// task4

document.body.style.backgroundColor = 'green';

// task5

document.body.style.backgroundColor = 'black';
document.body.style.color = 'white';

// task6

document.body.style.backgroundColor = 'black';
document.body.style.color = 'white';
var colors = [];
colors.push(document.body.style.backgroundColor);
colors.push(document.body.style.color);
console.log(colors);

/**
 Выведите через консоль background цвет body и цвет текста через запятую.

 Шикарно осталось только сделать вот так вот:
 console.log(colors.join(","));
*/

// task7

function getAttributes(){  
 /** это можно вынести в отдельную переменную и потом уже у нее брать все ее свойства:
 
 var link = document.getElementById("w3r");
 var href = link.href;
*/
 var href = document.getElementById("w3r").href;  
 console.log('value of href is: '+href);  
 var hreflang = document.getElementById("w3r").hreflang;     
 console.log('value of hreflang is : '+hreflang);  
 var rel = document.getElementById("w3r").rel;   
 console.log('value of rel is : '+rel);  
 var target = document.getElementById("w3r").target;   
 console.log('value of taget is : '+target);  
 var type = document.getElementById("w3r").type;    
 console.log('value of type is : '+type);    
}

// task8

function js_style(){  
 var text = document.getElementById("text");
 text.style.color = 'blue';
 text.style.fontSize = '20px';
} 
