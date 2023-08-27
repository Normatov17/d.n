// const blue = document.querySelectorAll("button");

// blue[0].addEventListener("click", () => {
//   // if (!blue[1].classList.contains("red")) {
//   //   blue[1].classList.toggle("red");
//   // } else {
//   // blue[1].classList.remove("red");
//   // }
//   blue[1].classList.toggle("red");
// });

//  Delegatsiya

// wrapper.addEventListener("click", (e) => {
//   if (e.target && e.target.classList.contains("blue")) {
//     console.log("click");
//   }
// });

// const btns = document.querySelectorAll("button");
// btns.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     console.log("clicked");
//   });
// });

const wrapper = document.querySelector(".btn-block");
const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);

wrapper.addEventListener("click", (e) => {
  if (e.target && e.target.tagName === "BUTTON") {
    console.log("Click our Button");
  }
});
