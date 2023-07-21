"use strict";

// TODO Call, Apply, && Bind

//Bind()
const button = document.querySelector("button");
button.addEventListener("click", function () {
  this.style.width = "100%";
  this.style.textAlign = "center";
  this.style.padding = "10px ";
  this.style.fontSize = "30px ";
});

const obj = {
  x: 10,
  y: 12,
  sum: function () {
    const logger = () => {
      console.log(this);
    };

    logger();
  },
};

obj.sum();
