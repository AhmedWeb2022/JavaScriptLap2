// Task 1 
var stop = false;

 while (!stop) {
   checkAge();
   question = "Do You Want To Stop";
   let answer = confirm(question);
   if (answer) {
    stop = true;
   }
 }
 function checkAge() {
   let age = prompt("Please enter your age ", "Your age");
   if (age > 0) {
     if (age > 1 && age <= 10) {
       console.log("you are child");
} else if (age >= 11 && age <= 18) {
       console.log("you are Teenager ");
     } else if (age >= 19 && age <= 50) {
       console.log("you are Grown ");
     } else if (age > 50) {
       console.log("You are Old ");
     }
   } else {
     console.log("Wrong Number");
   }
 }
//--------------------------------------------------------------------------------------------------------------------
// Task 2 
 var strr = prompt("enter your string");
 var count = 0;
 for (let i = 0; i < strr.length; i++) {
   if (strr[i] === "a" || strr[i] === "o" || strr[i] === "e" || strr === "u" || strr === "i") {
     count++;
   }
 }
 console.log(`number of Vowels is : ${count}`);
//-------------------------------------------------------------------------------------------------------------------------
//Task3
var twilveTime = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var fourteenTime = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
var time = parseInt(prompt("enter your time"));
for (let i = 0; i < twilveTime.length; i++) {
  if (time === twilveTime[i]) {
    prompt("your time is " + time + " AM");
  } else if (time === fourteenTime[i]) {
    prompt(`your time is ${twilveTime[i]} PM`);
  }
}
