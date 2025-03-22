const services = document.querySelector("#services");
const worksModal = document.querySelector(".works-modal");
const modalCard = document.querySelector(".modal-card");
const btnClose = document.querySelector(".btn-close");
const workBtn = document.querySelector(".work-btn");
const aboutBtn = document.querySelector(".about-btn");
const abouts = document.querySelectorAll(".about");
const aboutCardContainer = document.querySelector(".about-hover-card");
console.log(modalCard);
btnClose.addEventListener("click", () => {
  worksModal.classList.add("display-none");
  //   modalCard.style.display = "none";
  console.log("Hello");
});

workBtn.addEventListener("click", () => {
  worksModal.classList.remove("display-none");
});

document.addEventListener("keydown", () => {
  worksModal.classList.add("display-none");
});

aboutBtn.addEventListener("mouseenter", () => {
  // aboutCardContainer.style.display = " block";
  // aboutCardContainer.style.transfom = "translateY(0%)";
  aboutCardContainer.classList.add("show-about");

  // console.log(aboutCardContainer);
  // console.log("Hello Mouse");
});
aboutBtn.addEventListener("mouseleave", () => {
  aboutCardContainer.classList.remove("show-about");
  // console.log(aboutCardContainer);
  // console.log("Hello Mouse");
});
