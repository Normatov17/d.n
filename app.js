// "use strict";

// const { func } = require("prop-types");

// let js = "JavaScript";

// if (js === "JavaScript") {
//   alert("Hello Word!");
// } else {
//   alert("Bye Bye Word!");
// }

// ism = "d";
// console.log(ism);

// let ism = "Davlatbek";
// let familya = "Normatov";
// const yosh = 19;

// const fullName = ism + " " + familya + " " + yosh;

// console.log(fullName);

// const fullName2 = ism.concat(familya).concat(yosh);
// console.log(fullName);

// let fristName = "Davlatbek";
// console.log(fristName);

// // var let and conct
// var ism = "DAVLATBEK";
// ism = "DN";
// console.log(ism);

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 95;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn;
// console.log(BMIJohn, BMIMark);

// console.time();
// const name = "Davlatbek";
// const job = "Devoloper";
// const ful = `${name} ${job}`;
// console.log(ful);

// console.log("22" - "12");
// console.timeEnd();

// Equality Operators

// const ism = prompt();

// if (ism === "Davlatbek") {
//   alert("Qalesiz endi");
// }

// . The switch Statemen

// const day = "manday";

// switch (day) {
//   case "manday":
//     console.log("monday");
//     break;
//   case "thuday":
//     console.log("1");
//   default:
//     console.log("123");
// }

// Statements and Expressions  -- -  - -- -    Bayonotlar va ifodalar

// The Conditional (Ternary) Operato  ----  Shartli (uchlik) operator
// const age = 12;
// const drink = 18 >= age ? "wine" : "cole";

// console.log(drink);

// CHALLENGE #4: Video Solution
// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`${bill} Hello ${tip}`);

// 30 - dars tugadi

// Functions
// function helle() {
//   console.log("Hello Function");
// }
// helle();

// for (let i = 0; i < 100; i++) {
//   helle();
// }

// function fruik(apple, banana) {
//   console.log(apple, banana);
//   const juice = `Aplple ${apple} and Banana ${banana}`;
//   return juice;
// }

// const resoult = fruik(1, 3);
// console.log(resoult);

// function cutFruitPreis(fruit) {
//   const meva = fruit * 4;
//   return meva;
// }

// function fruitProsser(apple, banana, kivi) {
//   const aplleProsser = cutFruitPreis(apple);
//   const bananaProsser = cutFruitPreis(banana);
//   const kiveProsser = cutFruitPreis(kivi);

//   const juice = `Juice with ${aplleProsser} apple and ${bananaProsser} banana and ${kiveProsser} Kive.`;
//   return juice;
// }

// const resoult = fruitProsser(12, 34, 11);
// alert(resoult);

// function hela(non, yog, sut) {
//   const sutT = cutFruitPreis(sut);
//   const yoyG = cutFruitPreis(yog);
//   const nonN = cutFruitPreis(non);

//   const juice = `Juice with ${non} NON and ${yog} YOG' and ${sut} SUT.`;
//   return juice;
// }

// const resoult2 = hela(2, 4, 12);
// console.log(resoult2);

// Coding challange
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// TEst 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphis, avgKoalas) {
  if (avgDolphis >= 2 * avgKoalas) {
    console.log(`Dolphis win 🏆 (${avgDolphis} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphis) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphis})`);
  } else {
    console.log("No Team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);
