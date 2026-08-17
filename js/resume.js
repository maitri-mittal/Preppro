document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       MOBILE NAVIGATION
    ========================================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.querySelector(".nav-links");


    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("open");

            const icon =
                menuToggle.querySelector("i");

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

                const icon =
                    menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            });

        });

    }


    /* =========================================
       RESUME ELEMENTS
    ========================================= */

    const fullName =
        document.getElementById("fullName");

    const email =
        document.getElementById("email");

    const phone =
        document.getElementById("phone");

    const objective =
        document.getElementById("objective");

    const degree =
        document.getElementById("degree");

    const college =
        document.getElementById("college");

    const year =
        document.getElementById("year");

    const skills =
        document.getElementById("skills");

    const projects =
        document.getElementById("projects");


    const generateButton =
        document.getElementById("generateResume");

    const clearButton =
        document.getElementById("clearForm");

    const printButton =
        document.getElementById("printResume");


    /* =========================================
       GENERATE RESUME
    ========================================= */

    if (generateButton) {

        generateButton.addEventListener("click", function () {


            const nameValue =
                fullName.value.trim();

            const emailValue =
                email.value.trim();

            const phoneValue =
                phone.value.trim();

            const objectiveValue =
                objective.value.trim();

            const degreeValue =
                degree.value.trim();

            const collegeValue =
                college.value.trim();

            const yearValue =
                year.value.trim();

            const skillsValue =
                skills.value.trim();

            const projectsValue =
                projects.value.trim();


            if (nameValue === "") {

                alert("Please enter your full name.");

                fullName.focus();

                return;

            }


            /* Name */

            document.querySelector(
                ".resume-name"
            ).textContent =
                nameValue;


            /* Contact */

            let contact = "";

            if (emailValue !== "") {

                contact += emailValue;

            }

            if (
                phoneValue !== "" &&
                contact !== ""
            ) {

                contact += " | ";

            }

            if (phoneValue !== "") {

                contact += phoneValue;

            }


            if (contact === "") {

                contact =
                    "email@example.com | +91 XXXXX XXXXX";

            }


            document.querySelector(
                ".resume-contact"
            ).textContent = contact;


            /* Objective */

            document.getElementById(
                "previewObjective"
            ).textContent =

                objectiveValue ||
                "Add your career objective here.";


            /* Education */

            let education = "";

            if (degreeValue !== "") {

                education += degreeValue;

            }

            if (
                collegeValue !== "" &&
                education !== ""
            ) {

                education +=
                    " — " + collegeValue;

            } else if (collegeValue !== "") {

                education += collegeValue;

            }

            if (
                yearValue !== "" &&
                education !== ""
            ) {

                education +=
                    " | " + yearValue;

            }


            document.getElementById(
                "previewEducation"
            ).textContent =

                education ||
                "Add your education details here.";


            /* Skills */

            document.getElementById(
                "previewSkills"
            ).textContent =

                skillsValue ||
                "Add your skills here.";


            /* Projects */

            document.getElementById(
                "previewProjects"
            ).textContent =

                projectsValue ||
                "Add your project details here.";


            /* Scroll to preview */

            document.getElementById(
                "resumePaper"
            ).scrollIntoView({

                behavior: "smooth",

                block: "center"

            });


            alert(
                "Resume preview updated successfully!"
            );

        });

    }


    /* =========================================
       CLEAR FORM
    ========================================= */

    if (clearButton) {

        clearButton.addEventListener("click", function () {

            fullName.value = "";

            email.value = "";

            phone.value = "";

            objective.value = "";

            degree.value = "";

            college.value = "";

            year.value = "";

            skills.value = "";

            projects.value = "";


            document.querySelector(
                ".resume-name"
            ).textContent =
                "Your Name";


            document.querySelector(
                ".resume-contact"
            ).textContent =
                "email@example.com | +91 XXXXX XXXXX";


            document.getElementById(
                "previewObjective"
            ).textContent =
                "Your career objective will appear here.";


            document.getElementById(
                "previewEducation"
            ).textContent =
                "Your education details will appear here.";


            document.getElementById(
                "previewSkills"
            ).textContent =
                "Your skills will appear here.";


            document.getElementById(
                "previewProjects"
            ).textContent =
                "Your project details will appear here.";

        });

    }


    /* =========================================
       PRINT RESUME
    ========================================= */

    if (printButton) {

        printButton.addEventListener("click", function () {

            window.print();

        });

    }


    /* =========================================
       SMOOTH INTERNAL LINKS
    ========================================= */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (link) {

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

                    behavior: "smooth"

                });

            }

        });

    });


});