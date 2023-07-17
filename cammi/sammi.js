"use strict";

// confirm("Sen shu yerdamisan");
// const age = +prompt("Yoshingni kirit", "18");
// console.log(age);

// const channel = prompt("Qaysi You Tubeni kuzatasiz?");
// channel.charAt().toUpperCase().slice(1).toLocaleLowerCase();
// console.log(`https://youtube.com/${channel}`);

//

// const age = +prompt("How old are you ?", "");

// if (age >= 18) {
//   alert("Welcome");
// } else {
//   alert("No entry");
// }

// Tsikl
// let num = 0;

// let i = 0;
// while (i < 18) {
//   console.log(num++);
//   i++;
//   if (i === 5) {
//     continue;
//   }
// }

// let a = 0;
// do {
//   console.log(`Hello World!`);
//   a++;
//   if (a === 5) {
//     continue;
//   }
// } while (a < 18);

// let num = 0;
// for (let i = 0; i < 19; i++) {
//   console.log(num++);
//   if (i === 8) {
//     continue;
//   }
// }

// let body = document.querySelector("body");
// body.addEventListener("mousemove", function (e) {
//   let x = e.clientX;
//   let y = e.clientY;
//   body.style.backgroundPositionX = x - 350 + "px";
//   body.style.backgroundPositionY = y - 350 + "px";
// });

// // Amaliymashq #1
// const numberOfSeries = +prompt("Nechta Serial Ko'rdingiz", "");

// const seriesDB = {
//   count: numberOfSeries,
//   series: {},
//   actors: [],
//   genres: [],
//   privat: false,
// };

// let i = 0;
// while (i < 2) {
//   const a = prompt("Oxirgi ko'rgan serialingiz?");
//   const b = prompt("Necha baxo berasiz?");
//   if (a != null && b != null && a != "" && b != "") {
//     seriesDB.series[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--;
//   }

//   i++;
// }

// if (seriesDB.count < 5) {
//   console.log("Kam Serial ko'ribsiz");
// } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
//   console.log("Siz klassik tomashabin ekansiz");
// } else if (seriesDB.count >= 10) {
//   console.log("Siz serialchi zvezda ekansiz");
// } else {
//   console.error("Error");
// }

// Funksiyalar

// // Amaliyot Amaliy Mashq
// let numberOfSeries;

// function startApp() {
//   numberOfSeries = +prompt("Nechta Serial Ko'rdingiz", "");

//   while (
//     numberOfSeries == "" ||
//     numberOfSeries == null ||
//     isNaN(numberOfSeries)
//   ) {
//     numberOfSeries = +prompt("Nechta Serial Ko'rdingiz", "");
//   }
// }

// startApp();
// const seriesDB = {
//   count: numberOfSeries,
//   series: {},
//   actors: [],
//   genres: [],
//   privat: false,
// };

// for (let i = 0; i < 2; i++) {
//   const a = prompt("Oxirgi ko'rgan serialingiz?");
//   const b = prompt("Necha baxo berasiz?");
//   if (a != null && b != null && a != "" && b != "") {
//     seriesDB.series[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--;
//   }
// }

// if (seriesDB.count < 5) {
//   console.log("Kam Serial ko'ribsiz");
// } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
//   console.log("Siz klassik tomashabin ekansiz");
// } else if (seriesDB.count >= 10) {
//   console.log("Siz serialchi zvezda ekansiz");
// } else {
//   // console.error("Error");
// }

// function showDb() {
//   if (seriesDB.privat === seriesDB.privat) {
//     console.log(seriesDB);
//   } else {
//     console.log("Aksincha");
//   }
// }

// showDb();

// function writeGenres(janr) {
//   for (let i = 0; i <= 2; i++) {
//     seriesDB.genres[i] = prompt(`Yaxshi ko'rgan janringiz ${i + 1}`);
//   }
// }

// writeGenres();

//Calback
// function edu(sumject, callback) {
//   console.log(`I wanna teach ${sumject}`);
//   callback();
// }

// edu("Ingliz tile", function () {
//   console.log(`That's great`);
// });

// function frist(call) {
//   setTimeout(() => {
//     console.log(1);
//     call();
//   }, 1000);
// }

// function second() {
//   console.log(2);
// }

// frist(second);

// Object
// const theif = {
//   jacket: "black",
//   height: "1.70",
//   colors: {
//     hair: "gray",
//     style: "curley",
//   },
//   howOut: function () {
//     console.log(`Fast with help doors🚪`);
//   },
// };

// const { hair, style } = theif.colors;
// console.log(hair);
// console.log(style);

// theif.howOut();

// console.log(theif);

// delete theif.jacket;

// console.log(Object.keys(theif));
// console.log(Object.values(theif));

// for (let key in theif) {
//   if (theif[key] === "object") {
//     for (let i in theif[key]) {
//       console.log(theif[key][i]);
//     }
//   } else {
//     console.log(key);
//   }
// }

// Amaliyot

// const user = {
//   fristName: "Davlatbek",
//   lastName: "Normatov",
//   age: 19,
//   languages: ["uzbek", "russian", "english", "kirgiz"],
//   location: "Uzbekistan, Andijan",
//   speek: function () {
//     this.languages.forEach((leng) => {
//       console.log(`I'am speeking ${leng}`);
//     });
//   },
// };

// const { fristName, lastName } = user;
// console.log(fristName);
// console.log(lastName);
// user.speek();

//  TODO Masszivlar

// const arr = [1, 12, 73, 14, 35, 26, 17, 8, 9];
// arr.sort((a, b) => a - b);
// console.log(arr);
// delete arr[1];
// console.log(arr);
// arr.push(10);
// console.log(arr);
// arr.unshift(0);
// console.log(arr);
// arr.shift();
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let values of arr) {
//   console.log(values);
// }

// arr.forEach((item, i) => {
//   console.log(`${i}: ${item}`);
// });

// const movies = prompt("What's your favourite movies!", "");
// const userMovie = movies.split(", ");
// userMovie.sort();
// console.log(userMovie.join("- "));

// Clonlash ES6 -- Copy
// const x = 5;
// const y = x;
// console.log(y);
// console.log(x);

// const user = {
//   fristName: "Davlatbek",
//   lastName: "Normatov",
//   age: 19,
//   languages: ["uzbek", "russian", "english", "kirgiz"],
//   location: "Uzbekistan, Andijan",
//   job: "Progammer",
//   speek: function () {
//     this.languages.forEach((leng) => {
//       console.log(`I'am speeking ${leng}`);
//     });
//   },
// };

// const user2 = { ...user };
// console.log(user2);

// function copy(user) {
//   console.log(
//     `Mening ismin ${user.fristName} familyam ${user.lastName} yoshim ${user.age} va men ${user.job}man`
//   );
// }

// copy(user);

// function nusxaObj(obj) {
//   let ObjNusxa = {};

//   for (let key in obj) {
//     ObjNusxa[key] = obj[key];
//   }

//   return ObjNusxa;
// }

// const number = {
//   x: 10,
//   y: 5,
//   z: {
//     a: 1,
//     b: 2,
//   },
// };
// const newNumber = nusxaObj(number);
// newNumber.x = 20;
// console.log(newNumber);
// console.log(number);

// const nusax = Object.assign({}, number);
// nusax.x = 99;
// console.log(nusax);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const numbers = arr.slice();
// console.log(numbers);

//
// const Liverpool = ["Salah", "Mene"];
// const ManCity = ["Mahrez", "Foden"];

// const maxPlayer = [...Liverpool, ...ManCity];
// console.log(maxPlayer);

// spread = operator
// const calc = [1, 3, 6];
// function logger(x, y, z) {
//   console.log(x * y * z);
// }

// logger(...calc);
