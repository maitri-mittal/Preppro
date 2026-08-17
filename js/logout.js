document.addEventListener("DOMContentLoaded", function () {

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


    const logoutButton =
        document.getElementById("confirmLogout");

    const logoutMessage =
        document.getElementById("logoutMessage");


    if (logoutButton) {

        logoutButton.addEventListener("click", function () {

            /*
             * Clear login information.
             * These keys should match the keys used
             * by your login/signup JavaScript.
             */

            localStorage.removeItem("loggedIn");
            localStorage.removeItem("currentUser");
            localStorage.removeItem("userEmail");

            logoutMessage.textContent =
                "You have been successfully logged out.";

            logoutMessage.style.color = "#16a34a";

            logoutButton.disabled = true;

            logoutButton.style.opacity = "0.7";

            setTimeout(function () {

                window.location.href = "index.html";

            }, 1500);

        });

    }

});