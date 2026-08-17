document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.querySelector(".main-nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", function () {

            nav.classList.toggle("mobile-open");

            const icon = menuBtn.querySelector("i");

            if (nav.classList.contains("mobile-open")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    }


    /* =========================================
       SHOW / HIDE ANSWERS
    ========================================= */

    const answerButtons =
        document.querySelectorAll(".answer-btn");

    answerButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const card =
                button.closest(".question-card");

            card.classList.toggle("show-answer");

            if (card.classList.contains("show-answer")) {

                button.innerHTML =
                    'Hide Answer <i class="fa-solid fa-chevron-up"></i>';

            } else {

                button.innerHTML =
                    'Show Answer <i class="fa-solid fa-chevron-down"></i>';

            }

        });

    });


    /* =========================================
       CATEGORY FILTER
    ========================================= */

    const categoryButtons =
        document.querySelectorAll(".category-card");

    const questionCards =
        document.querySelectorAll(".question-card");

    const noResults =
        document.getElementById("noResults");

    function filterQuestions(category) {

        let visibleCount = 0;

        questionCards.forEach(function (card) {

            const cardCategory =
                card.getAttribute("data-category");

            if (
                category === "all" ||
                cardCategory === category
            ) {

                card.style.display = "block";

                visibleCount++;

            } else {

                card.style.display = "none";

                card.classList.remove(
                    "show-answer"
                );

            }

        });


        if (noResults) {

            if (visibleCount === 0) {
                noResults.style.display = "block";
            } else {
                noResults.style.display = "none";
            }

        }

    }


    categoryButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            categoryButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const category =
                button.getAttribute("data-category");

            filterQuestions(category);

            const searchInput =
                document.getElementById("questionSearch");

            if (searchInput) {
                searchInput.value = "";
            }

            document
                .getElementById("questions")
                .scrollIntoView({
                    behavior: "smooth"
                });

        });

    });


    /* =========================================
       SEARCH QUESTIONS
    ========================================= */

    const searchInput =
        document.getElementById("questionSearch");

    const clearSearch =
        document.getElementById("clearSearch");


    function searchQuestions() {

        const searchText =
            searchInput.value
                .toLowerCase()
                .trim();

        let visibleCount = 0;

        questionCards.forEach(function (card) {

            const question =
                card.querySelector("h3")
                    .textContent
                    .toLowerCase();

            const category =
                card.getAttribute("data-category")
                    .toLowerCase();

            const answer =
                card.querySelector(".answer")
                    .textContent
                    .toLowerCase();


            if (
                question.includes(searchText) ||
                category.includes(searchText) ||
                answer.includes(searchText)
            ) {

                card.style.display = "block";

                visibleCount++;

            } else {

                card.style.display = "none";

            }

        });


        if (noResults) {

            if (
                visibleCount === 0 &&
                searchText !== ""
            ) {

                noResults.style.display = "block";

            } else {

                noResults.style.display = "none";

            }

        }

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            searchQuestions
        );

    }


    /* =========================================
       CLEAR SEARCH
    ========================================= */

    if (clearSearch) {

        clearSearch.addEventListener(
            "click",
            function () {

                searchInput.value = "";

                categoryButtons.forEach(
                    function (button) {
                        button.classList.remove("active");
                    }
                );

                const allButton =
                    document.querySelector(
                        '.category-card[data-category="all"]'
                    );

                if (allButton) {
                    allButton.classList.add("active");
                }

                filterQuestions("all");

            }
        );

    }


    /* =========================================
       SMOOTH INTERNAL LINKS
    ========================================= */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");

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

            }
        );

    });


    /* =========================================
       MOBILE NAV CSS SUPPORT
    ========================================= */

    const style = document.createElement("style");

    style.textContent = `

        @media (max-width: 1000px) {

            .main-nav.mobile-open {

                display: flex;

                position: absolute;

                top: 72px;
                left: 20px;
                right: 20px;

                padding: 15px;

                flex-direction: column;

                align-items: stretch;

                gap: 0;

                background: white;

                border-radius: 15px;

                box-shadow:
                    0 20px 40px rgba(0,0,0,0.12);

                border: 1px solid #e5e7eb;

            }

            .main-nav.mobile-open .nav-link {

                padding: 13px;

                border-bottom:
                    1px solid #f1f5f9;

            }

            .main-nav.mobile-open
            .nav-link.active::after {

                display: none;

            }

        }

    `;

    document.head.appendChild(style);


    /* =========================================
       INITIAL STATE
    ========================================= */

    filterQuestions("all");

});