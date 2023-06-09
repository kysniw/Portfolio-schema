let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let header = document.querySelector(".header");

let navbar = document.querySelector(".navbar");
let burgerBtn = document.querySelector(".header .bx-btn");

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let offsetHeight = section.offsetHeight;
    let id = section.getAttribute("id");

    // console.log(`${top} | ${offset} | ${offsetHeight} | ${id}`);

    if (top >= offset && top < offset + offsetHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add("active");
      });
    }
  });

  // header.classList.toggle("sticky", window.scrollY > 80);

  burgerBtn.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const burgerBtnClick = () => {
  burgerBtn.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

burgerBtn.addEventListener("click", burgerBtnClick);
