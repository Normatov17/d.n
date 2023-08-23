// document.addEventListener("DOMContentLoaded", (e) => {
//   // alert("Hello");

//   const box = document.querySelector("#box");
//   const buttons = document.querySelectorAll("button");
//   const open = document.querySelector(".open");
//   const crculWrapper = document.querySelector(".circle__wrapper");
//   const cri = document.querySelectorAll(".circle");

//   buttons.forEach((button) => {
//     // button.style.cssText = "marginTop: 20px; color: red; background: blue";
//     button.addEventListener("mouseover", (e) => {
//       button.classList.toggle("open");
//       button.scrollTop = "100px".fixed();
//     });
//   });

//   const butt = document.createElement("div");
//   crculWrapper.append(butt);
//   butt.classList.add("circle");
//   cri[0].replaceWith(butt);
//   butt.innerHTML = `<b>0</b>`;
//   // box.style.margin = "20px";
// });

const link = document.querySelector(".link");
// link.addEventListener("click", (e) => {
//   e.target.remove();
// });

let i = 0;
const addElement = (evnt) => {
  i++;
  if (i === 10) {
    link.removeEventListener("click", addElement);
  }
  console.log(i);
};

link.addEventListener("click", addElement);

console.log(document.head);
console.log(document.body.childNodes);
