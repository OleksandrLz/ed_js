// task1
//Напишите функцию printNumbersInterval(), которая последовательно выводит
//в консоль числа от 1 до 20, с интервалом между числами 100мс. 
//То есть, весь вывод должен занимать 2000мс, в течение которых каждые 100мс 
//в консоли появляется очередное число.

function printNumbersInterval() {
  var i = 1;
  
  var timer = setInterval(function() {
    console.log(i);
    if(i == 20){
      clearInterval(timer);
    }
    i++;
    
  },100);
}

printNumbersInterval();

// task2
// Создайте отсчет от 0 до бесконечности.
  
<script type="text/javascript"> 
    function timer() { 
      setInterval(count, 1000); 
    } 
    function count() { 
      var element = document.getElementById('number'); 
      element.innerHTML = +element.innerHTML + 1; 
   
</script> 
	
<body>
    <span id='number'> 0 </span> 
    <br> 
    <button onclick="timer()"> Start timer </button>
</body>
	
// task3
// Создайте отсчет с кнопкой остановки и старта
	
  
<script type="text/javascript"> 
		/** а зачем создавать window.timerId создай переменнную и в нее записуй все */
	
		/** 
			а вообще лучшего все что ты делаешь в script оборачивать в анонимную функцию или делать это на событие DomContentLoaded
			тогда не будет глобальных переменных и все будет выполняться когда все ресурсы будут загружены
		
			тоесть:
			document.addEventListener('DOMContentLoaded', function () {
				function timer() { 
					window.timerId = setInterval(count, 1000); 
				} 
				function count() { 
					var element = document.getElementById('number'); 
					element.innerHTML = +element.innerHTML + 1; 
				} 
				function stop() {
					clearInterval(window.timerId);
				}
			});
			
			и добавлсять обработчики событиявсе жу лучше через addEventListener, а не через атрибут inline
			
		*/
    function timer() { 
      window.timerId = setInterval(count, 1000); 
    } 
    function count() { 
      var element = document.getElementById('number'); 
      element.innerHTML = +element.innerHTML + 1; 
    } 
    function stop() {
      clearInterval(window.timerId);
    }
</script> 
<body>
    <span id='number'> 0 </span> <br> 
    <button onclick="timer()"> Start timer </button>
    <button onclick="stop()"> Stop timer </button>
</body>
	
// task4
//Создайте тикающие часики

<script type="text/javascript">
	function start() { 
		window.timerId = window.setInterval(startTime, 1000); 
	} 
	function startTime() {
	    var time = new Date();
	    var hours =time.getHours();
	    var min =time.getMinutes();
	    var sec =time.getSeconds();

	    hours = addNum(hours);
	    min = addNum(min);
	    sec = addNum(sec);

	    document.getElementById('clock').innerHTML=hours+":"+min+":"+sec;
	}

	function addNum(i) {
	    if (i<10) {
		    i="0" + i;
	    }
	    return i;
	}
	start();
</script>
<body>
	<span id="clock"></span>
</body>
	
// task5
// Создайте таймер обратного отсчета
	

<script type="text/javascript"> 
    function timer() { 
      window.timerId = setInterval(count, 1000); 
    } 
    function count() { 
      element = document.getElementById('number'); 
      element.innerHTML = element.innerHTML - 1;
      if (element.innerHTML == 0) {
        stop();
      }
          
    } 
    function stop() {
      clearInterval(window.timerId);
    }
        
</script> 
<body>
  <span id='number'> 10</span> <br> 
  <button onclick="timer()"> Start timer </button>
  <button onclick="stop()"> Stop timer </button>
</body>
	
// task6
//Создайте отсчет до полуночи
	
<body onload="start()"> 
	<p>До полуночи осталось</p>

	<span> часов </span><span id="hours"> 00 </span> <br>
	<span> минут </span><span id ="minutes"> 00 </span> <br>
	<span> секунд </span><span id ="seconds"> 00 </span> 
</body> 
<script type="text/javascript"> 
/** что то работает не так у меня ничего не работает просто отображает 0 */
	function start() { 
	  var timerId = setInterval(func,1000); 
	} 
	function func() { 
		var time = new Date(); 
		var night = new Date(time.getFullYear(), time.getMonth(), time.getDate()+1, 0, 0, 0); //next date
		var diff = night-time; 
		var hours= document.getElementById('hours'); 
		hours.innerHTML = Math.floor(diff/1000/60/60); 
		var minutes= document.getElementById('minutes'); 
		minutes.innerHTML =Math.floor(diff/1000/60%60); 
		var seconds= document.getElementById('seconds'); 
		seconds.innerHTML =Math.floor(diff/1000%60); 
	} 
</script>

	
// task7
	
<body onload="start()"> 
	<img src="images/1img.png" id="image" alt="img1"> 
</body> 
<script > 
	function start() { 
	  var timerId = setInterval(func,4000); 
	} 
	var number = 2;

	function func() { 
	  var task = document.getElementById('image'); 

	  if (number <= 4) { 
		  task.src= 'images/'+ number +'smile.jpg'; 
		  task.alt = 'img'+number;
		  number += 1;
	  } 
	  else { 
		  number = 1; 
	  } 
	} 
</script>

