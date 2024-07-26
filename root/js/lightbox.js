// ライトボックス
const images = document.querySelectorAll(".gallery-grid img");
const lightbox = document.createElement("div");
const lightboxImg = document.createElement("img");
const closeBtn = document.createElement("span");

lightbox.classList.add("lightbox");
closeBtn.classList.add("close-btn");
closeBtn.innerHTML = "×";

document.body.appendChild(lightbox);
lightbox.appendChild(lightboxImg);
lightbox.appendChild(closeBtn);

images.forEach((image) => {
  image.addEventListener("click", () => {
    lightboxImg.src = image.src;
    lightbox.classList.add("show");
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("show");
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove("show");
  }
});