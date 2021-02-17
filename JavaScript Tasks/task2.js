
/* Write down a function that displays the sum of the numbers with each iteration in a range using a recursive function.
Eg: range(3,10)
Output:
[3,4,5,6,7,8,9,10]
[3,7,12,18,25,33,42,52]
using recursive*/
let minn = +prompt("enter min value of array");	// ex 3
let maxx = +prompt("enter max value of array");	//ex 10
let arr = new Array();
function add(minn,maxx){
	arr.push(minn);
	
	if(minn<maxx){
	add(minn+1,maxx);
	}
	return
}
add(minn,maxx);

console.log(arr);
let newArray = new Array();
let sum=0;
function nextadd(minn,maxx){	//adding number with recursive 
	sum=minn+sum;
	newArray.push(sum);
	if(minn<maxx){
		nextadd(minn+1,maxx)
	}
	return
}
nextadd(minn,maxx);
console.log(newArray)
/*
without recursive
function copyArray(){
for (i = 0; i <arr.length; i++) {
  if(i==0){
	  newArray[i]=minn;
	}
  else{
	newArray[i] = newArray[i-1]+arr[i];
	}
	
  }
  alert(newArray);
}
copyArray();
*/
