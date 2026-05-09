let boxes = document.querySelectorAll(".box");

let turnX = true;



boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("button was clicked");
    if(turnX) {
      box.innerText = "X"
      turnX = false;
    } else {
      box.innerText = "O"
      turnX = true;
    }
    box.disabled = true;
  });
});



// arthmtic operators :- +, -, *, /, %.
// a++ post increment :- hear first change the value after add 
// ++a pre increment :- hear first we have to add the value after we have to print
// a-- post decrement
// --a pre drecement.
// Assignment operator :-  
// :- let a = 5;
//    a += 4 answer will be "9".
// Comparision operator :-
//let a = 5;
//let b = 5;
//console.log(a==b); true.
// logical operator :- AND, OR, NOT
//let a = 6;
//let b = 2;
//let cond1 = a>b;
//let cond2 = a===6;
//console.log(cond1 && cond2); true.
// Conditional statements :- if else else-if
//let age = 20;
// if(age > 18) {
// console.log("you can drive");
//}
//let mode = "dark";
//if(mode === "dark") {
  //  console.log("black"); 
//} else {
  //  console.log("white");
//}.
// Ternery operator :-
//let age = 25;
//let result = age >= 26 ? "adult" : "not adult";
//console.log(result);.
// LOOPS :-
// for loop, while loop, do-while loop, for-of loop(used for string)
// for-in loop(used of array)
// for-of loop example
//let str = "FARUKAHMED";
//let size = 0;
//for(let i of str) {
 //console.log(i);
// size++;
//}
//console.log("string size = ", size);.
// Arrays :-
//let friends = ["Farukahmed", "Omkar", "Nayan", "Vinay"];

//for(let ind=0; ind<friends.length; ind++) {
//  console.log(friends[ind]);
//}

//for(let el of friends) {
//  console.log(el);
//}
// PUSH (Add something in end of the array)
//let fooditems = ["Apple", "Watermillen", "Orange", "Banana"];
//fooditems.push("litchi");
//console.log(fooditems);
//POP (delete something in end of the array)
//let fooditems = ["Apple", "Watermillen", "Orange", "Banana"];;
//console.log(fooditems);
//fooditems.push();

// unshift(add something new in starting og the array)
// shift(delete something in starting of the array).

// Functions :-
// function Sum(x, y) {                     function Sum(x, y) {
  //s = x + y;                              console.log(x + y);
  //return s;                               }
//}                                         Sum(5, 5);
//let val = Sum(1, 2);
//console.log(val);

//function myName() {
 // console.log("Farukahmed");
//}
//call the function in argument's
//myName();

// This is Arrow Function code
//const arrowSum = (a, b) => {
//  console.log(a + b);
//}
//arrowSum(5,4);







