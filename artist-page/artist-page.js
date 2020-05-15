window.onload = function () {
  maxWidth768();
  maxWidth552();
};

const maxWidth768 = () => {
  const nav = document.querySelector("nav.container");

  const svgPadding = document.querySelectorAll("nav ul li a span");

  if (window.innerWidth <= 768) {
    for (svgPad of svgPadding) {
      svgPad.classList.replace("ml-2", "ml-0");
    }
    // nav.classList.replace("container", "container-fluid");
  }
};

const maxWidth552 = () => {
  const aside = document.querySelector("aside");
  const navRow = document.querySelector("nav.container ul.row");
  const installApp = document.querySelector("aside > div.container");
  const liPadding = document.querySelectorAll("nav ul li");
  const nav = document.querySelector("aside nav");
  const svgPadding = document.querySelectorAll("nav ul li a span");
  const lastLi = document.querySelector("nav ul li:last-child a span");
  const rightCols = document.querySelectorAll(".right-col");
  const firstLi = document.querySelector(
    "aside nav.container ul li:first-child"
  );
  const footer = document.querySelector("footer");
  const footerHidden = document.querySelectorAll(".footer-hidden");
  const mediaImg = document.querySelector(".media-img");
  if (window.innerWidth <= 552) {
    aside.classList.replace("col-2", "col");
    aside.classList.replace("fixed-top", "fixed-bottom");
    aside.classList.replace("flex-column", "flex-row");
    navRow.classList.replace("flex-column", "flex-row");
    // navRow.classList.replace(" ", "justify-content-around");
    installApp.style.display = "none";
    for (liMt of liPadding) {
      liMt.classList.replace("mt-3", "mt-0");
    }
    nav.classList.replace("container", "container-fluid");
    for (svgPad of svgPadding) {
      svgPad.style.display = "block";
      svgPad.classList.replace("ml-0", "mt-2");
    }
    lastLi.classList.replace("mt-2", "mt-0");
    for (rightCol of rightCols) {
      rightCol.classList.replace("col-10", "col");
      rightCol.classList.remove("float-right");
    }
    firstLi.style.display = "none";
    footer.classList.replace("fixed-bottom", "footer");
    for (footerHide of footerHidden) {
      footerHide.style.display = "none";
    }
    mediaImg.classList.replace("col-2", "col-3");
  }
};
