// 1 task
//Write a JavaScript program to get the integers in range (x, y)
//Example: range(2, 9) Expected Output: [3, 4, 5, 6, 7, 8]
function getRange(x,y){
	var arr = [];
	for (var i = x+1; i < y; i++){
		arr.push(i);		
	}
	return arr;
}
alert(getRange(2,9));

// 2 task
//Write a merge sort program in JavaScript. Go to the editor
//Sample input: [34,7,23,32,5,62] Expected Output: [5, 7, 23, 32, 34, 62]
var arrInput = [34,7,23,32,5,62];

function compareAge(a, b) {
  return a - b;
}
var arrOutput = [];
arrOutput = arrInput.sort(compareAge);

// 3 task
var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }
    return gcd(b, a % b);
};
alert(gcd(15,10));