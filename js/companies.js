document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE NAVIGATION
    ========================================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.querySelector(".main-nav");


    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            mainNav.classList.toggle("open");

            const icon =
                menuToggle.querySelector("i");

            if (mainNav.classList.contains("open")) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        });


        /* Close menu after clicking */

        mainNav.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("open");

                const icon =
                    menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            });

        });

    }



    /* =========================================
       COMPANY SEARCH
    ========================================= */

    const searchInput =
        document.getElementById("searchInput");

    const searchBtn =
        document.getElementById("searchBtn");

    const companyCards =
        document.querySelectorAll(".company-card");

    const noResults =
        document.getElementById("noResults");


    function searchCompanies() {

        const searchValue =
            searchInput.value
                .trim()
                .toLowerCase();


        let found = false;


        companyCards.forEach(function (card) {

            const companyName =
                card
                    .getAttribute("data-company")
                    .toLowerCase();


            if (
                searchValue === "" ||
                companyName.includes(searchValue)
            ) {

                card.style.display = "";

                found = true;

            } else {

                card.style.display = "none";

            }

        });


        if (!found && searchValue !== "") {

            noResults.classList.add("show");

        } else {

            noResults.classList.remove("show");

        }

    }


    if (searchBtn) {

        searchBtn.addEventListener(
            "click",
            searchCompanies
        );

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            searchCompanies
        );


        searchInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    searchCompanies();

                }

            }
        );

    }



    /* =========================================
       ESCAPE KEY
    ========================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                if (searchInput) {

                    searchInput.value = "";

                    searchCompanies();

                }

            }

        }
    );

});