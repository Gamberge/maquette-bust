const btnContact = document.querySelector(".btn-contact");
const body = document.querySelector("body");
const contactContainer2 = document.querySelector(".contact-container2");
const close = document.querySelector(".material-symbols-outlined");

btnContact.addEventListener("click", function () {
    body.classList.add("contact-container");
    contactContainer2.classList.remove("contact-container2");
    contactContainer2.classList.add("contact-container2-active");
});

close.addEventListener("click", function () {
    body.classList.remove("contact-container")
    contactContainer2.classList.remove("contact-container2-active");
    contactContainer2.classList.add("contact-container2");
});