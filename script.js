/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
// const btn = document.querySelector("button"); // Get the button from the page
// // Detect clicks on the button
// if (btn) {
//   btn.onclick = function () {
//     // The JS works in conjunction with the 'dipped' code in style.css
//     btn.classList.toggle("dipped");
//   };
// }

// function random_bg_color() {
//     var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);
//     var bgColor = "rgb(" + x + "," + y + "," + z + ")";
//  // console.log(bgColor);

//     document.body.style.background = bgColor;
//     }

// random_bg_color();

// function random_text_size(min, max){
//   min = Math.ceil(1);
//   max = Math.floor(20);
//   var txt = Math.floor(Math.random() * (max - min) + min);

// var txtSize= txt + "px";
//   console.log(txtSize);
//   document.getElementById('txt').style.fontSize = txtSize;
// }

// random_text_size();

// for (var x = 0; x < 100; x++) {
//   var colorOne = Math.random() * 255;
//   var colorTwo = Math.random() * 255;
//   var colorThree = Math.random() * 255;
// }
// background(colorOne, colorTwo, colorThree);

// ***************************************************************

// random link location

const elements = document.getElementsByClassName("ml-pic");
[...elements].forEach((elem) => {
  const newX = 0.5 * (Math.random() * window.innerWidth);
  elem.style.left = `${newX}px`;
});

setInterval(() => {
  const elements = document.getElementsByClassName("ml-pic");
  [...elements].forEach((elem) => {
    const newX = 0.5 * (Math.random() * window.innerWidth);
    elem.style.left = `${newX}px`;
  });
}, 5000);

const revealNav = () => {
  document.getElementById("navigation").classList.toggle("hidden");
  document.getElementById("navigationOpen").classList.toggle("rotate");
};

document.getElementById("navigationOpen").onclick = revealNav;
