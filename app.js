const imageSlider = document.querySelector("#js-slider-content");
const images = document.querySelectorAll(".slider__image");
const prevButton = document.querySelector("#js-prev");
const nextButton = document.querySelector("#js-next");

let count = 1;
const size = images[0].clientWidth;
imageSlider.style.transform = `translateX(${-size * count}px)`;


prevButton.addEventListener("click", () => {
  if (count <= 0) return;
  imageSlider.style.transition = `transform .4s ease-in-out`;
  count -= 1;
  imageSlider.style.transform = `translateX(${-size * count}px)`;
});

nextButton.addEventListener("click", () => {
  if (count >= images.length - 1) return;
  imageSlider.style.transition = `transform .4s ease-in-out`;
  count += 1;
  imageSlider.style.transform = `translateX(${-size * count}px)`;
});

imageSlider.addEventListener("transitionend", () => {
  if (images[count].id === "lastClone") {
    imageSlider.style.transition = "none";
    count = images.length - 2;
    imageSlider.style.transform = `translateX(${-size * count}px)`;
  }

  if (images[count].id === "firstClone") {
    imageSlider.style.transition = "none";
    count = images.length - count;
    imageSlider.style.transform = `translateX(${-size * count}px)`;
  }
});
