document.addEventListener("DOMContentLoaded", function () {


    /* ================= MOBILE NAVIGATION ================= */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("open");

            const icon = menuToggle.querySelector("i");

            if (navLinks.classList.contains("open")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });


        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("open");

                const icon = menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }



    /* ================= CONTACT FORM ================= */

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();


            if (!name || !email || !subject || !message) {

                formMessage.textContent =
                    "Please fill in all the fields.";

                formMessage.style.color = "#dc2626";

                return;
            }


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                formMessage.textContent =
                    "Please enter a valid email address.";

                formMessage.style.color = "#dc2626";

                return;
            }


            formMessage.textContent =
                "Thank you! Your message has been received.";

            formMessage.style.color = "#16a34a";


            contactForm.reset();

        });

    }



    /* ================= FAQ ================= */

    const faqQuestions =
        document.querySelectorAll(".faq-question");


    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const faqItem =
                question.parentElement;

            const answer =
                faqItem.querySelector(".faq-answer");


            document.querySelectorAll(".faq-item").forEach(function (item) {

                if (item !== faqItem) {

                    item.classList.remove("active");

                    item.querySelector(".faq-answer").style.maxHeight =
                        null;

                }

            });


            faqItem.classList.toggle("active");


            if (faqItem.classList.contains("active")) {

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

            } else {

                answer.style.maxHeight = null;

            }

        });

    });

});