'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// testimonial modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalDate = document.querySelector("[data-modal-date]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalDate.innerHTML = this.querySelector("[data-testimonials-date]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });
}

// // add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);










// certificate variables
const certificateItem = document.querySelectorAll("[certificate-data-item]");
const certificateModalContainer = document.querySelector("[certificate-data-modal-container]");
const certificateModalCloseBtn = document.querySelector("[certificate-data-modal-close-btn]");
const certificateOverlay = document.querySelector("[certificate-data-overlay]");

// testimonial modal variable
const certificateModalImg = document.querySelector("[certificate-data-modal-img]");
const certificateModalTitle = document.querySelector("[certificate-data-modal-title]");
// const certificateModalDate = document.querySelector("[certificate-data-modal-date]");
// const certificateModalText = document.querySelector("[certificate-data-modal-text]");

// modal toggle function
const certificateModalFunc = function () {
  certificateModalContainer.classList.toggle("active");
  certificateOverlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < certificateItem.length; i++) {

  certificateItem[i].addEventListener("click", function () {

    certificateModalImg.src = this.querySelector("[data-certificate-avatar]").src;
    certificateModalImg.alt = this.querySelector("[data-certificate-avatar]").alt;
    certificateModalTitle.innerHTML = this.querySelector("[data-certificate-title]").innerHTML;
    // certificateModalDate.innerHTML = this.querySelector("[data-testimonials-date]").innerHTML;
    // certificateModalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    certificateModalFunc();

  });
}

// // add click event to modal close button
certificateModalCloseBtn.addEventListener("click", certificateModalFunc);
certificateOverlay.addEventListener("click", certificateModalFunc);