// Write down a function that separates the firstName and lastName from a string
//(considering the first word of string as the First Name and rest as the Last Name) and 
//perform a search using the first name in the static JSON Data.

let paraGraph = prompt("enter paragraph => ");
let paraArray =  paraGraph.split(" ");
alert(`paragraph convert into array ==> ${paraArray}`);
let arr = [];
for(let i=0;i<paraArray.length;i++){
	arr[i]=paraArray[i];
}
let fname=arr[0];
alert(`First Name is ==>${fname}`);

let Lname = new Array();
for(let x=0;x<=arr.length;x++){
	if(x==0){
	}
	else{
		Lname[x]=arr[x];
	}
}
let lastName=Lname.join(' ');
alert(`last name is ==> ${lastName}`);
let number=+prompt("enter number for object creation");
let objArray=[];
for(let i=0;i<number;i++){
	objArray[i]={
		FirstName:prompt(`enter name ${i}`),
		Lastname:prompt(`enter lastname ${i}`),
	}
}

var srchName = prompt("search data enter");
for (var i = 0; i < objArray.length; i++){
	if (objArray[i].FirstName == srchName){
	alert(objArray[i].FirstName+" "+objArray[i].Lastname);
	}
}
