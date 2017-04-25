// task1
var x = prompt("Введите число для прокрутки окна по X", 0);
var y = prompt("Введите число для прокрутки окна по Y", 0);
window.scrollBy(x,y);

//task2

  <body>
    <iframe src="https://example.com" height="100"></iframe>
    <iframe src="https://example.com" height="100"></iframe>
    <iframe src="https://example.com" height="100"></iframe>
    <iframe src="https://example.com" height="100"></iframe>
  </body>
	
 var iframe = document.getElementsByTagName('iframe');
 for (var i=0; i < iframe.length; i++){
   console.log(iframe[i]);
 }


// task3 ???(one left)
  <body>
    <p>hello</p>
    <p>js</p>
    <iframe name="example" src="https://example.com" height="150"></iframe>
  </body>
	
var iframe = document.getElementsByTagName('iframe')[0];
var elems = document.body.getElementsByTagName('*');
for (var i = 0; i < elems.length; i++){
  if (elems[i] !== iframe){
    elems[i].remove();
  }
}

// task4

document.getElementsByTagName('iframe')[0].onload = function() {
   var div = document.createElement('div');
   div.innerHTML = 'Frame element loaded';
   document.body.appendChild(div);
};

// task5

var win = window.open('https://github.com', 'myname', 'width=400,height=500,resizable=yes,location=no,status=yes,scrollbars=yes');

// task6

var win = window.open('https://google.com', 'google', 'width=400,height=500');

function func() {
    win.close();
    alert( 'У вас было 5 секунд, но вы не успели ничего найти и окно закрылось!' );
}
setTimeout(func, 5000);

// task7
var browser = navigator.appName;
var os = navigator.platform;
alert('Ваш браузер: '+browser+', Ваша платформа: '+os);

// task8 *** (br's name)
<body>
  <div style='display:none'>Netscape</div>
  <div style='display:none'>Microsoft Internet Explorer</div>
  <div style='display:none'>Opera</div>
</body>
<script>
var elements = document.getElementsByTagName('div');
var br = navigator.appName;
for (var i=0; i < elements.length; i++){
  if(elements[i].innerHTML == br){
     elements[i].style.display = 'block';
  }
}
</script>

// task9

if (navigator.cookieEnabled) {
  console.log('Вы используете coockie, вы молодец');
  } else {
  console.log('Для посещения страницы сайта подключите coockie'); 
}

// task10 (for mozilla firefox)

var mozilla = navigator.userAgent.split("/").pop();
var mozLast = "53.0";

if(mozilla < mozLast) {
  window.open('https://www.mozilla.org');
}

// task11

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

if ((width < 1366) && (height < 800)){
    document.body.classList.add('little-screen');
} else {
    document.body.classList.add('big-screen');
}
console.log( document.body.classList.contains("little-screen") );
console.log( document.body.classList.contains("big-screen") );

// task13
//Выведите в документе информацию пользователю: "Page hostname is " + hostname ( вы тут должны вывести номер порта )

var hostname = document.location.port;
console.log("Page hostname is " + hostname);