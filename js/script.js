const services = document.querySelector("#services");
const worksModal = document.querySelector(".works-modal");
const modalCard = document.querySelector(".modal-card");
const btnClose = document.querySelector(".btn-close");
const workBtn = document.querySelector(".work-btn");
console.log(modalCard);
btnClose.addEventListener("click", () => {
  worksModal.classList.add("display-none");
  //   modalCard.style.display = "none";
  console.log("Hello");
});

workBtn.addEventListener("click", () => {
  worksModal.classList.remove("display-none");
});
