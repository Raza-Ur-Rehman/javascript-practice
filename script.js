// ///          youtube exercise practice      ///
// /////      chapter 1 : variable & data type     ///////

// // Question 1 
// // create a const object called "product" to store information ? 
// // ANS :

// const product = {
//     title: "ball pen",
//     rating: 4,
//     offer: 5 ,
//     price: 270,

// };
// console.log(product);




// /////      Chapter 04 :  array    //////
// // Q 01:
// // For a given array with mark of student -> [85,97,44,37,76,60] find the average marks od the entire class.

// // Ans:

// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for (let val of marks) {
//     sum += val;

// }
// let avg = sum / marks.length;
// // console.log(`avg marks in this class= ${avg}`);

// // Q 02:
// // For a given array with price of 5 items -> [250,645,300,900,50] all items have an offer of 10% OFF on them . change the array to dtore final price after appling offer.

// // Ans: 

// let items = [250, 645, 300, 900, 50];

// let i = 0;

// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer
//     break

// }

// // console.log(items);

// for (let val of items) {

//     let offer = val / 10;

//     items[i] = items[i] - offer;

//     // console.log(`value after offer = ${items[i]}`);
//     i++;


// }

// /////      Chapter 05 :  Function & Methods    //////


               /// W3Resourse Question  ////

//  Q1 :  Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// ANS:

// const currentTime = ()=>{
//     let newDate = new Date();
 
// let day = newDate.getDay();

// let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


// let hour = newDate.getHours();
// let minute = newDate.getMinutes();
// let second = newDate.getSeconds();

// const perpand = (hour >= 12 ) ? "PM" : "AM";

// hour = (hour >= 12 ) ? hour - 12 : hour ;

// if (hour === 0 && perpand === 'PM')  {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         perpand = 'Noon' 
//     }
//     else {
//         hour = 12;
//         perpand= 'PM';
//     }
// }


// if (hour === 0 && perpand === 'AM')  {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         perpand = 'Midnight' 
//     }
//     else {
//         hour = 12;
//         perpand= 'AM';
//     }
// }

// console.log( daylist[day] + " : " + hour + perpand + " : " + minute + " : " + second);


// }
// currentTime();

// 2. Write a JavaScript program to print the current window contents. 

// ANS:

// const print = () => {
//     window.print();
// }

// 3. Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// ANS:

// const date = () => {
//     let currentDate = new Date();

// let dd = currentDate.getDate();

// let mm = currentDate.getMonth();

// let yyyy = currentDate.getFullYear();

// if(dd < 10) {
//     dd = "0" + dd; 
// }
// if(mm < 10) {
//     mm = "0" + mm; 
// }

// currentDate = mm + "-" + dd + "-" + yyyy;
// console.log(currentDate)
// currentDate = mm + "/" + dd + "/" + yyyy;
// console.log(currentDate)
// currentDate = dd + "-" + mm + "-" + yyyy;
// console.log(currentDate)
// currentDate = dd + "/" + mm + "/" + yyyy;
// console.log(currentDate)
// }
// date();


// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7

// ANS:

// const lengthOfTriangle = (side1, side2, side3) => {

// let side = ((side1 + side2 + side3) / 2);

// let area = Math.sqrt(side * ((side - side1) * (side - side2) * (side - side3)));
 
// console.log(area);

// }
// lengthOfTriangle(5,6,7);
 

// const test = (s,d,f,g) => {
//     console.log(s,d,f,g,);
    
// }
// test(1,4,5,5,);

// 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.  

// ANS:

function animateText() {

let text = document.getElementById('text');


setInterval(function () {
    text = text[text.lenght - 1] + text.substring(0, text.lenght - 1);
    textNode.data = text;
}, 100);
}














