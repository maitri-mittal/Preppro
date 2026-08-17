document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       TEST DATA
    ========================================= */

    const subjects = [

        {
            id: "programming",
            title: "Programming Fundamentals",
            icon: "fa-code",
            description: "C, C++, Java, Python and OOP fundamentals.",
            questions: createProgrammingQuestions()
        },

        {
            id: "dsa",
            title: "Data Structures & Algorithms",
            icon: "fa-diagram-project",
            description: "Arrays, trees, sorting, searching and complexity.",
            questions: createDSAQuestions()
        },

        {
            id: "dbms",
            title: "DBMS & SQL",
            icon: "fa-database",
            description: "SQL, normalization, transactions and database concepts.",
            questions: createDBMSQuestions()
        },

        {
            id: "os",
            title: "Operating Systems",
            icon: "fa-server",
            description: "Processes, scheduling, memory and deadlocks.",
            questions: createOSQuestions()
        },

        {
            id: "networks",
            title: "Computer Networks",
            icon: "fa-network-wired",
            description: "OSI, TCP/IP, protocols, IP and networking.",
            questions: createNetworkQuestions()
        },

        {
            id: "coa",
            title: "Computer Architecture",
            icon: "fa-microchip",
            description: "CPU, memory, instructions and computer organization.",
            questions: createCOAQuestions()
        },

        {
            id: "software",
            title: "Software Engineering",
            icon: "fa-gears",
            description: "SDLC, testing, Agile and software development.",
            questions: createSoftwareQuestions()
        },

        {
            id: "aptitude",
            title: "Aptitude & Reasoning",
            icon: "fa-brain",
            description: "Quantitative aptitude and logical reasoning.",
            questions: createAptitudeQuestions()
        },

        {
            id: "web",
            title: "Web Development",
            icon: "fa-globe",
            description: "HTML, CSS, JavaScript and web technologies.",
            questions: createWebQuestions()
        },

        {
            id: "aiml",
            title: "AI & Machine Learning",
            icon: "fa-robot",
            description: "AI, ML, neural networks and data science basics.",
            questions: createAIMLQuestions()
        }

    ];


    /* =========================================
       VARIABLES
    ========================================= */

    const testGrid =
        document.getElementById("testGrid");

    const testArea =
        document.getElementById("testArea");

    const resultArea =
        document.getElementById("resultArea");

    const testTitle =
        document.getElementById("testTitle");

    const timerElement =
        document.getElementById("timer");

    const questionText =
        document.getElementById("questionText");

    const questionNumber =
        document.getElementById("questionNumber");

    const optionsContainer =
        document.getElementById("optionsContainer");

    const questionCounter =
        document.getElementById("questionCounter");

    const progressPercent =
        document.getElementById("progressPercent");

    const progressBar =
        document.getElementById("progressBar");

    const questionNumbers =
        document.getElementById("questionNumbers");

    const prevBtn =
        document.getElementById("prevBtn");

    const nextBtn =
        document.getElementById("nextBtn");

    const submitBtn =
        document.getElementById("submitBtn");

    const restartBtn =
        document.getElementById("restartBtn");

    const backBtn =
        document.getElementById("backBtn");

    const menuBtn =
        document.getElementById("menuBtn");


    let currentTest = null;

    let currentQuestion = 0;

    let answers = [];

    let timeLeft = 45 * 60;

    let timerInterval = null;


    /* =========================================
       TEST CARDS
    ========================================= */

    function renderTestCards() {

        testGrid.innerHTML = "";

        subjects.forEach((subject, index) => {

            const card =
                document.createElement("div");

            card.className = "test-card";

            card.innerHTML = `

                <div class="test-icon">
                    <i class="fa-solid ${subject.icon}"></i>
                </div>

                <h3>
                    ${subject.title}
                </h3>

                <p>
                    ${subject.description}
                </p>

                <div class="test-meta">

                    <span>
                        <i class="fa-solid fa-list"></i>
                        50 Questions
                    </span>

                    <span>
                        <i class="fa-solid fa-clock"></i>
                        45 Min
                    </span>

                </div>

                <button
                    class="start-test"
                    data-index="${index}"
                >
                    Start Test
                    <i class="fa-solid fa-arrow-right"></i>
                </button>

            `;

            testGrid.appendChild(card);

        });

        document
            .querySelectorAll(".start-test")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const index =
                            Number(
                                button.dataset.index
                            );

                        startTest(
                            subjects[index]
                        );

                    }
                );

            });

    }


    /* =========================================
       START TEST
    ========================================= */

    function startTest(subject) {

        currentTest = subject;

        currentQuestion = 0;

        answers =
            new Array(50).fill(null);

        timeLeft = 45 * 60;

        testTitle.textContent =
            subject.title;

        testGrid.style.display = "none";

        document
            .querySelector(".section-title")
            .style.display = "none";

        resultArea.classList.remove("show");

        testArea.classList.add("show");

        createQuestionNumbers();

        loadQuestion();

        startTimer();

        window.scrollTo({
            top: testArea.offsetTop - 90,
            behavior: "smooth"
        });

    }


    /* =========================================
       QUESTION NUMBERS
    ========================================= */

    function createQuestionNumbers() {

        questionNumbers.innerHTML = "";

        for (
            let i = 0;
            i < 50;
            i++
        ) {

            const button =
                document.createElement("button");

            button.className =
                "question-number-btn";

            button.textContent =
                i + 1;

            button.addEventListener(
                "click",
                () => {

                    currentQuestion = i;

                    loadQuestion();

                }
            );

            questionNumbers.appendChild(button);

        }

    }


    /* =========================================
       LOAD QUESTION
    ========================================= */

    function loadQuestion() {

        const q =
            currentTest.questions[
                currentQuestion
            ];

        questionNumber.textContent =
            `Question ${currentQuestion + 1}`;

        questionText.textContent =
            q.question;

        questionCounter.textContent =
            `Question ${currentQuestion + 1} of 50`;

        const percent =
            Math.round(
                ((currentQuestion + 1) / 50) * 100
            );

        progressPercent.textContent =
            `${percent}%`;

        progressBar.style.width =
            `${percent}%`;

        optionsContainer.innerHTML = "";

        q.options.forEach(
            (option, index) => {

                const label =
                    document.createElement("label");

                label.className = "option";

                if (
                    answers[currentQuestion] ===
                    index
                ) {
                    label.classList.add(
                        "selected"
                    );
                }

                label.innerHTML = `

                    <input
                        type="radio"
                        name="answer"
                        value="${index}"
                        ${
                            answers[currentQuestion] === index
                            ? "checked"
                            : ""
                        }
                    >

                    <span>
                        ${option}
                    </span>

                `;

                label.addEventListener(
                    "click",
                    () => {

                        answers[currentQuestion] =
                            index;

                        document
                            .querySelectorAll(".option")
                            .forEach(
                                el =>
                                el.classList.remove(
                                    "selected"
                                )
                            );

                        label.classList.add(
                            "selected"
                        );

                        updateQuestionNumbers();

                    }
                );

                optionsContainer.appendChild(
                    label
                );

            }
        );

        prevBtn.disabled =
            currentQuestion === 0;

        if (currentQuestion === 49) {

            nextBtn.style.display =
                "none";

            submitBtn.style.display =
                "block";

        } else {

            nextBtn.style.display =
                "block";

            submitBtn.style.display =
                "block";

        }

        updateQuestionNumbers();

    }


    /* =========================================
       QUESTION NAVIGATION
    ========================================= */

    function updateQuestionNumbers() {

        const buttons =
            document.querySelectorAll(
                ".question-number-btn"
            );

        buttons.forEach(
            (button, index) => {

                button.classList.remove(
                    "current",
                    "answered"
                );

                if (
                    index === currentQuestion
                ) {

                    button.classList.add(
                        "current"
                    );

                } else if (
                    answers[index] !== null
                ) {

                    button.classList.add(
                        "answered"
                    );

                }

            }
        );

    }


    nextBtn.addEventListener(
        "click",
        () => {

            if (
                currentQuestion < 49
            ) {

                currentQuestion++;

                loadQuestion();

            }

        }
    );


    prevBtn.addEventListener(
        "click",
        () => {

            if (
                currentQuestion > 0
            ) {

                currentQuestion--;

                loadQuestion();

            }

        }
    );


    /* =========================================
       TIMER
    ========================================= */

    function startTimer() {

        clearInterval(timerInterval);

        updateTimer();

        timerInterval =
            setInterval(
                () => {

                    timeLeft--;

                    updateTimer();

                    if (
                        timeLeft <= 0
                    ) {

                        clearInterval(
                            timerInterval
                        );

                        finishTest();

                    }

                },
                1000
            );

    }


    function updateTimer() {

        const minutes =
            Math.floor(
                timeLeft / 60
            );

        const seconds =
            timeLeft % 60;

        timerElement.textContent =
            `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;

    }


    /* =========================================
       SUBMIT
    ========================================= */

    submitBtn.addEventListener(
        "click",
        () => {

            const unanswered =
                answers.filter(
                    answer =>
                    answer === null
                ).length;

            if (
                unanswered > 0
            ) {

                const confirmSubmit =
                    confirm(
                        `You have ${unanswered} unanswered questions. Submit anyway?`
                    );

                if (!confirmSubmit) {
                    return;
                }

            }

            finishTest();

        }
    );


    /* =========================================
       FINISH TEST
    ========================================= */

    function finishTest() {

        clearInterval(
            timerInterval
        );

        let correct = 0;

        currentTest.questions.forEach(
            (q, index) => {

                if (
                    answers[index] ===
                    q.answer
                ) {

                    correct++;

                }

            }
        );

        const total = 50;

        const wrong =
            total - correct;

        const percentage =
            Math.round(
                (correct / total) * 100
            );

        document.getElementById(
            "scoreValue"
        ).textContent =
            `${correct}/50`;

        document.getElementById(
            "correctValue"
        ).textContent =
            correct;

        document.getElementById(
            "wrongValue"
        ).textContent =
            wrong;

        document.getElementById(
            "percentageValue"
        ).textContent =
            `${percentage}%`;


        const resultTitle =
            document.getElementById(
                "resultTitle"
            );

        const resultMessage =
            document.getElementById(
                "resultMessage"
            );


        if (percentage >= 80) {

            resultTitle.textContent =
                "Excellent Performance!";

            resultMessage.textContent =
                "You are showing strong placement preparation.";

        } else if (percentage >= 60) {

            resultTitle.textContent =
                "Good Job!";

            resultMessage.textContent =
                "Keep practicing to improve your score.";

        } else {

            resultTitle.textContent =
                "Keep Practicing!";

            resultMessage.textContent =
                "Review the concepts and try the test again.";

        }


        testArea.classList.remove(
            "show"
        );

        resultArea.classList.add(
            "show"
        );

        window.scrollTo({
            top: resultArea.offsetTop - 90,
            behavior: "smooth"
        });

    }


    /* =========================================
       RETAKE
    ========================================= */

    restartBtn.addEventListener(
        "click",
        () => {

            if (currentTest) {

                resultArea.classList.remove(
                    "show"
                );

                startTest(
                    currentTest
                );

            }

        }
    );


    /* =========================================
       BACK TO TESTS
    ========================================= */

    backBtn.addEventListener(
        "click",
        () => {

            clearInterval(
                timerInterval
            );

            resultArea.classList.remove(
                "show"
            );

            testArea.classList.remove(
                "show"
            );

            testGrid.style.display =
                "grid";

            document
                .querySelector(".section-title")
                .style.display =
                "block";

            window.scrollTo({
                top: 450,
                behavior: "smooth"
            });

        }
    );


    /* =========================================
       MOBILE NAV
    ========================================= */

    menuBtn.addEventListener(
        "click",
        () => {

            const nav =
                document.querySelector(
                    ".main-nav"
                );

            const buttons =
                document.querySelector(
                    ".nav-buttons"
                );

            nav.classList.toggle(
                "mobile-open"
            );

            buttons.classList.toggle(
                "mobile-open"
            );

        }
    );


    /* =========================================
       QUESTION GENERATORS
    ========================================= */

    function makeQuestions(baseQuestions) {

        const questions = [];

        for (
            let i = 0;
            i < 50;
            i++
        ) {

            questions.push(
                baseQuestions[
                    i % baseQuestions.length
                ]
            );

        }

        return questions.map(
            (q, index) => ({
                ...q,
                question:
                    q.question +
                    ``
            })
        );

    }


    /* =========================================
       PROGRAMMING
    ========================================= */

    function createProgrammingQuestions() {

        return makeQuestions([

            {
                question:
                    "Which language is known as a platform-independent programming language?",
                options:
                    ["C", "Java", "Assembly", "Machine Code"],
                answer: 1
            },

            {
                question:
                    "Which keyword is used to create a class in Java?",
                options:
                    ["object", "class", "struct", "define"],
                answer: 1
            },

            {
                question:
                    "Which data type stores true or false values in Java?",
                options:
                    ["int", "boolean", "char", "float"],
                answer: 1
            },

            {
                question:
                    "Which symbol is used to access a pointer's value in C?",
                options:
                    ["&", "*", "#", "@"],
                answer: 1
            },

            {
                question:
                    "Which concept allows the same method name with different parameters?",
                options:
                    ["Inheritance", "Overloading", "Encapsulation", "Abstraction"],
                answer: 1
            },

            {
                question:
                    "Which language is widely used for data science and AI?",
                options:
                    ["Python", "HTML", "CSS", "XML"],
                answer: 0
            },

            {
                question:
                    "Which loop executes its body at least once?",
                options:
                    ["for", "while", "do-while", "foreach"],
                answer: 2
            },

            {
                question:
                    "What does OOP stand for?",
                options:
                    [
                        "Object Oriented Programming",
                        "Object Ordered Process",
                        "Open Object Programming",
                        "Ordered Object Processing"
                    ],
                answer: 0
            },

            {
                question:
                    "Which access modifier makes a Java member accessible only inside its class?",
                options:
                    ["public", "protected", "private", "default"],
                answer: 2
            },

            {
                question:
                    "Which Python symbol is used for comments?",
                options:
                    ["//", "#", "/*", "--"],
                answer: 1
            }

        ]);

    }


    /* =========================================
       DSA
    ========================================= */

    function createDSAQuestions() {

        return makeQuestions([

            {
                question:
                    "What is the time complexity of binary search?",
                options:
                    ["O(n)", "O(log n)", "O(n²)", "O(1)"],
                answer: 1
            },

            {
                question:
                    "Which data structure follows LIFO?",
                options:
                    ["Queue", "Stack", "Tree", "Graph"],
                answer: 1
            },

            {
                question:
                    "Which data structure follows FIFO?",
                options:
                    ["Stack", "Queue", "Heap", "Tree"],
                answer: 1
            },

            {
                question:
                    "Which sorting algorithm has average O(n log n) complexity?",
                options:
                    ["Bubble Sort", "Merge Sort", "Linear Search", "Selection Sort"],
                answer: 1
            },

            {
                question:
                    "Which structure is used for BFS?",
                options:
                    ["Stack", "Queue", "Heap", "Array"],
                answer: 1
            },

            {
                question:
                    "Which structure is commonly used for DFS?",
                options:
                    ["Queue", "Stack", "Hash table", "Array only"],
                answer: 1
            },

            {
                question:
                    "What is the root node of a tree?",
                options:
                    [
                        "Node with no children",
                        "Topmost node",
                        "Leaf node",
                        "Last node"
                    ],
                answer: 1
            },

            {
                question:
                    "Which data structure provides average O(1) lookup?",
                options:
                    ["Linked List", "Hash Table", "Stack", "Queue"],
                answer: 1
            },

            {
                question:
                    "Which sorting algorithm repeatedly swaps adjacent elements?",
                options:
                    ["Merge Sort", "Bubble Sort", "Quick Sort", "Heap Sort"],
                answer: 1
            },

            {
                question:
                    "A linked list node normally contains data and what?",
                options:
                    ["Only data", "Reference/pointer", "Loop", "Class"],
                answer: 1
            }

        ]);

    }


    /* =========================================
       DBMS
    ========================================= */

    function createDBMSQuestions() {

        return makeQuestions([

            {
                question:
                    "What does SQL stand for?",
                options:
                    [
                        "Structured Query Language",
                        "Simple Query Language",
                        "System Query Logic",
                        "Structured Question Language"
                    ],
                answer: 0
            },

            {
                question:
                    "Which key uniquely identifies a record?",
                options:
                    ["Foreign Key", "Primary Key", "Candidate Key", "Index"],
                answer: 1
            },

            {
                question:
                    "Which SQL command retrieves data?",
                options:
                    ["INSERT", "SELECT", "UPDATE", "DELETE"],
                answer: 1
            },

            {
                question:
                    "Which command removes a table?",
                options:
                    ["DELETE", "DROP", "REMOVE", "CLEAR"],
                answer: 1
            },

            {
                question:
                    "What does ACID stand for in transactions?",
                options:
                    [
                        "Atomicity, Consistency, Isolation, Durability",
                        "Access, Control, Index, Data",
                        "Atomic, Central, Internal, Database",
                        "None"
                    ],
                answer: 0
            },

            {
                question:
                    "Which SQL clause filters rows?",
                options:
                    ["ORDER BY", "WHERE", "GROUP BY", "SELECT"],
                answer: 1
            },

            {
                question:
                    "Which normal form removes partial dependency?",
                options:
                    ["1NF", "2NF", "3NF", "BCNF"],
                answer: 1
            },

            {
                question:
                    "Which command modifies existing records?",
                options:
                    ["UPDATE", "ALTER", "CREATE", "SELECT"],
                answer: 0
            },

            {
                question:
                    "Which JOIN returns matching rows from both tables?",
                options:
                    ["INNER JOIN", "FULL JOIN", "CROSS JOIN", "LEFT JOIN"],
                answer: 0
            },

            {
                question:
                    "Which SQL function counts rows?",
                options:
                    ["SUM()", "COUNT()", "TOTAL()", "NUMBER()"],
                answer: 1
            }

        ]);

    }


    /* =========================================
       OPERATING SYSTEM
    ========================================= */

    function createOSQuestions() {

        return makeQuestions([

            {
                question:
                    "Which component manages hardware resources?",
                options:
                    ["Compiler", "Operating System", "Browser", "Editor"],
                answer: 1
            },

            {
                question:
                    "What is a process?",
                options:
                    [
                        "Program in execution",
                        "Stored file",
                        "Compiler",
                        "Hardware device"
                    ],
                answer: 0
            },

            {
                question:
                    "Which scheduling algorithm uses a time quantum?",
                options:
                    ["FCFS", "Round Robin", "SJF", "Priority"],
                answer: 1
            },

            {
                question:
                    "Which condition is necessary for deadlock?",
                options:
                    [
                        "Mutual exclusion",
                        "Compilation",
                        "Paging",
                        "Caching"
                    ],
                answer: 0
            },

            {
                question:
                    "What is virtual memory?",
                options:
                    [
                        "Memory using disk as an extension of RAM",
                        "CPU cache",
                        "ROM",
                        "Register"
                    ],
                answer: 0
            },

            {
                question:
                    "Which is the smallest unit of execution?",
                options:
                    ["Process", "Thread", "Program", "File"],
                answer: 1
            },

            {
                question:
                    "Which algorithm selects the shortest available job?",
                options:
                    ["FCFS", "SJF", "Round Robin", "FIFO"],
                answer: 1
            },

            {
                question:
                    "What is paging used for?",
                options:
                    [
                        "Memory management",
                        "CPU scheduling",
                        "File naming",
                        "Networking"
                    ],
                answer: 0
            },

            {
                question:
                    "Which memory is fastest?",
                options:
                    ["Hard Disk", "RAM", "Cache", "DVD"],
                answer: 2
            },

            {
                question:
                    "Which system call creates a new process in Unix?",
                options:
                    ["fork()", "create()", "new()", "process()"],
                answer: 0
            }

        ]);

    }


    /* =========================================
       NETWORKS
    ========================================= */

    function createNetworkQuestions() {

        return makeQuestions([

            {
                question:
                    "How many layers are in the OSI model?",
                options:
                    ["5", "6", "7", "8"],
                answer: 2
            },

            {
                question:
                    "Which protocol is connection-oriented?",
                options:
                    ["UDP", "TCP", "IP", "ARP"],
                answer: 1
            },

            {
                question:
                    "Which protocol translates domain names to IP addresses?",
                options:
                    ["HTTP", "DNS", "FTP", "SMTP"],
                answer: 1
            },

            {
                question:
                    "Which device connects different networks?",
                options:
                    ["Switch", "Router", "Hub", "Repeater"],
                answer: 1
            },

            {
                question:
                    "Which protocol is used for secure web communication?",
                options:
                    ["HTTP", "HTTPS", "FTP", "Telnet"],
                answer: 1
            },

            {
                question:
                    "Which layer handles routing in OSI?",
                options:
                    ["Transport", "Network", "Session", "Physical"],
                answer: 1
            },

            {
                question:
                    "Which protocol is commonly used to send email?",
                options:
                    ["SMTP", "HTTP", "DNS", "ARP"],
                answer: 0
            },

            {
                question:
                    "What does IP stand for?",
                options:
                    [
                        "Internet Protocol",
                        "Internal Process",
                        "Internet Process",
                        "Integrated Protocol"
                    ],
                answer: 0
            },

            {
                question:
                    "Which protocol automatically assigns IP addresses?",
                options:
                    ["DNS", "DHCP", "FTP", "SSH"],
                answer: 1
            },

            {
                question:
                    "Which device forwards frames using MAC addresses?",
                options:
                    ["Router", "Switch", "Modem", "Gateway"],
                answer: 1
            }

        ]);

    }


    /* =========================================
       COMPUTER ARCHITECTURE
    ========================================= */

    function createCOAQuestions() {

        return makeQuestions([

            {
                question:
                    "Which unit performs arithmetic operations?",
                options:
                    ["CU", "ALU", "RAM", "ROM"],
                answer: 1
            },

            {
                question:
                    "What does CPU stand for?",
                options:
                    [
                        "Central Processing Unit",
                        "Computer Processing Utility",
                        "Central Program Unit",
                        "Control Processing Unit"
                    ],
                answer: 0
            },

            {
                question:
                    "Which memory is volatile?",
                options:
                    ["ROM", "RAM", "SSD", "Flash"],
                answer: 1
            },

            {
                question:
                    "Which is closest to the CPU?",
                options:
                    ["Hard Disk", "Cache", "DVD", "USB"],
                answer: 1
            },

            {
                question:
                    "What does ALU stand for?",
                options:
                    [
                        "Arithmetic Logic Unit",
                        "Advanced Logic Utility",
                        "Arithmetic Link Unit",
                        "Application Logic Unit"
                    ],
                answer: 0
            },

            {
                question:
                    "Which register stores the address of the next instruction?",
                options:
                    ["IR", "PC", "ACC", "MAR"],
                answer: 1
            },

            {
                question:
                    "Which component controls instruction execution?",
                options:
                    ["ALU", "Control Unit", "RAM", "Cache"],
                answer: 1
            },

            {
                question:
                    "What is binary based on?",
                options:
                    ["2", "8", "10", "16"],
                answer: 0
            },

            {
                question:
                    "Which number system uses digits 0-9?",
                options:
                    ["Binary", "Octal", "Decimal", "Hexadecimal"],
                answer: 2
            },

            {
                question:
                    "Which memory is non-volatile?",
                options:
                    ["RAM", "Cache", "ROM", "Register"],
                answer: 2
            }

        ]);

    }


    /* =========================================
       SOFTWARE ENGINEERING
    ========================================= */

    function createSoftwareQuestions() {

        return makeQuestions([

            {
                question:
                    "What does SDLC stand for?",
                options:
                    [
                        "Software Development Life Cycle",
                        "System Design Life Cycle",
                        "Software Data Life Cycle",
                        "System Development Logic Cycle"
                    ],
                answer: 0
            },

            {
                question:
                    "Which model follows sequential phases?",
                options:
                    ["Agile", "Waterfall", "Spiral", "RAD"],
                answer: 1
            },

            {
                question:
                    "What is debugging?",
                options:
                    [
                        "Finding and fixing errors",
                        "Writing documentation",
                        "Designing UI",
                        "Deploying software"
                    ],
                answer: 0
            },

            {
                question:
                    "Which testing tests individual units?",
                options:
                    [
                        "System Testing",
                        "Unit Testing",
                        "Acceptance Testing",
                        "Integration Testing"
                    ],
                answer: 1
            },

            {
                question:
                    "Agile development emphasizes what?",
                options:
                    [
                        "Flexibility and iterations",
                        "No testing",
                        "No customer feedback",
                        "One final release"
                    ],
                answer: 0
            },

            {
                question:
                    "What is a software requirement?",
                options:
                    [
                        "Expected functionality or constraint",
                        "Programming language",
                        "Database table",
                        "CPU instruction"
                    ],
                answer: 0
            },

            {
                question:
                    "Which testing checks interaction between modules?",
                options:
                    [
                        "Unit",
                        "Integration",
                        "Regression",
                        "Smoke"
                    ],
                answer: 1
            },

            {
                question:
                    "What is maintenance in software engineering?",
                options:
                    [
                        "Modifying software after delivery",
                        "Only writing code",
                        "Buying hardware",
                        "Creating a network"
                    ],
                answer: 0
            },

            {
                question:
                    "Which document describes software requirements?",
                options:
                    ["SRS", "CPU", "API", "RAM"],
                answer: 0
            },

            {
                question:
                    "What does QA stand for?",
                options:
                    [
                        "Quality Assurance",
                        "Quick Application",
                        "Query Analysis",
                        "Quality Algorithm"
                    ],
                answer: 0
            }

        ]);

    }


    /* =========================================
       APTITUDE
    ========================================= */

    function createAptitudeQuestions() {

        return makeQuestions([

            {
                question:
                    "What is 20% of 200?",
                options:
                    ["20", "30", "40", "50"],
                answer: 2
            },

            {
                question:
                    "If x = 5, what is x²?",
                options:
                    ["10", "15", "20", "25"],
                answer: 3
            },

            {
                question:
                    "What is the average of 10 and 20?",
                options:
                    ["10", "15", "20", "30"],
                answer: 1
            },

            {
                question:
                    "If a train travels 60 km in 2 hours, its speed is?",
                options:
                    ["20 km/h", "30 km/h", "40 km/h", "60 km/h"],
                answer: 1
            },

            {
                question:
                    "What is 15 + 25?",
                options:
                    ["30", "35", "40", "45"],
                answer: 2
            },

            {
                question:
                    "What is the square root of 144?",
                options:
                    ["10", "11", "12", "14"],
                answer: 2
            },

            {
                question:
                    "What is 5 × 8?",
                options:
                    ["30", "35", "40", "45"],
                answer: 2
            },

            {
                question:
                    "What is 100 divided by 4?",
                options:
                    ["20", "25", "30", "40"],
                answer: 1
            },

            {
                question:
                    "If a = 10 and b = 20, a + b = ?",
                options:
                    ["20", "25", "30", "40"],
                answer: 2
            },

            {
                question:
                    "What is 10% of 500?",
                options:
                    ["25", "40", "50", "60"],
                answer: 2
            }

        ]);

    }


    /* =========================================
       WEB DEVELOPMENT
    ========================================= */

    function createWebQuestions() {

        return makeQuestions([

            {
                question:
                    "What does HTML stand for?",
                options:
                    [
                        "HyperText Markup Language",
                        "HighText Machine Language",
                        "Hyper Tool Markup Language",
                        "Home Text Markup Language"
                    ],
                answer: 0
            },

            {
                question:
                    "Which language is used to style web pages?",
                options:
                    ["HTML", "CSS", "SQL", "C"],
                answer: 1
            },

            {
                question:
                    "Which language adds interactivity to websites?",
                options:
                    ["HTML", "CSS", "JavaScript", "SQL"],
                answer: 2
            },

            {
                question:
                    "Which HTML tag creates a hyperlink?",
                options:
                    ["<link>", "<a>", "<href>", "<url>"],
                answer: 1
            },

            {
                question:
                    "Which CSS property changes text color?",
                options:
                    ["font", "color", "text-style", "background"],
                answer: 1
            },

            {
                question:
                    "Which keyword declares a constant in JavaScript?",
                options:
                    ["var", "let", "const", "constant"],
                answer: 2
            },

            {
                question:
                    "What does DOM stand for?",
                options:
                    [
                        "Document Object Model",
                        "Data Object Model",
                        "Document Order Method",
                        "Digital Object Management"
                    ],
                answer: 0
            },

            {
                question:
                    "Which CSS layout system is useful for one-dimensional layouts?",
                options:
                    ["Flexbox", "Float", "Table", "Position"],
                answer: 0
            },

            {
                question:
                    "Which JavaScript method selects an element by ID?",
                options:
                    [
                        "getElementById()",
                        "getElement()",
                        "selectId()",
                        "queryId()"
                    ],
                answer: 0
            },

            {
                question:
                    "Which HTTP method is commonly used to retrieve data?",
                options:
                    ["POST", "GET", "DELETE", "PATCH"],
                answer: 1
            }

        ]);

    }


    /* =========================================
       AI & ML
    ========================================= */

    function createAIMLQuestions() {

        return makeQuestions([

            {
                question:
                    "What does AI stand for?",
                options:
                    [
                        "Artificial Intelligence",
                        "Automated Information",
                        "Advanced Internet",
                        "Artificial Integration"
                    ],
                answer: 0
            },

            {
                question:
                    "Which is a type of machine learning?",
                options:
                    [
                        "Supervised Learning",
                        "Manual Learning",
                        "Static Learning",
                        "Fixed Learning"
                    ],
                answer: 0
            },

            {
                question:
                    "Which learning uses labeled data?",
                options:
                    [
                        "Supervised Learning",
                        "Unsupervised Learning",
                        "Random Learning",
                        "None"
                    ],
                answer: 0
            },

            {
                question:
                    "Which algorithm can be used for classification?",
                options:
                    [
                        "Logistic Regression",
                        "Linear Search",
                        "Binary Search",
                        "Merge Sort"
                    ],
                answer: 0
            },

            {
                question:
                    "What is a neural network inspired by?",
                options:
                    [
                        "Human brain",
                        "Database",
                        "Compiler",
                        "Operating system"
                    ],
                answer: 0
            },

            {
                question:
                    "Which is an unsupervised learning technique?",
                options:
                    [
                        "K-Means Clustering",
                        "Linear Regression",
                        "Logistic Regression",
                        "Decision Tree with labels"
                    ],
                answer: 0
            },

            {
                question:
                    "What is training data?",
                options:
                    [
                        "Data used to train a model",
                        "Only test data",
                        "Database software",
                        "Source code"
                    ],
                answer: 0
            },

            {
                question:
                    "What is overfitting?",
                options:
                    [
                        "Model performs well on training data but poorly on unseen data",
                        "Model has no parameters",
                        "Model has no data",
                        "Model always predicts correctly"
                    ],
                answer: 0
            },

            {
                question:
                    "Which metric is commonly used for classification?",
                options:
                    ["Accuracy", "RAM", "CPU", "Latency only"],
                answer: 0
            },

            {
                question:
                    "What is an epoch in neural network training?",
                options:
                    [
                        "One complete pass through the training dataset",
                        "One neuron",
                        "One feature",
                        "One prediction"
                    ],
                answer: 0
            }

        ]);

    }


    /* =========================================
       INITIALIZE
    ========================================= */

    renderTestCards();

});