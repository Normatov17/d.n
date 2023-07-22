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
