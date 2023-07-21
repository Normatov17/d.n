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

// TODO OPP nima va ish qiladi
// const name = "Samar";
// const str = new String(name);
// console.log(name);
// console.log(str);
// console.dir(1, 2, 3);
// console.dir([1, 2, 3, 4, 56, 6]);

// const car = {
//   mator: "x",
//   color: "black",
// };

// const bwm = {
//   spped: 280,
// };
// const bmw = Object.create(car);

// // Object.setPrototypeOf(bmw, car);

// console.log(bmw);

// Amaliyot

// const seriesDB = {
//   count: 0,
//   series: {},
//   actors: {},
//   genres: [],
//   private: false,
//   start: () => {
//     seriesDB.count = +prompt("Nechta serial ko'rdingiz?", "");

//     while (
//       seriesDB.count == "" ||
//       seriesDB.count == null ||
//       isNaN(seriesDB.count)
//     ) {
//       seriesDB.count = +prompt("Nechta serial ko'rdingiz?", "");
//     }
//   },
//   rememberMySeries: function () {
//     for (let i = 0; i < 2; i++) {
//       const a = prompt("Oxirgi ko'rgan serialingiz?"),
//         b = prompt("Nechi baxo berasiz?");

//       if (a != null && b != null && a != "" && b != "") {
//         seriesDB.series[a] = b;
//         console.log("done");
//       } else {
//         console.log("error");
//         i--;
//       }
//     }
//   },
//   detectLevelSeries: function () {
//     if (seriesDB.count < 5) {
//       console.log("Kam serial ko’ripsiz");
//     } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
//       console.log("Siz classik tamoshabin ekansiz");
//     } else if (seriesDB.count >= 10) {
//       console.log("Siz serialchi zvezda ekansiz");
//     } else {
//       console.log("Error");
//     }
//   },
//   showDb: function () {
//     if (!seriesDB.private) {
//       console.log(seriesDB);
//     }
//   },
//   visibleDB: function () {
//     if (seriesDB.private) {
//       seriesDB.private = false;
//     } else {
//       seriesDB.private = true;
//     }
//   },
//   writeGenres: function () {
//     for (let i = 0; i < 3; i++) {
//       const genre = prompt(`Yaxshi ko'rgan janringiz ${i + 1}`, "");
//       if (genre === "" || genre === null) {
//         console.log("Siz notog'ri ma'lumot kiritdingiz");
//         i--;
//       } else {
//         seriesDB.genres[i] = genre;
//       }
//     }

//     let genres = prompt(
//       "Yaxshi ko'rgan janringizni vergul yordamida yozing"
//     ).toLowerCase();

//     if (genres === "" || genres === null) {
//       console.log("Siz notog'ri ma'lumot kiritdingiz");
//       i--;
//     } else {
//       seriesDB.genres = genres.split(", ");
//       seriesDB.genres.sort();
//     }

//     seriesDB.genres.forEach((item, idx) => {
//       console.log(`Yaxshi ko’rgan janringiz ${idx + 1} - nomi ${item}`);
//     });
//   },
// };

// seriesDB.start();
// seriesDB.rememberMySeries();

// Dnyamic typing

// const circleWrapper = document.querySelector(".circle__wrapper");
// const box = document.querySelector(".box");
// const buttons = document.querySelectorAll("button");
// const hearts = document.querySelectorAll(".heart");
// const circle = document.querySelectorAll(".circle");
// box.style.background = "red";
// box.style.borderRadius = "100px";
// buttons.forEach((button) => {
//   button.style.background = "black";
// });
// buttons[2].style.background = "green";

// box.style.cssText = "color: red; width: 440px; background: green";

// const btn = document.createElement("button");

// document.body.append(btn);

// const myCircule = document.createElement("div");
// myCircule.classList.add("circle");
// // circleWrapper.append(myCircule);
// // circleWrapper.after(myCircule);
// // circle[1].replaceWith(myCircule);
// circleWrapper.append(myCircule);
// myCircule.textContent = "E";
// circleWrapper.insertAdjacentHTML("afterbegin", "<pre>e</pre>");

// function boX(call) {
//   box.addEventListener("mouseover", () => {
//     box.style.background = "red";
//   });
//   return call;
// }

// setTimeout(function () {
//   hearts.forEach((hears) => {
//     hears.style.cssText = "borderRadius: 0px; ";
//     hears.addEventListener("mouseover", function () {
//       hears.classList.toggle("open");
//     });
//   });
// }, 3000);

// boX(yurak);

// TODO Alamiyot

// xodisalar
// const btn = document.querySelector("#gfd");
// const overley = document.querySelector(".overley");

// btn.addEventListener("click", (e) => {
//   e.target.remove();
// alert("mouseover");
// });

// btn.addEventListener("click", () => {
//   alert("click");
// });

// let i = 0;

// const deleteElement = (e) => {
//   i++;

//   if (i === 3) {
//     btn.removeEventListener("click", deleteElement);
//   }
//   // e.target.remove();
//   console.log(i);
// };
// btn.addEventListener("click", deleteElement);
// overley.addEventListener("click", deleteElement);
// const link = document.querySelector("a");

// link.addEventListener("click", (e) => {
//   e.preventDefault();
//   alert("link");
// });

// TODO Navigatsuya DOM bo'yicha
// console.log(document.head);
// console.log(document.body);
//console.log(document.body.childNodes);

// function sayHello() {
//   console.log("Good Morning");
// }

// const arr = [23, 4, 1, 67, -3, 4, 4, 1];

// sayHello();
// sorted = arr.sort();
// function sorted(a, b) {
//   // debugger;
//   return a - b;
// }

// console.log(sorted);

// sayHello();

// const btns = document.querySelectorAll("button");

// // console.log(btn[0].classList.length);
// // btn[3].classList.add("blue");

// btns[2].style.cssText = "background: red;";

// if (btns[0].classList.contains("blue")) {
//   btns[0].classList.remove("blue");
// }

// btns[0].addEventListener("click", (e) => {
//   btns[1].classList.add("blue");
// });

// // DElagatsiya

// const wrapper = document.querySelector(".btn-block");
// wrapper.addEventListener("click", (e) => {
//   if (e.target && e.target.tagName == "BUTTON") {
//     // btns.forEach((item) => {
//     //   item.classList.toggle("blue");
//     // });
//     console.log("click");
//   }
// });

// const btn = document.createElement("button");
// btn.classList.add("blue");
// wrapper.append(btn);

// setTimeOut setinterval animation
// const btn = document.querySelector("#btn");

// // clearInterval(timerId);
// let timerId;
// let i = 0;

function myAnimation() {
  const car = document.querySelector(".car");
  let pos = 0;

  const timerInt = setInterval(frem, 4);
  function frem() {
    if (pos === 700) {
      clearInterval(timerInt);
    } else {
      pos++;
      car.style.left = pos + "px";
    }
  }
}

btn.addEventListener("click", (e) => {
  myAnimation();
});

// const car = {
//   airbag: true,
// };

// const gm = {
//   color: "red",
// };

// gm.__proto__ = car;
// console.log(gm);

// Data bn ishlash soat kun vaqt yil
// const now = new Date();
// const soat = now.getHours();
// console.log(now.setHours(18));
// console.log(now);

// Window document

//
function Car(name, color, speed) {
  this.name = name;
  this.color = color;
  this.speed = speed;
  this.airbag = true;
  this.sp = function () {
    console.log(`Speed of car ${this.name} is ${this.speed}ks/s`);
  };
}

Car.prototype.sayHello = function (name) {
  console.log(`Car name of ${this.name} sayHello`);
};

const bmw = new Car("BMW", "Black", 280);
const mers = new Car("Mers", "red", 280);
const gm = new Car("GM", "White", 180);

console.log(mers);
mers.sp();

mers.sayHello();

console.log(this.window);
console.log(new Date());
