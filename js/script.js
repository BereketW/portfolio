const services = document.querySelector("#services");
const worksModal = document.querySelector(".works-modal");
const modalCard = document.querySelector(".modal-card");
const btnClose = document.querySelector(".btn-close");
const workBtn = document.querySelector(".work-btn");
const aboutBtn = document.querySelector(".about-btn");
const abouts = document.querySelectorAll(".about");
const serviceBtn = document.querySelector(".service-btn");
const accordionCard = document.querySelector(".accordion-card");
const accordionCardTitle = document.querySelector(".accordion-title");
const aboutCardContainer = document.querySelector(".about-hover-card");
const serviceModalClose = document.querySelector(".service-modal-close");
const serviceModal = document.querySelector(".service-modal");
console.log(modalCard);
btnClose.addEventListener("click", () => {
  worksModal.classList.add("display-none");
  //   modalCard.style.display = "none";
  console.log("Hello");
});

workBtn.addEventListener("click", () => {
  worksModal.classList.remove("display-none");
});

// document.addEventListener("keydown", () => {
//   worksModal.classList.add("display-none");
//   serviceModal.classList.remove("display-none");
// });

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

serviceModalClose.addEventListener("click", () => {
  serviceModal.classList.add("display-none");
});
serviceBtn.addEventListener("click", () => {
  console.log(serviceModal);
  serviceModal.classList.remove("display-none");
});
accordionCardTitle.addEventListener("click", () => {
  console.log(accordionCard.querySelector("p"));
  accordionCard.querySelector("p").style.height = "100%";
});
// document.addEventListener("keydown", () => {
//   serviceModal.style.display = "none";
//   console.log(serviceBtn);
// });
