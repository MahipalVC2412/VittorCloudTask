// Write down a program which returns the nth smallest number from randomly generated data.
//done
let minn = +prompt("enter min value of array");	//5
let maxx = +prompt("enter max value of array");	//10
let num=maxx-minn;	//5
let arr =new Array();
function addd(){
	for(let x=0;x<=num;x++){
		arr[x]=Math.floor(Math.random()+x+minn);  //enerate random number
	}
	alert(arr);
}
addd();
alert(arr.sort());
let nsmall=+prompt("enter nsmallest number");
alert(arr[nsmall]);