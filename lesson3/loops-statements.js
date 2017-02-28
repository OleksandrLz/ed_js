//1 task
for(var i = 0; i <= 15; i++){	
	if(i%2 === 0){
		document.write(i+' is even <br>');
	} else {
		document.write(i+' is odd <br>');
	}
}

//2 task
for(var i = 1; i <= 100; i++){	
	if (i%3 === 0 && i%5 === 0){
		document.write('FizzBuzz <br>');
	} else if (i%3 === 0){
		document.write('Fizz <br>');
	} else if (i%5 === 0){
		document.write('Buzz <br>');
	}
}

//3 task ???
var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }
    return gcd(b, a % b);
};
alert(gcd(15,10));

//4 task
var sum = 0;
for(var i = 1; i <= 1000; i++){	
	if (i%3 === 0 && i%5 === 0){
		sum = sum + i;
	} 
}
document.write(sum);
