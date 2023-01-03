//this is a comment//
/* sample text */


const a = "identifier";
console.log (a)



// Whole-script strict mode syntax
"use strict";
const v = "Hey! I'm a strict mode script!";


//javascrpt variables
let x;
x = 24;
console.log(x)


//javascript string
let string;
string="test123";
console.log(string);



//strings example
const name = 'Bob';
const name1 = "Jack";
const result = `The names are ${name} and ${name1}`;
console.log(result);


//javascript is Case-sensitive
const b = "a";
const c = "A";
console.log(b===c);


//javascript undefined 
let counter;
console.log(counter);


//Javascript Null 
let number="null";
console.log(number);


//Javascript Boolean
let firstNum = 10;
let secondNum =5;
let isGreater = firstNum>secondNum;
console.log(isGreater);

//Javascript Number

let K = "10";
console.log(K);

//Javascript object types
let person ={
    name:'jack',
    age:20
};
console.log(person);

//Javascript Unary Operator

let j = 90;
let k = +j;

console.log(k); 



//Javascript Bitwise AND Operator
let l = 10; 
let  z = 5; 
value = l|=z; 
console.log(value); 



//javascript boolean operator
let n= true,
m = false;
console.log(n || m);




//Javascript Multiplicative operator
let D = 497;
D*= 2;
console.log(D);



//Javascript Additive Operator 
let X =30;
X += 10;
console.log(X);

console.log("hello" + "Everyone");



//Javascript Relation operator

let Z=100;
let C=200;
console.log("Greater:",Z>C);
console.log("Lesser:",Z<C);
console.log("Greater Than Equal :",Z>=C);
console.log("Greater Than Equal :",Z<=C);

//Javascript Comma operator
let ans = (10, 10 + 20);
console.log(ans);

//Javascript if statement

let hour =20;

if (hour>=6 && hour<12) 
console.log('Good morning');
else if (hour>12 && hour<18)
    console.log('Good Afternoon');
else if (hour>18 && hour<24)
    console.log('Good Night');

//Javascript continue statement

let text = '';
for (let i = 10; i < 20; i++) {
  if (i === 12) {
    continue;
  }  
  text = text + i;
}
console.log(text);


//Javascript Break statement

let i= 0;
while ( i < 6 ) {
    if(i===5) {
        break;
    }
   i = i+1;
}
console.log(i);

//Javascript switch statement

switch (new Date().getDay()) {
    case 1:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Today is Sunday";
      break;
    default:
      text = "Looking forward to the Weekend";
  }
  console.log(text);

