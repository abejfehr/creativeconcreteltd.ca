const lightboxLinks = document.querySelectorAll("[data-fslightbox]");

const lightboxEl = document.createElement("div");
lightboxEl.style.display = "none";
lightboxEl.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
lightboxEl.style.position = "absolute";
lightboxEl.style.top = "0";
lightboxEl.style.left = "0";
lightboxEl.style.width = "100vw";
lightboxEl.style.height = "100vh";

document.body.appendChild(lightboxEl);

let lightboxShown = false;

const closeLightbox = () => {
  lightboxShown = false;
  lightboxEl.style.display = "none";

  // clear the lightbox
  lightboxEl.innerHTML = "";
};

const openLightbox = () => {
  lightboxShown = true;
  lightboxEl.style.display = "block";

  // add the close button
  const closeBtn = document.createElement("button");
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeLightbox();
  });
  closeBtn.innerHTML = "close";
  lightboxEl.appendChild(closeBtn);

  // add the left button
  const leftBtn = document.createElement("button");
  leftBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeLightbox();
  });
  leftBtn.innerHTML = "<--";
  lightboxEl.appendChild(leftBtn);

  // add the right button
  const rightBtn = document.createElement("button");
  rightBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeLightbox();
  });
  rightBtn.innerHTML = "-->";
  lightboxEl.appendChild(rightBtn);

  // add the main image
  const bigImg = document.createElement("img");
  bigImg.src = "";
  lightboxEl.appendChild(bigImg);
};

let currentImage = 0;

const left = () => {};

const right = () => {};

// TODO: Make this work
// lightboxEl.addEventListener("click", closeLightbox);
document.body.addEventListener("keydown", (e) => {
  if (!lightboxShown) {
    return;
  }

  switch (e.keyCode) {
    case 27: // escape
      e.preventDefault();
      closeLightbox();
      break;
    case 37: // left
      e.preventDefault();
      left();
      break;
    case 39: // right
      e.preventDefault();
      right();
      break;
  }
});

lightboxLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    // open up a lightbox at the specified image
    openLightbox();

    // For each of the links, add an image to the lightbox
  });
});
