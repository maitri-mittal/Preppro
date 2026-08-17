document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       MOBILE NAVIGATION
    ========================================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");


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


        /* Close mobile menu after clicking */

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
       ANIMATE PROGRESS BARS
    ========================================= */

    const progressBars =
        document.querySelectorAll(".progress-fill");


    if ("IntersectionObserver" in window) {

        const progressObserver =
            new IntersectionObserver(function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        const bar =
                            entry.target;

                        const progress =
                            bar.getAttribute("data-progress");


                        if (progress) {

                            setTimeout(function () {

                                bar.style.width =
                                    progress + "%";

                            }, 150);

                        }


                        progressObserver.unobserve(bar);

                    }

                });

            }, {
                threshold: 0.3
            });


        progressBars.forEach(function (bar) {

            progressObserver.observe(bar);

        });

    } else {

        progressBars.forEach(function (bar) {

            const progress =
                bar.getAttribute("data-progress");

            bar.style.width =
                progress + "%";

        });

    }



    /* =========================================
       CARD REVEAL ANIMATION
    ========================================= */

    const cards =
        document.querySelectorAll(
            ".dashboard-stat, .dashboard-card, .action-card, .profile-card"
        );


    if ("IntersectionObserver" in window) {

        const cardObserver =
            new IntersectionObserver(function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "dashboard-visible"
                        );

                        cardObserver.unobserve(
                            entry.target
                        );

                    }

                });

            }, {
                threshold: 0.12
            });


        cards.forEach(function (card) {

            card.classList.add(
                "dashboard-reveal"
            );

            cardObserver.observe(card);

        });

    }



    /* =========================================
       LOGOUT CONFIRMATION
    ========================================= */

    const logoutLinks =
        document.querySelectorAll(
            'a[href="logout.html"]'
        );


    logoutLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const confirmLogout =
                confirm(
                    "Are you sure you want to logout?"
                );


            if (!confirmLogout) {

                event.preventDefault();

            }

        });

    });



    /* =========================================
       PREVENT EMPTY SOCIAL LINKS
    ========================================= */

    const emptyLinks =
        document.querySelectorAll(
            '.social-icons a[href="#"]'
        );


    emptyLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

        });

    });

});