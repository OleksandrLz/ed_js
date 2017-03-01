// 1 task
var str = "aaa@bbb@ccc";
var target = /@/gi;
var newstr = str.replace(target, '!');
alert(newstr);

// 2 task
var str = 'aaa bbb ccc';
alert(str.substr(4,3));
alert(str.substring(4,7));
alert(str.slice(4,7));

// 3 task
var date = '2025-12-31';
var s = /-/gi;
date = date.replace(s, '/');
var part1 = date.slice(0,4);
var part2 = date.slice(4,8);
var part3 = date.slice(-2);
date = part3 + part2 + part1;
alert(date);

// 4 task
var str = 'js';
str = str.toUpperCase();
alert(str);

// 5 task
var str = 'я учу javascript!';
var l = str.length;
alert(l);

// 6 task
var str = 'я учу javascript!';
var n = 10;
var result = '';
if (str.length > n){
	result = str.slice(0, n) + '...';	
} else {
	result = str;
}
alert(result);

// 7 task
var str = 'я учу javascript!';
var splits = str.split(' ');
console.log(splits);

// 8 task
var arr = ['я', 'учу', 'javascript', '!'];
var str = arr.join('+');
console.log(str);

// 9 task
var str = 'я учу javascript!';
str = str.slice(0,1).toUpperCase() + str.slice(1);
console.log(str);

// 10 task
var str = 'я учу javascript!';
var arr = str.split(' ');
for (var i = 0; i < arr.length; i++){
	arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
}
str = arr.join(' ');
console.log(str);

// 11 task
var str = 'var_test_text';
str = str.replace(/_/gi, ' ');
var arr = str.split(' ');
for (var i = 1; i < arr.length; i++){
	arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
}
str = arr.join('');
console.log(str);