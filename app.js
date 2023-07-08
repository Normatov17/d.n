// "use strict";

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

// Function Declarations vs. Expressions and Arrow Function

// function decloretion
// function expretion
// arrow function

// function salom(name, kun = "tun") {
//   const des = `Salom ${name} xayrli ${kun}`;
//   return des;
// }

// const aww = salom();

// const as = function (aww) {
//   const asd = `${aww}`;
// };

// const alsi = as();
// console.log(alsi);

// function turlari
// function decloretion
//  function expretion
// arror function

// const calcArea = function (radius) {
//   const area = 1 * radius ** 2;
//   return area;
// };

// const a = calcArea(10);
// console.log(a);

// const calcVal = function (qiymat) {
//   const qiymat1 = 1 * qiymat ** a;
//   return qiymat1;
// };

// const calcValResoult = calcVal(11);
// console.log(calcValResoult);

// arrow function

// const bill = (product, tax) => {
//   let total = 0;
//   for (let i = 0; i < product.length; i++) {
//     total += product[i] + product[i] * tax;
//   }
//   return total;
// };

// const resoult = bill([10, 23, 323, 12], 0.2);
// console.log(resoult);

// const ism = prompt("Ismizngni kiriting");
// const yosh = prompt("Tug'ilgan yilingizni kiriting");

// const ismFunction = function (ism, yosh) {
//   const ageVal = 2023 - yosh;
//   const ageName = `Salom "${ism.toUpperCase()}" siz ${ageVal} kiribsiz tabriklayman`;
//   return ageName;
// };

// const resoult = ismFunction(ism, yosh);
// alert(resoult);

function calcAge(brithYaer, fristName) {
  const age = 2023 - brithYaer;
  console.log(`Siz ${age} yoshga kirdingiz ${fristName}`);
}

calcAge(2004, "Akbarjon");
