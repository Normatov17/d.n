document.addEventListener("DOMContentLoaded", (e) => {
  alert("Hello");

  const box = document.querySelector("#box");
  const buttons = document.querySelectorAll("button");
  const open = document.querySelector(".open");

  buttons.forEach((button) => {
    // button.style.cssText = "marginTop: 20px; color: red; background: blue";
    button.addEventListener("mouseover", (e) => {
      button.classList.toggle("open");
      button.scrollTop = "100px".fixed();
    });
  });

  // box.style.margin = "20px";
});
