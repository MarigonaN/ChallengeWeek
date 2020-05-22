window.onload = function () {
  maxWidth768();
  maxWidth552();
  load();
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

const load = () => {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "197e79dc65msh5a23ea9aa4d18b4p14b80cjsn6bb58c4783fd",
    },
  })
    .then((response) => response.json())
    .then((myData) => myData.data)
    .then((myData) => {
      const tBody = document.querySelector("tbody");
      const title = document.querySelector("#main-title");
      const footerTitle = document.querySelector("#footer-song-title");
      const footerImg = document.querySelector("#footer-img");
      for (data of myData) {
        tBody.innerHTML += `<tr class="d-flex justify-content-center py-2 song-list">
          <td class="align-self-center">
            <i class="fas fa-play-circle"></i>
          </td>
          <td class="col-8">
            <div class="head-font">${data.title_short}</div>
            <span class="sub-font">${data.artist.name}</span>
          </td>
          <td class="col-1">
            <i class="fas fa-ellipsis-h"></i>
          </td>
          <td class="col-2 footer-hide">${data.duration}</td>
        </tr>`;
      }
      title.innerHTML += `<div class="col-3">
      <img
        src=" ${myData[0].artist.picture_big}"
        alt=""
        class="img-fluid"
      />
    </div>
    <div class="col d-flex flex-column justify-content-end text-light">
      <p> Album</p>
      <h1>${myData[0].album.title}</h1>
      <p>
        <i class="far fa-user-circle"></i> ${myData[0].artist.name} &#183; 2020 &#183; 59 min 47
        sec
      </p>
    </div>`;
      footerTitle.innerHTML += `<div>${myData[0].title_short}</div>
    <div>${myData[0].artist.name}</div>`;
      footerImg.innerHTML += `<img
      loading="eager"
      src="${myData[0].artist.picture_small}"
      alt=""
      class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"
    />`;
    })
    .catch((err) => {
      console.log(err);
    });
};
