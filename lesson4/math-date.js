//1task
var a = 10;
var b = 3;
var result = a % b;
console.log(result);

//2task
var a = 10;
var b = 2;
var result = a / b;
var s = a % b;

// тут же можно было писать if ( s === 0) ведь у тебя в s лежит a%b.
if ( a % b === 0){
	alert('Делится, '+result);
} else {
	alert ('Делится с остатком '+s);
}

//3task
var a = 10;
var b = 2;
alert(Math.abs(b-a));


//4task
var x = Math.sqrt(379);
// или тут можно написать .toFixed(0) вместо Math.round(x)
alert( Math.round(x) );
alert( x.toFixed(1) );
alert( x.toFixed(2) );


//5task
var min = 1;
var max = 100;
alert( Math.floor(Math.random() * (max - min + 1)) + min;);

//6task ?
//Напишите скрипт, который будет находить корни квадратного уравнения.
var y = Math.sqrt(x);
// огонь а самому попробовать написать функцию помнишь там с дискриминантом и тд?)

//7task
// вообще не то что нужно тебе нужно проверять делиться ли число на себя и только на себя и 1 )
var x = 11;
for (var i=2; i<=x; i++){
    for(var j=2; j<=i; j++){
        if (i%j == 0) break;
    }
    if(j==x) console.log(x);
}

//8task

// вообще не то что нужно смотри задание више
for (var i=2; i<=1000; i++){
    for(var j=2; j<=i; j++){
        if (i%j == 0) break;
    }
    if(j==i) console.log(i);
}

//9task
var arr = [];
for (var i = 2; i < 100; i++) {
  arr[i] = true
}
var p = 2;
do {
  for (i = 2 * p; i < 100; i += p) {
    arr[i] = false;
  }
  for (i = p + 1; i < 100; i++) {
    if (arr[i]) break;
  }
  p = i;
} while (p * p < 100);

// нет нет все как то очень сложно получилось. Вот у тебя же было 5 задание ты выводил случайное число от 1 до 100. Можно это тут использовать 
// только нужно создать массивс 10 случайными цыфрами

//10task
// вот задание: Выведите на экран текущие день, месяц и год в формате 'год-месяц-день'.

// где тут день-месяц-год?)))

var arr = [];
for (i = 0; i < 10; i++){
	arr[i] = Math.random();
}
console.log(arr);

//11task
// вижу что все немного сьехало

// тут не совсем правильно потому что для дня и года все логично а вот когда ты берешь date.getMonth()
// оно возвращает тебя месяц не текущий а на 1 месяц раньше вот такая вот осбенность
var date = new Date();
alert(date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate());

//12task
var arr = ['янв', 'фев', 'март', 'апр', 'май', 'июнь', 'июль', 'авг', 'сен', 'окт', 'ноя', 'дек'];
var date = new Date();

// тут не совсем правильно потому что для дня и года все логично а вот когда ты берешь date.getMonth()
// оно возвращает тебя месяц не текущий а на 1 месяц раньше вот такая вот осбенность

// правильно было бы 
// var numberMonth = date.getMonth() + 1;
var numberMonth = date.getMonth();
alert(arr[numberMonth]);

//13task
var date = new Date();
var nowMonth = +date.getMonth() + 1;
var nowDate = date.getDate();
function fullDate() {
  if (nowDate < 10){ 
	  nowDate = '0' + nowDate;
  }
  if (nowMonth < 10) { 
	  nowMonth = '0' + nowMonth;
  }
  return nowDate + '.' + nowMonth + '.' +date.getFullYear();
}
alert(date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+' '+fullDate());

//14task
var date = new Date(2015, 0, 7);
alert(date.getDay());

//15task
var date = new Date();
document.write(Math.floor(date.getTime()/1000/60));

//16task
// сдесь это все лучше было бы реализовывать через функцию 

// например 

function SecToDate(seconds) {
	
// тут преобразование
	
// и потом возвращаем результат
}

var sec=100000;
var days=Math.floor(sec/60/60/24);
sec-=days*24*60*60;
var hours=Math.floor(sec/60/60);
sec-=hours*60*60;
var min=Math.floor(sec/60);
sec-=min*60;
alert(days+' days, '+hours+' hours, '+min+' min, '+sec+' sec');
