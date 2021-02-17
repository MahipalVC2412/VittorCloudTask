//Write down a function that displays total word count,
// count of character(with and without white space), and count of white spaces.
//done
let paraGraph = prompt("enter paragraph");
let withoutSpace=paraGraph.split(" ").join('');
function charNumber(){
	alert(`the paragraph is => ${paraGraph}`);
}
charNumber();
alert(`without space text => ${withoutSpace}`);
function charLength(){
	alert(`lenth of paragraph including space is => ${paraGraph.length}`);
}
charLength();
function NotSpace(){
	alert(`without space length is  => ${withoutSpace.length}`);
}
NotSpace();
function SpaceCount(){
	alert(`space is => ${(paraGraph.length)-(withoutSpace.length)}`)
}
SpaceCount();