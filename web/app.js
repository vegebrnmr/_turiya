//accordion

let accHeading = document.querySelectorAll(".contentBox__main");
let accPanel = document.querySelectorAll(".contentBox__text");

for (let i = 0; i < accHeading.length; i++) {
  // Execute whenever an accordion is clicked
  accHeading[i].onclick = function () {
    if (this.nextElementSibling.style.maxHeight) {
      hidePanels(); // Hide All open Panels
    } else {
      showPanel(this); // Show the panel
    }
  };
}

// Function to Show a Panel
function showPanel(elem) {
  hidePanels();
  elem.classList.add("active");
  elem.nextElementSibling.style.maxHeight =
    elem.nextElementSibling.scrollHeight + "px";
}

// Function to Hide all shown Panels
function hidePanels() {
  for (let i = 0; i < accPanel.length; i++) {
    accPanel[i].style.maxHeight = null;
    accHeading[i].classList.remove("active");
  }
}

//burger bar

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const list = document.querySelector(".list");
  const listItem = document.querySelectorAll(".list li");
  const footer = document.querySelector(".footer");
  const body = document.querySelector("body");

  burger.addEventListener("click", () => {
    list.classList.toggle("navigation__wrapper-active");
    footer.classList.toggle("footer__hide");
    body.classList.toggle("bodyHidden");

    listItem.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `listFade ease forwards ${index / 5 + 0.5}s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};

navSlide();

// text chang

let firstDiv = document.querySelector(".left__wrapper_first");
let secondDiv = document.querySelector(".left__wrapper_second");

let change = setInterval(function changeDivs() {
  firstDiv.classList.toggle("left__wrapper_first1");
  secondDiv.classList.toggle("left__wrapper_second1");
}, 15000);

// on hover stop
