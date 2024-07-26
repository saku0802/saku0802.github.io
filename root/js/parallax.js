// パララックス効果
const parallax = document.querySelector(".parallax");

window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.5 + "px";
});