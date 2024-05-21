///          youtube exercise practice      ///
/////      chapter 1 : variable & data type     ///////

// Question 1 
// create a const object called "product" to store information ? 
// ANS :

const product = {
    title: "ball pen",
    rating: 4,
    offer: 5 ,
    price: 270,

};
console.log(product);




/////      Chapter 04 :  array    //////
// Q 01:
// For a given array with mark of student -> [85,97,44,37,76,60] find the average marks od the entire class.

// Ans:

let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;

for (let val of marks) {
    sum += val;

}
let avg = sum / marks.length;
// console.log(`avg marks in this class= ${avg}`);

// Q 02:
// For a given array with price of 5 items -> [250,645,300,900,50] all items have an offer of 10% OFF on them . change the array to dtore final price after appling offer.

// Ans: 

let items = [250, 645, 300, 900, 50];

let i = 0;

for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer
    break

}

// console.log(items);

for (let val of items) {

    let offer = val / 10;

    items[i] = items[i] - offer;

    // console.log(`value after offer = ${items[i]}`);
    i++;


}

/////      Chapter 05 :  Function & Methods    //////











