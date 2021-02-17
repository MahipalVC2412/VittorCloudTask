//Write down a program to display the searched data and sorted data 
// from the Array of Objects.
//done

let obj=[];
let number=+prompt("enter number");
for(let i=0;i<number;i++){
	obj[i]={
		fname:prompt(`enter name ${i} :`).toUpperCase(),
		age:+prompt(`enter age ${i} :`),
	}
}

function sorting(age1,age2){ //for sorting object using age
	if(age1.age>age2.age){
		return 1
	}
	else if(age1.age<age2.age){
		return -1;
	}
	return 0;	
}
console.log(obj.sort(sorting));

var srchName = prompt("enter search name");
for (var i = 0; i < obj.length; i++){	//for searcing
  if (obj[i].fname == srchName.toUpperCase()){
	  console.log(obj[i].fname+" "+obj[i].age);
  }
}