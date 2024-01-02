"use strict";

const mediaQueryList = window.matchMedia("(max-width: 992px)");

window.addEventListener("scroll", scrollElement);

function scrollElement() {
  // Get the element to rotate
  const element = document.querySelector(".rotating-element");
  const color = document.querySelector(".color");
  const firstChild = color.firstElementChild;

  const scrollPosition =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * -45; // Calculate based on scroll position
  const totalRotation = (45 + scrollPosition) % 180; // Rotate from 45 to 90 degrees
  const scrollColor = window.scrollY;

  // if (window.scrollY < 992) {
  //   window.scrollTo(0, 992);
  // }
  const mediaQueryList = window.matchMedia("(max-width: 992px)");

  // Hide at media screen

  if (window.scrollY > 100) {
    firstChild.style.opacity = "0"; // Hides the first child
  } else {
    firstChild.style.opacity = "1"; // Show the first child
  }

  // Apply the rotation
  if (!mediaQueryList.matches) {
    element.style.transform = `rotate(${totalRotation}deg)`;
    color.style.top = `${scrollColor}px`;
    color.style.bottom = `${scrollColor}px`;
  } else {
    element.style.transform = `rotate(0deg)`;
    color.style.top = `0px`;
    color.style.bottom = `0px`;
  }
}

const contentUnderline = document.querySelector(".underline-color");
const contentbackground = document.querySelector(".color");
const predefinedColors = [
  "rgb(255, 0, 0)", // Red
  "rgb(0, 255, 0)", // Green
  // "rgb(0, 0, 255)", // Blue
  // "rgb(255,192,203)", // Pink
  // "rgb(0,255,255)", // aqua
  // "rgb(255,165,0)", // orange
  // "rgb(255,255,0)", // Yellow
];
const text = [
  "On a Website",
  "On Facebook",
  // "On Instagram",
  // "On TikTok",
  // "On Amazon",
  // "On Google",
  // "Everywhere Online"
];

(function (document) {
  // Initialize variables
  let counter = 0; // Counter for the current text
  let pos = 1; // Position in the text
  let increment = 1; // Increment for moving through the text
  let convertArray = text[counter].split(""); // Convert the current text to an array of characters
  let timeLoop; // Variable to store the setTimeout function
  const colors = [
    "rgb(255, 0, 0)", // Red
    "rgb(0, 255, 0)", // Green
    "rgb(0, 0, 255)", // Blue
    "rgb(255,192,203)", // Pink
    "rgb(0,255,255)", // aqua
    "rgb(255,165,0)", // orange
    "rgb(255,255,0)", // Yellow
  ];

  function textLoop() {
    contentUnderline.innerHTML = convertArray.slice(0, pos).join("");
    contentUnderline.style.textDecorationColor =
      colors[counter % colors.length];
    contentbackground.style.background = colors[counter % colors.length];

    // pos += increment;
    // console.log(`Pos: ${pos}, Array: ${convertArray.length}`);
    // console.log(convertArray.length);
    // console.log(`counter: ${counter} , Increment:${increment}`);

    if (counter === text.length - 1 && pos === convertArray.length) {
      // Stop the animation when reaching the last element of the array
      clearTimeout(timeLoop);
      pos += increment;
      return;
    } else if (pos === convertArray.length) {
      increment = -increment;
    } else if (pos === 0) {
      increment = 1;
      counter++;

      // if (counter === text.length) {
      //   // Uncomment the line below if you want to stop the loop after one iteration
      //   clearTimeout(timeLoop);
      //   return;
      // }
      convertArray = text[counter].split("");
    }

    pos += increment;
    timeLoop = setTimeout(textLoop, 150);
  }

  textLoop();
})(document);

//Not used in Animation
const textWithColor = [
  { name: "On a Website", color: "rgb(255, 0, 0)" },
  { name: "On Facebook", color: "rgb(0, 255, 0)" },
  { name: "On Instagram", color: "rgb(0, 0, 255)" },
  { name: "On TikTok", color: "rgb(255,192,203)" },
  { name: "On Amazon", color: "rgb(0,255,255)" },
  { name: "On Google", color: "rgb(255,165,0)" },
  { name: "Everywhere Online", color: "rgb(255,255,0)" },
];

// let index = 0;
// function changeColor() {
//   textWithColor.map((item)=>
//   {
//     const name = item.name;
//     const color = item.color;
//     console.log(`name:${name} ,color:${color} `)
//     contentUnderline.style.textDecorationColor = color;
//     contentUnderline.innerHTML = name;
//     contentbackground.style.background = color;
//   //  else {
//   //   clearInterval(timerId);
//   // }
// })}
// let timerId = setTimeout(changeColor, 1000)

let index = 0;
function changeColor() {
  if (index < predefinedColors.length || index < text.length) {
    contentUnderline.style.textDecorationColor = predefinedColors[index];
    contentUnderline.innerHTML = text[index];
    contentbackground.style.background = predefinedColors[index];
    index++;
  } else {
    clearInterval(timerId);
  }
}
// let timerId = setInterval(changeColor, 1000);

// (function (document) {
//   let counter = 0;
//   let pos = 0;
//   let increment = 1;
//   let convertArray = text[counter].split("");
//   let timeLoop;

//   function textLoop() {
//     contentUnderline.innerHTML = convertArray.slice(0, pos).join("");
//     pos += increment;

//     if (counter === text.length - 1 && pos === convertArray.length) {
//       // Stop the animation when reaching the last index of the last element
//       clearTimeout(timeLoop);
//       return;
//     }

//     if (pos === convertArray.length) {
//       increment = -increment;
//     }

//     if (pos === 0) {
//       increment = 1;
//       counter++;

//       if (counter === text.length) {
//         // Uncomment the line below if you want to stop the loop after one iteration
//         clearTimeout(timeLoop);
//         return;
//       }

//       convertArray = text[counter].split("");
//     }

//     timeLoop = setTimeout(textLoop, 150);
//   }

//   textLoop();
// })(document);
