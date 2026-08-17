document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE NAVIGATION
    ========================================= */

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


    /* =========================================
       PASSWORD SHOW / HIDE
    ========================================= */

    const password = document.getElementById("password");
    const passwordToggle = document.getElementById("passwordToggle");

    if (password && passwordToggle) {

        passwordToggle.addEventListener("click", function () {

            const icon = passwordToggle.querySelector("i");

            if (password.type === "password") {

                password.type = "text";

                icon.classList.remove("fa-eye");
                icon.classList.add("fa-eye-slash");

            } else {

                password.type = "password";

                icon.classList.remove("fa-eye-slash");
                icon.classList.add("fa-eye");

            }

        });

    }


    /* =========================================
       LOGIN FORM
    ========================================= */

    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const email =
                document.getElementById("email").value.trim();

            const passwordValue =
                document.getElementById("password").value.trim();

            loginMessage.className = "login-message";

            if (email === "" || passwordValue === "") {

                loginMessage.textContent =
                    "Please enter your email and password.";

                loginMessage.classList.add("error");

                return;

            }


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                loginMessage.textContent =
                    "Please enter a valid email address.";

                loginMessage.classList.add("error");

                return;

            }


            if (passwordValue.length < 6) {

                loginMessage.textContent =
                    "Password must contain at least 6 characters.";

                loginMessage.classList.add("error");

                return;

            }


            /*
                Front-end demo login.

                Later, this can be connected to a real
                backend/database.
            */

            loginMessage.textContent =
                "Login successful! Redirecting...";

            loginMessage.classList.add("success");


            localStorage.setItem(
                "prepProLoggedIn",
                "true"
            );

            localStorage.setItem(
                "prepProUserEmail",
                email
            );


            setTimeout(function () {

                window.location.href = "index.html";

            }, 1200);

        });

    }


    /* =========================================
       FORGOT PASSWORD
    ========================================= */

    const forgotPassword =
        document.getElementById("forgotPassword");

    if (forgotPassword) {

        forgotPassword.addEventListener("click", function (event) {

            event.preventDefault();

            const email =
                document.getElementById("email").value.trim();

            if (email === "") {

                alert(
                    "Please enter your email address first."
                );

                document.getElementById("email").focus();

                return;

            }

            alert(
                "Password reset instructions would be sent to " +
                email +
                "."
            );

        });

    }

});