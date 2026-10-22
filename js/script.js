/* =========================================
   PREPVERSE - SCRIPT.JS
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       ACTIVE NAVIGATION LINK
    ========================================= */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href")?.split("/").pop();

        if (linkPage === currentPage) {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");
        }

    });


    /* =========================================
       NEWSLETTER FORM
    ========================================= */

    const newsletterForm =
        document.getElementById("newsletterForm");

    const emailInput =
        document.getElementById("email");


    if (newsletterForm && emailInput) {

        newsletterForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const email = emailInput.value.trim();


            if (email === "") {

                showMessage(
                    "Please enter your email address.",
                    "error"
                );

                return;
            }


            if (!validateEmail(email)) {

                showMessage(
                    "Please enter a valid email address.",
                    "error"
                );

                return;
            }


            showMessage(
                "Successfully subscribed to PrepPro!",
                "success"
            );


            newsletterForm.reset();

        });

    }


    /* =========================================
       EMAIL VALIDATION
    ========================================= */

    function validateEmail(email) {

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailPattern.test(email);

    }


    /* =========================================
       MESSAGE BOX
    ========================================= */

    function showMessage(message, type) {

        const oldMessage =
            document.querySelector(".form-message");

        if (oldMessage) {
            oldMessage.remove();
        }


        const messageBox =
            document.createElement("div");

        messageBox.className =
            "form-message " + type;

        messageBox.textContent =
            message;


        if (newsletterForm) {

            newsletterForm.insertAdjacentElement(
                "afterend",
                messageBox
            );

        }


        setTimeout(function () {

            messageBox.remove();

        }, 3500);

    }


    /* =========================================
       SMOOTH SCROLLING
    ========================================= */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');


    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================================
       RESOURCE ACCESS BUTTONS
    ========================================= */

    const resourceButtons =
        document.querySelectorAll(".resource-btn");


    resourceButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const href =
                this.getAttribute("href");


            if (!href || href === "#") {

                event.preventDefault();


                const card =
                    this.closest(".resource-card");


                const title =
                    card?.querySelector(
                        ".resource-banner span"
                    );


                const resourceName =
                    title
                        ? title.textContent.trim()
                        : "this placement guide";


                showResourceMessage(
                    resourceName
                );

            }

        });

    });


    /* =========================================
       RESOURCE MESSAGE
    ========================================= */

    function showResourceMessage(resourceName) {

        const existing =
            document.querySelector(".resource-message");


        if (existing) {
            existing.remove();
        }


        const message =
            document.createElement("div");


        message.className =
            "resource-message";


        message.innerHTML =
            `
            <div class="resource-message-box">

                <i class="fa-solid fa-circle-info"></i>

                <div>
                    <strong>${resourceName}</strong>
                    <p>
                        This placement guide will be available
                        soon on PrepPro.
                    </p>
                </div>

                <button class="close-resource-message">
                    <i class="fa-solid fa-xmark"></i>
                </button>

            </div>
            `;


        document.body.appendChild(message);


        const closeButton =
            message.querySelector(
                ".close-resource-message"
            );


        closeButton.addEventListener(
            "click",
            function () {

                message.remove();

            }
        );


        setTimeout(function () {

            if (message) {
                message.remove();
            }

        }, 4000);

    }


    /* =========================================
       COMPANY CARD INTERACTION
    ========================================= */

    const companyCards =
        document.querySelectorAll(
            ".company-logo-card"
        );


    companyCards.forEach(function (card) {

        card.addEventListener(
            "click",
            function () {

                const companyName =
                    this.textContent.trim();


                if (!companyName) {
                    return;
                }


                console.log(
                    "Selected company:",
                    companyName
                );

            }
        );

    });


    /* =========================================
       STATISTICS COUNTER ANIMATION
    ========================================= */

    const statBoxes =
        document.querySelectorAll(".stat-box");


    let statsStarted = false;


    function animateStatistics() {

        if (statsStarted) {
            return;
        }


        const statistics =
            document.querySelector(".statistics");


        if (!statistics) {
            return;
        }


        const rect =
            statistics.getBoundingClientRect();


        if (rect.top < window.innerHeight - 100) {

            statsStarted = true;


            statBoxes.forEach(function (box) {

                const heading =
                    box.querySelector("h2");


                if (!heading) {
                    return;
                }


                const originalText =
                    heading.textContent.trim();


                const number =
                    parseInt(
                        originalText.replace(/\D/g, "")
                    );


                const suffix =
                    originalText.replace(
                        /[0-9]/g,
                        ""
                    );


                if (isNaN(number)) {
                    return;
                }


                let current = 0;

                const duration = 1200;

                const increment =
                    Math.max(
                        1,
                        Math.ceil(
                            number / 60
                        )
                    );


                const timer =
                    setInterval(function () {

                        current += increment;


                        if (current >= number) {

                            current = number;

                            clearInterval(timer);

                        }


                        heading.textContent =
                            current + suffix;


                    }, duration / 60);

            });

        }

    }


    window.addEventListener(
        "scroll",
        animateStatistics
    );


    animateStatistics();


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements =
        document.querySelectorAll(
            ".resource-card, .review-card, .company-logo-card, .feature-card"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "show-element"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "reveal-element"
                );

                observer.observe(element);

            }
        );

    }


    /* =========================================
       BACK TO TOP BUTTON
    ========================================= */

    const backToTop =
        document.createElement("button");


    backToTop.className =
        "back-to-top";


    backToTop.innerHTML =
        '<i class="fa-solid fa-arrow-up"></i>';


    backToTop.setAttribute(
        "aria-label",
        "Back to top"
    );


    document.body.appendChild(
        backToTop
    );


    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 500) {

                backToTop.classList.add(
                    "visible"
                );

            } else {

                backToTop.classList.remove(
                    "visible"
                );

            }

        }
    );
    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );
});
function toggleTheme() {
    let button = document.getElementById("themeToggle");

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        button.innerHTML = "☀️ Light Mode";
    } else {
        button.innerHTML = "🌙 Dark Mode";
    }
}

