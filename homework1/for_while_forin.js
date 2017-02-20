// 1 задание

for (var count = 1; count <= 50; count++ ){
	document.write(count+'<br>');
}

// 2 задание

var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++){
	document.write(arr[i]+' ');
}

//3 задание

var arr = [2, 3, 4, 5];
var n = 1;
for (var i = 0; i < arr.length; i++){	
	n *= arr[i];	
}
console.log(n);

//4 задание

var obj = {
	'Минск': 'Беларусь',
	'Москва': 'Россия',
	'Киев': 'Украина'
};
for (var key in obj){
	console.log(key + '- это ' + obj[key]);
}

//5 задание

var n = 1000;
var num = 0;
while (n > 50){
	num++;
	n = n / 2;
}
alert(n);
alert(num);

//6 задание

var arr = [2, 5, 9, 15, 0, 4];
for (var i = 0; i < arr.length; i++){	
	if (arr[i] > 3 && arr[i] < 10){
		document.write(arr[i] + '<br>');
	} 
}

//7 задание

var arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var month = 1;
for(var i = 0; i > arr.length; i++){
	if (i == month)	{
		document.write('<b>'+arr[i]+'</b><br>');
	}
	else {
		document.write(arr[i]+'<br>');
	}
}


