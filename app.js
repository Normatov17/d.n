"use strict";

// const { doc } = require("prettier");

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
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// // TEst 1
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphis, avgKoalas) {
//   if (avgDolphis >= 2 * avgKoalas) {
//     console.log(`Dolphis win 🏆 (${avgDolphis} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphis) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphis})`);
//   } else {
//     console.log("No Team wins...");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// // Array ---------------------------------------------
// const hello = ["Salom", "Hello", "Privet"];
// console.log(hello);
// hello.push("salom");
// console.log(hello);
// hello.pop("Privet");

// console.log(hello);

// // Array methods

// // concat()
// const hello2 = ["olma", "gilos", "behi"];
// const resoult = hello.concat(hello2);
// console.log(resoult);

// const mapValues = (number) => "Son :" + number;
// const mappedValus = resoult.map(mapValues);
// mappedValus.sort();
// console.log(mappedValus);

// hello.sort();
// console.log(hello);

// const friends = ["Steven", "Jonas", "Micheil"];

// Coding challange #

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = bills + tips;
// console.log(bills, tips, totals);

// Object  ---------------------------------------------------------------------------------------------------
// const dasturchi = {
//   familya: "Normatov",
//   ism: "Davlatbek",
//   age: 19,
//   location: "Russia",
//   language: ["uzbek", "kirgiz", "rus"],
//   speek() {
//     setTimeout(function () {
//       alert(dasturchi.location);
//     }, 3000);
//   },
//   family: {
//     Father: "Dilshodbek",
//     Mather: "Nigora",
//     Brather: "Do'stmuhammad",
//     greet() {
//       console.log("My family");
//     },
//   },
// };

// console.log(dasturchi);

// const user = {
//   age: 19,
//   name: "Ali",
//   salomlash: function () {
//     alert("Hello World");
//   },
// };

// user.salomlash();
// console.log(Object.keys(dasturchi));

// const user = {
//   name: "Davlatbek",
//   lastName: "Normatov",
//   age: 19,
//   job: "Web Devoloper",
//   login: function () {
//     console.log(
//       `Salom mening ismin ${this.name} familyam ${this.lastName}, men ${this.age} yoshdaman, men ${this.job}`
//     );
//   },

//   lang: ["uzbek", "russia", "english"],
//   speek: function () {
//     console.log("I can speek");
//     this.lang.forEach((lan) => {
//       //   console.log(`Men ${lan} tilini bilaman`);
//       console.log(lan);
//     });
//   },
// };

// setTimeout(() => {
//   user.login();
// }, 3000);
// user.speek();

// const user = {
//   fristName: "Davlatbek",
//   lastName: "Normatov",
//   age: 19,
//   job: "Programmer",
//   location: "Uzbekistan",
//   langs: ["uzbek", "kirgiz", "russian", "english"],
//   myHobby: ["Footboll", "Code", "Reading"],
//   speek: function () {
//     console.log("I can Speeking");
//     this.langs.forEach((lang) => {
//       lang;
//     });
//   },
//   friends: ["Akbarjon", "Salimboy", "Akbarshox", "Asadbek", "Shoxjahon"],
// };

// user.instagram = "https://instagram.com";
// user.twitter = "https://twitter.com";
// console.log(user);
// const interest = prompt(
//   "What do you want to know about Davlatbek ? Choose between fristName, LastName, age, job, and friends"
// );

// // console.log(user);

// if (user[interest]) {
//   alert(user[interest]);
// } else {
//   alert("The requested information is incorrect");
// }

// console.log(
//   `Salom men do'stlarim ${user.friends.length} hozir ${user.friends[0]}`
// );

// Object methods
// const user = {
//   fristName: "Davlatbek",
//   lastName: "Normatov",
//   age: 19,
//   job: "Programmer",
//   brithYear: 2004,
//   location: "Uzbekistan",
//   langs: ["uzbek", "kirgiz", "russian", "english"],
//   myHobby: ["Footboll", "Code", "Reading"],
//   hasDrive: false,
//   speek: function () {
//     console.log("I can Speeking");
//     this.langs.forEach((lang) => {
//       lang;
//     });
//   },
//   calcAge: function () {
//     console.log(this);
//     this.age = 2023 - this.brithYear;
//     return this.age;
//   },
//   friends: ["Akbarjon", "Salimboy", "Akbarshox", "Asadbek", "Shoxjahon"],

//   getSummary: function () {
//     return `${user.fristName} is a ${user.calcAge()} old ${
//       user.job
//     } and he has ${this.hasDrive ? "a" : "no"}  driver's license`;
//   },
// };

// console.log(user.age);
// console.log(user.age);
// console.log(user.age);

// console.log(user.getSummary());

// Object Coding channalge
// const mark = {
//   fullName: "Mark Miller",
//   mass: 92,
//   heigth: 1.98,
//   calcBMI: function () {
//     this.bmi = this.mass / this.heigth ** 2;
//     return this.bmi;
//   },
// };

// const John = {
//   fullName: "John Smith",
//   mass: 92,
//   heigth: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.heigth ** 2;
//     return this.bmi;
//   },
// };
// mark.calcBMI();
// console.log(mark.bmi);
// John.calcBMI();
// console.log(John.bmi);

// if (mark.bmi > John.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${John.fullName}'s BMI (${John.bmi})`
//   );
// } else {
//   console.log(
//     `${John.fullName}'s BMI (${John.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
//   );
// }

// For Loop
// let sec = 0;
// for (let i = 0; i < 5; i++) {
//   sec += i;
// }

// console.log(sec);

// for (let i = 0; i <= 7; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }

// while   do while
// let sum = 0;
// // let i = 0;
// while (i < 10) {
//   console.log("Salom dunyo");
//   i++;
//   if (i === 3) {
//     break;
//   }
// }

// console.log(sum);

// do/while
// let i = 0;
// do {
//   console.log("Hello World!");
//   i++;
// } while (false);

// for (let i = 1; i <= 10; i++) {
//   console.log(`Hello ${i}`);
// }

// const jonas = [
//   "Jonas",
//   "Schedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Micheal", "Peter", "Steven"],
//   true,
// ];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i], typeof jonas[i]);

//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2001, 1992, 1980, 2020];
// const age = [];

// for (let i = 0; i < years.length; i++) {
//   console.log(years[i]);

//   age.push(2023 - years[i]);
// }

// console.log(age);

// const jonas = [
//   "Jonas",
//   "Schedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Micheal", "Peter", "Steven"],
//   true,
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end.....");
// }

// Coding challenge
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   // console.log(sum);
//   return sum / arr.length;
// };

// const resoult = calcAverage([2, 3, 4, 5, 6, 7]);
// console.log(resoult);
// const ae = 12;
// console.log("jsk");
// console.log();
// console.log();

// const arrow = x => {
//   console.log(x);
// };

// arrow("salom");

// TODO  Using Google, StackOverflow and MDN

// Debugging (Fixing Errors

// console.log(console);

// console.log("ehllo ");
// // //

// const measurKelin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: prompt("Degrees celcise:)"),
//   };
//   console.table(measurement);

//   // console.log(measurKelin.value);
//   // console.warn(measurKelin.value);
//   // console.error(measurKelin.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measurKelin());

// coding

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// // console.log(`... ${data1[0]} ...${data1[1]} ...${data1[2]}`);

// const print = function (arr) {
//   let str = "";

//   for (let i = 0; i < arr.length; i++) {
//     str = str + `${arr[i]} in days ${i + 1}`;
//   }

//   console.log(str);
// };

// print(data1);

// const heading = document.querySelector("h1");
// console.log(heading);

// //

// // heading.textContent = "From Zero to Export!";
// heading.innerHTML = `
//   <h3>From Zero to Export <span class='color:red'>!</span></h3>
// `;

// Dice Game
