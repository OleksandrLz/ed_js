// task3

var elements = document.getElementsByTagName('form');
console.log(elements.length);

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

// task7

function getAttributes(){  
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
