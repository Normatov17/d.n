"use strict";

// TODO JavaScript nima ?
// JavaScript nima?

/* JavaScript bu bizning dasturimizni dnyamik tarzda o'zgartib beradigon objectga yo'naltirilgan dasturlash titli */

/* Js file 2 xil usulda uslashimiz mumkin bular:

 <script>
      alert("Hello JS")
    </script>

<script src="./replace.js"></script> */

// TODO Variables - o'zgaruvchilar
// variables - o'zgaruvchilar
// qiymat bu eng kichik ma'lumot yoki ma'lumot bo'lagiga aytamiz

// 3xil usulda e'lon qilish mumkin
// 1. var
// 2. let
// 3. const

/* o'zgaruvchi deb o'zida ma'lumot saqlaydigon containerga aytiladi o'zgaruvchiga saqlangan ma'lumot kompuyter xostirasida saqlanadi.

 let bilan const farqi bitta let o'zgaruvchan bo'ladi const esa o'zgaruvchan bo'ladi faqat object array function saqlagan bolsa o'zgatirsa bo'ladi, varham let bilan birxil ishlaydi faqat varda bir qancha muommolar bor masalan var scopeni ko'rmaydi va eski dasturchilar bundan foydalanmaydi.  Keyin o'zgaruvchini nomi biz berayotgan narsaga bog'liq bolishi kerak o'zgaruvchi oldiga raqam @ qo'yib bolmaydi va joy tahab va js o'zida bor nomlar berib bolmaydi iloji boricha calemCase tartibida yozish kerak.
 var bilan e'lon qilingan vaqiables doim ishlab turgan bo'ladi. */

// const user = {
//   fristName: "Davlatbek",
//   lastName: "Normatov",
//   job: "Programmer",
//   age: 19,
// };

// const userCopy = { ...user };
// userCopy.job = "Frontend Dev";
// console.log(userCopy.job);

/* shunga o'xshash xolatda constni o'zgartirishimiz mumkin*/

// TODO Qa'tiy rejim "use strict"
/* Qa'tiy rejim bu masalan siz biror bir companyada ishlasangiz sizning menejjeringiz bo'ladi sizni doim kuzatib turadigon agar siz companyada ishlamasangiz menejjerham yo'q dasturchilar buniham yo'lini topishgan yani "use strict" kodlarimizni tekshirib turadi agar xato yossak srazi ko'rsatadi bu odattda js fileni eng tepasiga yoqib qo'yiladi yani barcha code lar qa'tiy rejimda ishlashi uchun bunga misol mana. */

// age = 19;
// console.log(age);

// TODO Data Types - Ma'lumot turlari
/* JavaScriptda Data types 2ta turga guruxga bo'linadi bular Primitive va object yoki referens type deb nomlasak bo'ladi. 

1. String - "" shu qo'shtirnoqni ichiga yoziladi
2. Number - raqam  buni ichiga yozilgan raqam 9ning 52 darajasini ko'tara olmaydi 
3. Bigint - 9 ning 52 darajasidan katta sonlar uchun
4. Boolean - to'gri || noto'g'ri truu || false
5. Undefined - o'zgaruvchi bor lekin ma'lumot yo'q
6. Null - bunday ma'lumot umuman yo'q 
7. Symbol - object bilan birga ishlaydi yangi qo'shilgan
8. Object - object. 

--Ptimitive qiymat to'gridan to'g'ri variables murojat qiladigon joyda joylashadi
1.Number = sonlarni o'zida saqlovchi data type 
const = num = 19;
consol.log(num)
NaN = Not a Number  - 2ta ma'lumot turini bir birga notogri qo'shsak kelib chiqadi
infinity  - matematikada da yo'q yani to'g'ri kelmaydigon narsa qilsak kelib chiqadi
-infinity
2.string = U o'zida belgilar ketma ketligini saqlaydi "" shuni ichiga yoziladi
const fristName = "Ali"
consol.log(fristName)
3.boolean = true yoki false mantiqiy data type bolib faqat (rost) toki (yolg'on) qaytaradi 
4.undefined = xali aniqlanmagan data type variables bor lekin uni qiymati yo'q
5.null = bo'sh qiymatga ega bo'lgan data type 0ga teng yani yo'q variablesni ishlatsak 
6.symbol  = yagona (unique) va o'zgarmas qiymatga ega bo'luvchi data type
7.bigint = katta sonlarni saqlash uchun 9ning 52drajasi


--object qiymat variables murojat qilgan manzilda ko'rsatilgan boshqa manzilda saqlanadi.
1. object = bir vaqtning o'zida bir nechta data type larni saqlaydigon narsa object deyiladi bunga misol uchun siz biror narsa tariflab bermoqchi bo'lsangiz ishlatiladi

const Car = {
  carName: "BMW", 
  color: "black",
  year: 2023,
  homeland: "Germany",
  speed: 280,
  airBag: true,
};

console.log(Car);

bu object ni ichidah=gilarni olishni 2ta yo'li bor 1:) Car.carName yani anashu object qilgan nomimizni yozib nuqtani bossak o'zi chiqarib beradi 2:) Car["carName"]  shu tarzda yozamiz
1:) yo'li  =  console.log(Car.carName)
2:) yo'li  =  console.log(Car["carName"])

biz ko'proq 1chi yo'lidan foydalanamiz


2. Array = Object bilan birxil yani bratishkasi desakham bo'ladi 🤣 array nima qiladi desak array - bu bir nechta qiymatga ega bo'lishi mumkin bo'lgan maxsus o'zgaruvchi:

Array bu data type emas bu shunchaki objectning bir qismi yani 15takam object

const cars = ["bmw", "mers", "haval", "hunday", "gm"];
console.log(cars.indexOf("mers"));

3. function()
*/
// TODO Foydalanuvchi bilan oddiy muloqat
// console.log();  ==  bu bizga code larimizni tez ko'rish uchun consol ga chiqarib beradi biz uni qanday ishlayotgani ko'rish uchun juda qulay
// alert("Hello JavaScript")  == Bizga qandaydir malumotni ekranga chiqarib berish uchun xizmat qiladi.
// const place = confirm("Are you here?");
// console.log(place);

// if (place === true) {
//   prompt("Unday bo'lsa tanishaylik", "");
// } else {
//   alert("X 🐾");
// }
//  confirm() = =  bizga true yoki false qaytaradi
// const currentPlace = prompt("Sen xozir qayerdasan", "Uyda"); ===   savol berib javob olishimiz     mumkin
// console.dir();  ==

// TODO Interpolatsiya  ${} <= shu interpolatsiya deyiladi pasta qanday ishlatilishi ko'rsatilgan
// ``  <= buning nomi backsik
// const channel = prompt("What's your favorite youtube");
// console.log(`https://www.youtube.com/${channel}/vidoes`);

// TODO Operatorlar
/* 
+ = qo'shish
- = ayrish
* ko'paytrish
/ = bo'lish
% = qoldiqli bo'lish
++ = incremed
-- = decremed
** darajaga ko'tarish
&& va qayeridadir false bo'lsa oxirgi javob false ga o'zgaradi
|| yoki qayeridaddir true bo'lsa oxirgi javob true ga o'zgaradi
! = flase ni true qiladi treuni false qiladi yani teskarisiga

*/

// TODO Github bilan ishlash
/*  git init = git compuyterga o'rnatish
  git add . = hamma file hammasini add qilish
  git commit -m "" = git commit qilish comentariya yozish
  git  push = push qilish
  git  clone =  link orqali yuklab olish
  git pull clondan olingan reponi qo'shib qo'yish */

// TODO Amaliyot, Uyga vazifa

/* const numberOfSeries = +prompt("Nechta Kino Ko'rdingiz", "");

 const seresDB = {
   count: numberOfSeries,
   series: {},
   actors: {},
   genres: [],
   privat: false,
 };

 const a = prompt("Oxirgi Ko'rgan serialingiz");
 const b = prompt("Necha baxo qo'yasiz");
 const c = prompt("Oxirgi Ko'rgan serialingiz");
 const d = prompt("Necha baxo qo'yasiz");

 seresDB.series[a] = b;
 seresDB.series[c] = d;
 console.log(seresDB); */

// TODO Shartli operatorlar  || if else, switch,

/* if (reques > 50) {
   console.log("Ota film");
 } else if (reques < 30) {
   console.log("Boevik");
 } */

/* Bizda terny operator bor bu faqat
const reques = +prompt("Yoshingiz nechida");
reques > 3 ? console.log("hello") : console.log("bybye");
shu xolatda ishlaydi bu yerda ko'rishingiz mumkin
? if bajaradi
: else ni bajaradi 
terny operator faqat if else nin qiladi agar bizda if else yana else if bolsa qila olmaydi
 */

/* switch case

 const day = "mondey";
 switch (day) {
   case "mondey":
     console.log("Bugun dushanba");
     break;
   case "sunday":
     console.log("Bugun shanba");
     break;
   default:
     console.log("Bugun bozor");
 } */
/* switch case faqat bitta narsani tenglashtradi agar biz harxil narsani xarxil narsaga tenglasak if else maqulroq yaxhiroq boladi. */

// TODO Tsilk  for, while do while
/* Bitta code ni 3 4 marotaba ishlatib beradi yani biz buuyruq bersak shuncha ishalasin deb shuncha vaqt ishlaydi. */
/* let num = 0;
 let i = 0;
 while (i <= 100) {
   console.log(num++);
   i++;
 }

 let hello = "Hello";
 let i = 0;
 while (i <= 100) {
   console.log(hello);
   i++;
 } */

/* Tsikllar 3 xil boladi*/

// TODO Amaliyot, Uyga vazifa Tsikl
// const numberOfSeries = +prompt("Nechta Kino Ko'rdingiz", "");

// const seresDB = {
//   count: numberOfSeries,
//   series: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// for (let i = 0; i < 2; i++) {
//   const a = prompt("Oxirgi Ko'rgan serialingiz");
//   const b = prompt("Necha baxo qo'yasiz");

//   if (a != null && b != null && a != "" && b != "") {
//     seresDB.series[a] = b;
//   } else {
//     i--;
//   }
// }

// if (seresDB.count < 5) {
//   console.log("Siz juda kam kino ko'rarekansiz");
// } else if (seresDB.count > 5 && seresDB.count < 10) {
//   console.log("Siz classic tomashabin ekansiz");
// } else if (seresDB.count > 10) {
//   console.log("Siz zvezda tomashanin ekansiz");
// }

// console.log(seresDB);

// TODO Function ES6
/*
Functionni 3 xil usulda e'lon qilish mumkin 
Function decloration
Function expression
Arrow Function



function calculator(a, b) {
  console.log(a + b);
}

calculator(2, 3);
calculator(7, 9);
calculator(2, 10);

function name(name, lastName, job = "programmist") {
  console.log(`Mening ismim ${name} familyam ${lastName} men ${job}man`);
}

name("Davlatbek", "Normatov");

const cacl = function () {
  console.log("Hello function expression");
};

cacl();

const arrow = () => {
  console.log("Hello arrow function");
};

arrow(); 
return degani bu bizga function to'xtatib functionni boshqa function ichida ishlatishga yordam beradi bu return qilgandan so'ng biz bu qauygan function ni bironta o'zgaruvchiga tenglab olishimiz kerak.

*/

// TODO Amaliyot, Uyga vazifa

/* let numberOfSeries;

 function startApp() {
   numberOfSeries = +prompt("Nechta Kino Ko'rdingiz", "");

   while (
     numberOfSeries == "" ||
     numberOfSeries == null ||
     isNaN(numberOfSeries)
   ) {
     numberOfSeries = +prompt("Nechta Kino Ko'rdingiz", "");
   }
 }
 startApp();

 const seresDB = {
   count: numberOfSeries,
   series: {},
   actors: {},
   genres: [],
   privat: false,
 };

 function rememberMySeries() {
   for (let i = 0; i < 2; i++) {
     const a = prompt("Oxirgi Ko'rgan serialingiz");
     const b = prompt("Necha baxo qo'yasiz");

     if (a != null && b != null && a != "" && b != "") {
       seresDB.series[a] = b;
       console.log("Done");
     } else {
       console.error("erro #%d", code);
       i--;
     }
   }
 }

 rememberMySeries();

 function detectLevelSeries() {
   if (seresDB.count < 5) {
     console.log("Siz juda kam kino ko'rarekansiz");
   } else if (seresDB.count > 5 || seresDB.count < 10) {
     console.log("Siz classic tomashabin ekansiz");
   } else if (seresDB.count > 10) {
     console.log("Siz zvezda tomashanin ekansiz");
   }
 }

 detectLevelSeries();

 function showDb() {
   if (!seresDB.privat) {
     console.log(seresDB);
   }
 }

 showDb();
 function writeGanres() {
   for (let i = 0; i <= 2; i++) {
     const ganre = prompt(`Yaxshi ko'rgan janringiz ${i + 1}`);

     seresDB.genres.push(ganre);
   }
 }

 writeGanres();
 */

// TODO Callback Fuction
/* callback function deb chaqirilayotgan functioni argumentiga function berib yuborishlikka aytiladi.

const myFunction = (CallbackFunction) => {
  let num = 50;
  CallbackFunction(num);
};

myFunction(function (value) {
  console.log(value + 49);
}); 
---------------------------------------------------

function edu(subject, callback) {
  setTimeout(() => {
    console.log("Hello 1");
    callback();
  }, 2000);
}

edu("teacher", function () {
  console.log("2");
});
--------------------------------------------------------------------------------------
Xudi shu usulda ishladi

function frist(fristName, job, call) {
  setTimeout(() => {
    console.log(`Salom mening ismim ${fristName} men ${job}`);
    call();
  }, 3000);
}

function second() {
  console.log("Salom men cleintman");
}

frist("Davlatbek", "programerr", second);


---------------------------------------------------------------------------------------------
let salom = "Salom";
function hel(call) {
  setTimeout(() => {
    for (let i = 0; i < 100; i++) {
      console.log(salom + [i]);
    }
    call();
  }, 3000);
}

function kut() {
  console.log("100 Salom");
}

hel(kut);
*/

// TODO Object. Destruptizatsiya
/* JavaScript Object - bir necht ma'lumot turlarini saqlashga imkon beradigon ma'lumot turli (data-type)  deyiladi. 

const theif = {
  jacket: "black",
  heigth: 1.79,
  colors: {
    hair: "gray",
    style: "curley",
  },
};

console.log(theif);
delete theif.colors.hair;
console.log(theif);




-- object methods
Object.keys()  = objectni ichidagi kalit so'zlarni qaytaradi
Object.valeu() = object ichidagi qiymatini qaytaradi
Object.entries() = object ichidagi har bir qatorni arrayga solib beradi 
delete  = o'chish uchun ishlatiladi bu tartibda => delete theif.colors


for in degan method interatsiya = tsikl

const theif = {
  jacket: "black",
  heigth: 1.79,
  colors: {
    hair: "gray",
    style: "curley",
  },
};

for (let key in theif) {
  if (typeof theif[key] === "object") {
    for (let i in theif[key]) {
      console.log(`Property ${i} has value ${theif[key][i]}`);
    }
  } else {
    console.log(`Property ${key} has value ${theif[key]}`);
  }
}

*/

/*
Array massivlar
Massiv bir nechta qiymatlarni o'z ichiga olishi mumkin bo'lgan maxsus o'zgaruvchidir:
const cars = ["Saab", "Volvo", "BMW"];


*/
const funSec = function () {
  console.log("Hello World");
};

funSec();
