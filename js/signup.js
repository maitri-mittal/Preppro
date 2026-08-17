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

    }


    const togglePassword =
        document.getElementById("togglePassword");

    const password =
        document.getElementById("password");


    if (togglePassword && password) {

        togglePassword.addEventListener("click", function () {

            if (password.type === "password") {

                password.type = "text";

                togglePassword.innerHTML =
                    '<i class="fa-solid fa-eye-slash"></i>';

            } else {

                password.type = "password";

                togglePassword.innerHTML =
                    '<i class="fa-solid fa-eye"></i>';

            }

        });

    }


    const signupForm =
        document.getElementById("signupForm");

    const successMessage =
        document.getElementById("successMessage");


    if (signupForm) {

        signupForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const college =
                document.getElementById("college").value.trim();

            const year =
                document.getElementById("year").value;

            const branch =
                document.getElementById("branch").value.trim();

            const passwordValue =
                document.getElementById("password").value;

            const terms =
                document.getElementById("terms").checked;


            if (
                !name ||
                !email ||
                !college ||
                !year ||
                !branch ||
                !passwordValue ||
                !terms
            ) {

                alert("Please complete all fields.");

                return;

            }


            if (passwordValue.length < 6) {

                alert("Password must contain at least 6 characters.");

                return;

            }


            const user = {

                name: name,

                email: email,

                college: college,

                year: year,

                branch: branch

            };


            localStorage.setItem(
                "prepProUser",
                JSON.stringify(user)
            );


            localStorage.setItem(
                "prepProLoggedIn",
                "true"
            );


            successMessage.style.display = "block";


            signupForm.reset();


            setTimeout(function () {

                window.location.href = "index.html";

            }, 1800);

        });

    }

});