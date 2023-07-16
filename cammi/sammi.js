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
let numberOfSeries;

function startApp() {
  numberOfSeries = +prompt("Nechta Serial Ko'rdingiz", "");
}

startApp();
const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: [],
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Oxirgi ko'rgan serialingiz?");
  const b = prompt("Necha baxo berasiz?");
  if (a != null && b != null && a != "" && b != "") {
    seriesDB.series[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}

if (seriesDB.count < 5) {
  console.log("Kam Serial ko'ribsiz");
} else if (seriesDB.count >= 5 && seriesDB.count < 10) {
  console.log("Siz klassik tomashabin ekansiz");
} else if (seriesDB.count >= 10) {
  console.log("Siz serialchi zvezda ekansiz");
} else {
  console.error("Error");
}

console.log(seriesDB);
