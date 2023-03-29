let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let header = document.querySelector(".header");

console.log(document.querySelector("header").offsetHeight);

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

  header.classList.toggle("sticky", window.scrollY > 80);
};
