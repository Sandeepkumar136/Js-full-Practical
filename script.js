/*JavaScript is the world's most popular programming language.

JavaScript is the programming language of the Web.

JavaScript is easy to learn.

This tutorial will teach you JavaScript from basic to advanced.*/

/*
JavaScript can "display" data in different ways:

Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log().*/


// // Example 1

// document.getElementById('demo-1').innerHTML='Sandeep Kumar';

// // Example 2

// document.write('Frontend Developer');

// // Example 3

// window.alert('This is Testing Website');

// // Example 4

// console.log('Sandeep Kumar');

/*
Variables are Containers for Storing Data
JavaScript Variables can be declared in 4 ways:

Automatically
Using var
Using let
Using const*/

/*The let keyword was introduced in ES6 (2015)

Variables defined with let cannot be Redeclared

Variables defined with let must be Declared before use

Variables defined with let have Block Scope

*/



/*The const keyword was introduced in ES6 (2015)

Variables defined with const cannot be Redeclared

Variables defined with const cannot be Reassigned

Variables defined with const have Block Scope*/



/*Types of JavaScript Operators
There are different types of JavaScript operators:

Arithmetic Operators
Assignment Operators
Comparison Operators
String Operators
Logical Operators
Bitwise Operators
Ternary Operators
Type Operators
 */


// JavaScript Arithmetic Operators
/*
Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement */





// Example 1
let x=5,y=6;
// console.log(x+y);
// // Example 2
// console.log(x-y);
// // Example 3
// console.log(x*y);
// // Example 4
// console.log(x/y);
// // Example 5
// console.log(x%y);
// // Example 6
// console.log(x**y);
// // Example 7
// console.log(x++);
// // Example 8
// console.log(--y);



/*JavaScript Assignment Operators
Assignment operators assign values to JavaScript variables.

Operator	Example	Same As
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y */


console.log(x+=y);
console.log(x-=y);
console.log(x/=y);
console.log(x*=y);
console.log(x**=y);
console.log(x%=y);
console.log(x=y);



/*Shift Assignment Operators


Operator	Example	Same As
<<=	x <<= y	x = x << y
>>=	x >>= y	x = x >> y
>>>=	x >>>= y	x = x >>> y





Bitwise Assignment Operators
Operator	Example	Same As
&=	x &= y	x = x & y
^=	x ^= y	x = x ^ y
|=	x |= y	x = x | y





Logical Assignment Operators
Operator	Example	Same As
&&=	x &&= y	x = x && (x = y)
||=	x ||= y	x = x || (x = y)
??=	x ??= y	x = x ?? (x = y) 





1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date*/



// FUNCTION 
function my_Function_1(a,b){
return a+b;
}
console.log(my_Function_1(2,2));





// Statement
x=10,y=10;
if(x < y){
    console.log('Y is greater than X')
}else if(x>y){
    console.log('X is greater than y')
}else{
    console.log('It is Equal')
}


switch(new Date().getDay()){
    case 0:
        confact='Today is Sunday';
        break;
    case 0:
        confact='Today is Monday';
        break;
    case 1:
        confact='Today is Tuesday';
        break;
    case 2:
        confact='Today is Wednesday';
        break;
    case 3:
        confact='Today is Thursday';
        break;
    case 4:
        confact='Today is Friday';
        break;
    case 5:
        confact='Today is Saturday';
        break;
}
console.log(confact);



// Break and Continue;
// Break
for (let i = 0; i <= 10; i++) {
    if(i===5){
        continue;
    }else if(i===8){
        break;
    }
    let config=i;
    console.log(config)
}



let Arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let texts;
Arr_list:{
    texts+= Arr[0]+'<br>';
    texts+= Arr[1]+'<br>';
    texts+= Arr[2]+'<br>';
    texts+= Arr[3]+'<br>';
    break Arr_list;
    texts+= Arr[4]+'<br>';
    texts+= Arr[5]+'<br>';
    texts+= Arr[6]+'<br>';
    texts+= Arr[7]+'<br>';
    texts+= Arr[8]+'<br>';
    texts+= Arr[9]+'<br>';
    texts+= Arr[10]+'<br>';
}
document.write(texts);



for(i=1;i<=1000;i++){
    if(i%2==1){
        console.log(`This is First Even Number in Range Which i Executed ${i}`)
        break;
    };
};
for(i=0;i<=10;i++){
    if(i===5){
        continue;
    }
    console.log(i)
};


// Set
// new Set()	Creates a new Set
// add()	Adds a new element to the Set
// delete()	Removes an element from a Set
// has()	Returns true if a value exists in the Set
// forEach()	Invokes a callback for each element in the Set
// values()	Returns an iterator with all the values in a Set



// Property	Description
// size	Returns the number of elements in a Set


let S_1 = new Set(['Sandeep Kumar']);
console.log(S_1);

S_1.add('Frontend Developer');
S_1.add('Kishanganj');
S_1.add('Backend Developer');
S_1.delete('Backend Developer');

let ret = ''; // Initialize ret as an empty string

S_1.forEach((value) => {
    ret += value+'<br>';
});

console.log(S_1);
document.write('Concatenated values:', ret);



// Values
let s_2=new Set([9,8,7,6,5,4,3,2,1,0])
let word='';
for(let i of s_2.values()){
    word+=i;
    console.log(word)
}
// new Map()	Creates a new Map
// set()	Sets the value for a key in a Map
// get()	Gets the value for a key in a Map
// delete()	Removes a Map element specified by the key
// has()	Returns true if a key exists in a Map
// forEach()	Calls a function for each key/value pair in a Map
// entries()	Returns an iterator with the [key, value] pairs in a Map
// Property	Description
// size	Returns the number of elements in a Map