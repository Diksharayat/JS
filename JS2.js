var num3 = 20;
var num4 = 30;

//conditional statements


if(num3==num4){
	console.log('true')
}else{
	console.log("false")
}

if(10==11){
	console.log("first condition is false ")
}else if(10==10){
	console.log("second conditiom is true ")
}else{
	console.log("all conditions are false")
}


//switch
var ab= 5;
switch(ab){
	case 0:
		console.log("value of ab is "+ab)
		break;
	case 1:
		console.log("value of ab is "+ab)
		break;
	case 3:
		console.log("value of ab is "+ab)
		break;
	default:
		console.log("this is default block")
}

//loops

// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")


var i = 3;
while(i<10){
	console.log("hello")
	i++;
}

var arr = ["hello1 ","hello 2","hello 3","hello 4"]
var i = 0;
while(i<arr.length){
	console.log(arr[i])
	i++;
}

// for
for(var count = 0; count<arr.length;count++ ){
	console.log(arr[count])
}

// do while
var abcd=5;
do{
	console.log("hello")
	abcd++;
}while(abcd<5)

function fun3(x){
	document.getElementById('id2').innerHTML=x
}
