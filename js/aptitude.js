document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       QUIZ QUESTIONS
    ========================================= */

    const quizzes = {

        c: {
            title: "C Programming",
            questions: [
                {
                    q: "Which symbol is used to access the address of a variable in C?",
                    options: ["*", "&", "#", "%"],
                    answer: 1
                },
                {
                    q: "Which header file is required for printf()?",
                    options: ["string.h", "stdlib.h", "stdio.h", "math.h"],
                    answer: 2
                },
                {
                    q: "Which loop executes its body at least once?",
                    options: ["for", "while", "do-while", "if"],
                    answer: 2
                },
                {
                    q: "What is the index of the first element of an array?",
                    options: ["0", "1", "-1", "Depends on array"],
                    answer: 0
                },
                {
                    q: "Which keyword is used to define a constant variable?",
                    options: ["constant", "const", "fixed", "static"],
                    answer: 1
                },
                {
                    q: "Which operator is used for logical AND?",
                    options: ["&", "&&", "||", "!"],
                    answer: 1
                },
                {
                    q: "Which function is used to allocate memory dynamically?",
                    options: ["alloc()", "malloc()", "memory()", "new()"],
                    answer: 1
                },
                {
                    q: "Which keyword exits a loop immediately?",
                    options: ["stop", "exit", "break", "return"],
                    answer: 2
                },
                {
                    q: "Which data type is used to store a single character?",
                    options: ["string", "char", "character", "text"],
                    answer: 1
                },
                {
                    q: "Which operator gives the remainder of division?",
                    options: ["/", "%", "//", "\\"],
                    answer: 1
                }
            ]
        },


        java: {
            title: "Java",
            questions: [
                {
                    q: "Which keyword is used to inherit a class in Java?",
                    options: ["implements", "inherits", "extends", "super"],
                    answer: 2
                },
                {
                    q: "Which method is the entry point of a Java program?",
                    options: ["start()", "main()", "run()", "execute()"],
                    answer: 1
                },
                {
                    q: "Which keyword creates an object?",
                    options: ["create", "object", "new", "make"],
                    answer: 2
                },
                {
                    q: "Which keyword refers to the current object?",
                    options: ["self", "this", "current", "object"],
                    answer: 1
                },
                {
                    q: "Which concept allows multiple methods with the same name?",
                    options: ["Inheritance", "Overloading", "Encapsulation", "Abstraction"],
                    answer: 1
                },
                {
                    q: "Which class is immutable in Java?",
                    options: ["String", "StringBuilder", "ArrayList", "Scanner"],
                    answer: 0
                },
                {
                    q: "Which keyword prevents inheritance?",
                    options: ["static", "final", "private", "sealed"],
                    answer: 1
                },
                {
                    q: "Which keyword is used to implement an interface?",
                    options: ["extends", "implements", "interface", "inherits"],
                    answer: 1
                },
                {
                    q: "Which access modifier provides the widest access?",
                    options: ["private", "protected", "public", "default"],
                    answer: 2
                },
                {
                    q: "Which keyword is used for exception handling?",
                    options: ["try", "check", "error", "catching"],
                    answer: 0
                }
            ]
        },


        python: {
            title: "Python",
            questions: [
                {
                    q: "Which symbol is used for comments in Python?",
                    options: ["//", "#", "/*", "--"],
                    answer: 1
                },
                {
                    q: "Which data type is immutable?",
                    options: ["List", "Dictionary", "Set", "Tuple"],
                    answer: 3
                },
                {
                    q: "Which keyword defines a function?",
                    options: ["function", "func", "def", "define"],
                    answer: 2
                },
                {
                    q: "Which method adds an element to a list?",
                    options: ["add()", "append()", "insertEnd()", "push()"],
                    answer: 1
                },
                {
                    q: "What does len() return?",
                    options: ["Type", "Length", "Memory", "Index"],
                    answer: 1
                },
                {
                    q: "Which keyword is used to create a class?",
                    options: ["class", "struct", "object", "define"],
                    answer: 0
                },
                {
                    q: "Which collection stores key-value pairs?",
                    options: ["List", "Tuple", "Dictionary", "Set"],
                    answer: 2
                },
                {
                    q: "Which operator performs exponentiation?",
                    options: ["^", "**", "//", "^^"],
                    answer: 1
                },
                {
                    q: "Which function displays output?",
                    options: ["display()", "echo()", "print()", "show()"],
                    answer: 2
                },
                {
                    q: "Which keyword is used to import a module?",
                    options: ["include", "import", "using", "require"],
                    answer: 1
                }
            ]
        },


        web: {
            title: "HTML / CSS / JavaScript",
            questions: [
                {
                    q: "What does HTML stand for?",
                    options: [
                        "Hyper Text Markup Language",
                        "High Text Machine Language",
                        "Hyper Tool Markup Language",
                        "Home Text Markup Language"
                    ],
                    answer: 0
                },
                {
                    q: "Which CSS property changes text color?",
                    options: ["font-color", "text-color", "color", "foreground"],
                    answer: 2
                },
                {
                    q: "Which keyword declares a block-scoped variable in JavaScript?",
                    options: ["var", "let", "define", "variable"],
                    answer: 1
                },
                {
                    q: "Which HTML tag creates a hyperlink?",
                    options: ["<link>", "<a>", "<href>", "<url>"],
                    answer: 1
                },
                {
                    q: "Which CSS property creates rounded corners?",
                    options: ["corner-radius", "radius", "border-radius", "round"],
                    answer: 2
                },
                {
                    q: "Which method selects an element by ID?",
                    options: [
                        "getElementById()",
                        "queryId()",
                        "selectId()",
                        "getId()"
                    ],
                    answer: 0
                },
                {
                    q: "Which CSS layout system is one-dimensional?",
                    options: ["Grid", "Flexbox", "Table", "Float"],
                    answer: 1
                },
                {
                    q: "Which tag is used for the largest heading?",
                    options: ["<heading>", "<h6>", "<h1>", "<head>"],
                    answer: 2
                },
                {
                    q: "Which symbol is used for an ID selector in CSS?",
                    options: [".", "#", "*", "&"],
                    answer: 1
                },
                {
                    q: "Which keyword declares a constant in JavaScript?",
                    options: ["constant", "final", "const", "static"],
                    answer: 2
                }
            ]
        },


        dbms: {
            title: "DBMS",
            questions: [
                {
                    q: "Which key uniquely identifies a record?",
                    options: ["Foreign Key", "Primary Key", "Candidate Key", "Composite Key"],
                    answer: 1
                },
                {
                    q: "Which language is used to query relational databases?",
                    options: ["HTML", "SQL", "XML", "CSS"],
                    answer: 1
                },
                {
                    q: "Which normal form removes partial dependency?",
                    options: ["1NF", "2NF", "3NF", "BCNF"],
                    answer: 1
                },
                {
                    q: "Which command retrieves data?",
                    options: ["GET", "SELECT", "FETCH", "READ"],
                    answer: 1
                },
                {
                    q: "Which command removes a table completely?",
                    options: ["DELETE", "REMOVE", "DROP", "CLEAR"],
                    answer: 2
                },
                {
                    q: "Which key establishes a relationship between tables?",
                    options: ["Primary Key", "Foreign Key", "Super Key", "Unique Key"],
                    answer: 1
                },
                {
                    q: "What does ACID stand for?",
                    options: [
                        "Atomicity Consistency Isolation Durability",
                        "Access Control Integrity Data",
                        "Atomic Control Isolation Data",
                        "None"
                    ],
                    answer: 0
                },
                {
                    q: "Which SQL clause filters rows?",
                    options: ["ORDER BY", "WHERE", "GROUP BY", "HAVING"],
                    answer: 1
                },
                {
                    q: "Which operation combines rows from multiple tables?",
                    options: ["JOIN", "MERGE", "CONNECT", "UNION ONLY"],
                    answer: 0
                },
                {
                    q: "Which is a DDL command?",
                    options: ["SELECT", "INSERT", "CREATE", "UPDATE"],
                    answer: 2
                }
            ]
        },


        os: {
            title: "Operating Systems",
            questions: [
                {
                    q: "Which is responsible for managing processes?",
                    options: ["Compiler", "Operating System", "Browser", "Database"],
                    answer: 1
                },
                {
                    q: "Which scheduling algorithm uses a time quantum?",
                    options: ["FCFS", "SJF", "Round Robin", "Priority"],
                    answer: 2
                },
                {
                    q: "A process in execution is called?",
                    options: ["Program", "Process", "Thread", "File"],
                    answer: 1
                },
                {
                    q: "Which condition is associated with deadlock?",
                    options: [
                        "Mutual exclusion",
                        "Compilation",
                        "Paging",
                        "Caching"
                    ],
                    answer: 0
                },
                {
                    q: "Virtual memory commonly uses?",
                    options: ["Paging", "Sorting", "Hashing", "Indexing"],
                    answer: 0
                },
                {
                    q: "Which is faster?",
                    options: ["RAM", "Cache", "Hard Disk", "SSD"],
                    answer: 1
                },
                {
                    q: "A lightweight process is called?",
                    options: ["Thread", "Program", "File", "Page"],
                    answer: 0
                },
                {
                    q: "Which algorithm may cause starvation?",
                    options: ["FCFS", "Priority Scheduling", "Round Robin", "FIFO"],
                    answer: 1
                },
                {
                    q: "Which memory management technique divides memory into pages?",
                    options: ["Paging", "Spooling", "Buffering", "Caching"],
                    answer: 0
                },
                {
                    q: "Which system call creates a new process in Unix?",
                    options: ["exec()", "fork()", "wait()", "create()"],
                    answer: 1
                }
            ]
        },


        cn: {
            title: "Computer Networks",
            questions: [
                {
                    q: "Which protocol translates domain names to IP addresses?",
                    options: ["HTTP", "DNS", "FTP", "SMTP"],
                    answer: 1
                },
                {
                    q: "How many layers are in the OSI model?",
                    options: ["5", "6", "7", "8"],
                    answer: 2
                },
                {
                    q: "Which protocol is connection-oriented?",
                    options: ["UDP", "TCP", "IP", "ARP"],
                    answer: 1
                },
                {
                    q: "Which device forwards packets between networks?",
                    options: ["Switch", "Hub", "Router", "Repeater"],
                    answer: 2
                },
                {
                    q: "What does IP stand for?",
                    options: [
                        "Internet Protocol",
                        "Internal Protocol",
                        "Internet Process",
                        "Information Protocol"
                    ],
                    answer: 0
                },
                {
                    q: "Which protocol is used to send email?",
                    options: ["SMTP", "HTTP", "FTP", "DNS"],
                    answer: 0
                },
                {
                    q: "Which layer handles routing?",
                    options: ["Transport", "Network", "Session", "Physical"],
                    answer: 1
                },
                {
                    q: "Which device works mainly at Layer 2?",
                    options: ["Router", "Switch", "Gateway", "Modem"],
                    answer: 1
                },
                {
                    q: "Which protocol is connectionless?",
                    options: ["TCP", "UDP", "FTP", "SSH"],
                    answer: 1
                },
                {
                    q: "Which address uniquely identifies a network interface?",
                    options: ["IP", "URL", "MAC", "DNS"],
                    answer: 2
                }
            ]
        },


        dsa: {
            title: "Data Structures",
            questions: [
                {
                    q: "Which data structure follows LIFO?",
                    options: ["Queue", "Stack", "Array", "Graph"],
                    answer: 1
                },
                {
                    q: "Which data structure follows FIFO?",
                    options: ["Stack", "Queue", "Tree", "Heap"],
                    answer: 1
                },
                {
                    q: "What is the average complexity of binary search?",
                    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
                    answer: 1
                },
                {
                    q: "Which structure represents hierarchical data?",
                    options: ["Array", "Tree", "Queue", "Stack"],
                    answer: 1
                },
                {
                    q: "Which traversal visits root first?",
                    options: ["Inorder", "Postorder", "Preorder", "Level"],
                    answer: 2
                },
                {
                    q: "Which structure consists of nodes and edges?",
                    options: ["Array", "Graph", "Stack", "Queue"],
                    answer: 1
                },
                {
                    q: "Which sorting algorithm repeatedly selects the minimum?",
                    options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Quick Sort"],
                    answer: 1
                },
                {
                    q: "Which data structure is used in BFS?",
                    options: ["Stack", "Queue", "Heap", "Tree"],
                    answer: 1
                },
                {
                    q: "Which data structure is commonly used in DFS?",
                    options: ["Queue", "Stack", "Array", "Hash Table"],
                    answer: 1
                },
                {
                    q: "What is the worst-case complexity of linear search?",
                    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                    answer: 2
                }
            ]
        },


        oops: {
            title: "Object Oriented Programming",
            questions: [
                {
                    q: "Which concept hides internal implementation?",
                    options: ["Inheritance", "Abstraction", "Polymorphism", "Compilation"],
                    answer: 1
                },
                {
                    q: "Which concept allows one class to acquire another's properties?",
                    options: ["Inheritance", "Abstraction", "Encapsulation", "Overloading"],
                    answer: 0
                },
                {
                    q: "Wrapping data and methods together is?",
                    options: ["Inheritance", "Encapsulation", "Abstraction", "Polymorphism"],
                    answer: 1
                },
                {
                    q: "Same method name with different parameters is?",
                    options: ["Overriding", "Overloading", "Inheritance", "Abstraction"],
                    answer: 1
                },
                {
                    q: "Redefining a parent method in child class is?",
                    options: ["Overloading", "Overriding", "Hiding", "Binding"],
                    answer: 1
                },
                {
                    q: "Which is not an OOP principle?",
                    options: ["Encapsulation", "Inheritance", "Polymorphism", "Compilation"],
                    answer: 3
                },
                {
                    q: "An object is an instance of a?",
                    options: ["Method", "Class", "Variable", "Package"],
                    answer: 1
                },
                {
                    q: "Which provides runtime polymorphism in Java?",
                    options: ["Method overriding", "Method overloading", "Constructor", "Static method"],
                    answer: 0
                },
                {
                    q: "Which access modifier provides maximum restriction?",
                    options: ["public", "protected", "private", "default"],
                    answer: 2
                },
                {
                    q: "Which OOP concept promotes code reuse?",
                    options: ["Inheritance", "Compilation", "Parsing", "Debugging"],
                    answer: 0
                }
            ]
        },


        aiml: {
            title: "Artificial Intelligence & Machine Learning",
            questions: [
                {
                    q: "Which is a supervised learning algorithm?",
                    options: ["Linear Regression", "K-Means", "PCA", "Apriori"],
                    answer: 0
                },
                {
                    q: "Which algorithm is used for clustering?",
                    options: ["K-Means", "Linear Regression", "Logistic Regression", "Naive Bayes"],
                    answer: 0
                },
                {
                    q: "What does AI stand for?",
                    options: [
                        "Automated Intelligence",
                        "Artificial Intelligence",
                        "Advanced Information",
                        "Applied Intelligence"
                    ],
                    answer: 1
                },
                {
                    q: "Which is an activation function?",
                    options: ["ReLU", "SQL", "HTML", "TCP"],
                    answer: 0
                },
                {
                    q: "What does ML stand for?",
                    options: [
                        "Machine Learning",
                        "Model Logic",
                        "Machine Logic",
                        "Mathematical Learning"
                    ],
                    answer: 0
                },
                {
                    q: "Which algorithm is commonly used for classification?",
                    options: ["Logistic Regression", "K-Means", "PCA", "Apriori"],
                    answer: 0
                },
                {
                    q: "What is overfitting?",
                    options: [
                        "Model performs well only on training data",
                        "Model has no data",
                        "Model cannot learn",
                        "Model has no parameters"
                    ],
                    answer: 0
                },
                {
                    q: "Which metric is commonly used for classification?",
                    options: ["Accuracy", "Mean", "Variance only", "Median"],
                    answer: 0
                },
                {
                    q: "Neural networks are inspired by?",
                    options: ["Human brain", "Computer memory", "Database", "Compiler"],
                    answer: 0
                },
                {
                    q: "Which learning uses labeled data?",
                    options: ["Supervised", "Unsupervised", "Reinforcement", "Random"],
                    answer: 0
                }
            ]
        },


        discrete: {
            title: "Discrete Mathematics",
            questions: [
                {
                    q: "Which symbol represents the empty set?",
                    options: ["{}", "∅", "[]", "()"],
                    answer: 1
                },
                {
                    q: "A relation can be represented using?",
                    options: ["Ordered pairs", "Only numbers", "Only graphs", "Only matrices"],
                    answer: 0
                },
                {
                    q: "How many elements are in a power set of a set with n elements?",
                    options: ["n", "2n", "2^n", "n²"],
                    answer: 2
                },
                {
                    q: "A graph consists of?",
                    options: ["Vertices and edges", "Rows and columns", "Keys and values", "Only vertices"],
                    answer: 0
                },
                {
                    q: "A relation that is reflexive, symmetric and transitive is?",
                    options: ["Partial order", "Equivalence relation", "Function", "Graph"],
                    answer: 1
                },
                {
                    q: "A function maps each input to?",
                    options: ["Exactly one output", "At least two outputs", "No output", "Any number"],
                    answer: 0
                },
                {
                    q: "What is the degree of a vertex?",
                    options: [
                        "Number of incident edges",
                        "Number of vertices",
                        "Number of graphs",
                        "Number of paths only"
                    ],
                    answer: 0
                },
                {
                    q: "A graph with no cycles is called?",
                    options: ["Cyclic graph", "Acyclic graph", "Complete graph", "Directed graph"],
                    answer: 1
                },
                {
                    q: "Which counting technique is used when order matters?",
                    options: ["Combination", "Permutation", "Set", "Relation"],
                    answer: 1
                },
                {
                    q: "What is 5!?",
                    options: ["20", "60", "100", "120"],
                    answer: 3
                }
            ]
        },


        architecture: {
            title: "Computer Architecture",
            questions: [
                {
                    q: "Which unit performs arithmetic operations?",
                    options: ["CU", "ALU", "RAM", "Cache"],
                    answer: 1
                },
                {
                    q: "Which memory is fastest?",
                    options: ["Hard Disk", "RAM", "Cache", "DVD"],
                    answer: 2
                },
                {
                    q: "CPU stands for?",
                    options: [
                        "Central Processing Unit",
                        "Computer Processing Utility",
                        "Central Program Unit",
                        "Control Processing Unit"
                    ],
                    answer: 0
                },
                {
                    q: "Which stores the address of the next instruction?",
                    options: ["PC", "IR", "MAR", "MDR"],
                    answer: 0
                },
                {
                    q: "Which register holds the current instruction?",
                    options: ["PC", "IR", "ACC", "MAR"],
                    answer: 1
                },
                {
                    q: "RAM is?",
                    options: [
                        "Volatile memory",
                        "Permanent memory",
                        "Optical memory",
                        "External memory"
                    ],
                    answer: 0
                },
                {
                    q: "Which unit controls CPU operations?",
                    options: ["ALU", "Control Unit", "RAM", "Cache"],
                    answer: 1
                },
                {
                    q: "Which cache is closest to CPU?",
                    options: ["L1", "L3", "RAM", "Disk"],
                    answer: 0
                },
                {
                    q: "Binary uses how many digits?",
                    options: ["2", "8", "10", "16"],
                    answer: 0
                },
                {
                    q: "Which component connects CPU to memory?",
                    options: ["Bus", "Monitor", "Keyboard", "Printer"],
                    answer: 0
                }
            ]
        },


        se: {
            title: "Software Engineering",
            questions: [
                {
                    q: "SDLC stands for?",
                    options: [
                        "Software Development Life Cycle",
                        "System Design Life Cycle",
                        "Software Data Logic Cycle",
                        "System Development Logic"
                    ],
                    answer: 0
                },
                {
                    q: "Which model follows sequential phases?",
                    options: ["Agile", "Waterfall", "Scrum", "Spiral"],
                    answer: 1
                },
                {
                    q: "Which methodology emphasizes iterative development?",
                    options: ["Waterfall", "Agile", "Big Bang", "V-Model"],
                    answer: 1
                },
                {
                    q: "Testing individual components is?",
                    options: ["Unit Testing", "System Testing", "Acceptance Testing", "Integration Testing"],
                    answer: 0
                },
                {
                    q: "Finding and fixing errors is?",
                    options: ["Testing", "Debugging", "Deployment", "Planning"],
                    answer: 1
                },
                {
                    q: "Which document describes software requirements?",
                    options: ["SRS", "HTML", "CSS", "API"],
                    answer: 0
                },
                {
                    q: "Which testing checks combined modules?",
                    options: ["Unit", "Integration", "Smoke", "Alpha"],
                    answer: 1
                },
                {
                    q: "Which approach uses short development cycles?",
                    options: ["Agile", "Waterfall", "Big Bang", "None"],
                    answer: 0
                },
                {
                    q: "What does QA stand for?",
                    options: [
                        "Quality Assurance",
                        "Quick Analysis",
                        "Quality Algorithm",
                        "Query Analysis"
                    ],
                    answer: 0
                },
                {
                    q: "Maintenance occurs after?",
                    options: ["Deployment", "Coding only", "Planning", "Requirements"],
                    answer: 0
                }
            ]
        },


        aptitude: {
            title: "Quantitative Aptitude",
            questions: [
                {
                    q: "What is 20% of 250?",
                    options: ["25", "40", "50", "60"],
                    answer: 2
                },
                {
                    q: "If a number is increased from 100 to 120, the increase is?",
                    options: ["10%", "15%", "20%", "25%"],
                    answer: 2
                },
                {
                    q: "What is the average of 10, 20 and 30?",
                    options: ["15", "20", "25", "30"],
                    answer: 1
                },
                {
                    q: "If CP = ₹100 and SP = ₹120, profit is?",
                    options: ["₹10", "₹15", "₹20", "₹25"],
                    answer: 2
                },
                {
                    q: "What is 3/4 of 100?",
                    options: ["50", "60", "75", "80"],
                    answer: 2
                },
                {
                    q: "If x + 5 = 12, x is?",
                    options: ["5", "6", "7", "8"],
                    answer: 2
                },
                {
                    q: "What is the ratio 10:20 in simplest form?",
                    options: ["1:2", "2:3", "1:3", "5:10"],
                    answer: 0
                },
                {
                    q: "What is 15 × 4?",
                    options: ["45", "50", "60", "65"],
                    answer: 2
                },
                {
                    q: "A train travels 60 km in 2 hours. Speed is?",
                    options: ["20 km/h", "30 km/h", "40 km/h", "60 km/h"],
                    answer: 1
                },
                {
                    q: "What is 25²?",
                    options: ["525", "625", "725", "825"],
                    answer: 1
                }
            ]
        },


        logical: {
            title: "Logical Reasoning",
            questions: [
                {
                    q: "Find the next number: 2, 4, 6, 8, ?",
                    options: ["9", "10", "11", "12"],
                    answer: 1
                },
                {
                    q: "Find the odd one out.",
                    options: ["Apple", "Mango", "Carrot", "Banana"],
                    answer: 2
                },
                {
                    q: "If CAT is coded as DBU, DOG is coded as?",
                    options: ["EPH", "EOG", "DPH", "FPI"],
                    answer: 0
                },
                {
                    q: "Complete: 5, 10, 20, 40, ?",
                    options: ["50", "60", "80", "100"],
                    answer: 2
                },
                {
                    q: "If today is Monday, what day is after 3 days?",
                    options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
                    answer: 2
                },
                {
                    q: "Which is different?",
                    options: ["Square", "Triangle", "Circle", "Cube"],
                    answer: 3
                },
                {
                    q: "Complete: 1, 1, 2, 3, 5, ?",
                    options: ["6", "7", "8", "9"],
                    answer: 2
                },
                {
                    q: "If A=1, B=2, then C=?",
                    options: ["2", "3", "4", "5"],
                    answer: 1
                },
                {
                    q: "Which number is prime?",
                    options: ["21", "27", "29", "33"],
                    answer: 2
                },
                {
                    q: "Find the next: 100, 90, 80, 70, ?",
                    options: ["50", "55", "60", "65"],
                    answer: 2
                }
            ]
        }

    };


    /* =========================================
       ELEMENTS
    ========================================= */

    const subjectGrid =
        document.getElementById("subjectGrid");

    const subjectSearch =
        document.getElementById("subjectSearch");

    const noResults =
        document.getElementById("noResults");

    const quizSection =
        document.getElementById("quizSection");

    const resultSection =
        document.getElementById("resultSection");

    const quizTitle =
        document.getElementById("quizTitle");

    const timerElement =
        document.getElementById("timer");

    const currentQuestionElement =
        document.getElementById("currentQuestion");

    const totalQuestionsElement =
        document.getElementById("totalQuestions");

    const progressPercent =
        document.getElementById("progressPercent");

    const progressFill =
        document.getElementById("progressFill");

    const questionNumber =
        document.getElementById("questionNumber");

    const questionText =
        document.getElementById("questionText");

    const optionsContainer =
        document.getElementById("options");

    const prevBtn =
        document.getElementById("prevBtn");

    const nextBtn =
        document.getElementById("nextBtn");

    const backSubjectBtn =
        document.getElementById("backSubjectBtn");

    const restartBtn =
        document.getElementById("restartBtn");

    const resultSubjectsBtn =
        document.getElementById("resultSubjectsBtn");

    const scoreElement =
        document.getElementById("score");

    const correctAnswersElement =
        document.getElementById("correctAnswers");

    const wrongAnswersElement =
        document.getElementById("wrongAnswers");

    const accuracyElement =
        document.getElementById("accuracy");

    const resultMessage =
        document.getElementById("resultMessage");

    const menuBtn =
        document.getElementById("menuBtn");

    const mainNav =
        document.querySelector(".main-nav");


    /* =========================================
       QUIZ VARIABLES
    ========================================= */

    let currentQuiz = null;

    let currentQuizKey = "";

    let currentQuestionIndex = 0;

    let selectedAnswers = [];

    let timer = null;

    let timeLeft = 60;


    /* =========================================
       START QUIZ
    ========================================= */

    document.querySelectorAll(".start-btn")
        .forEach(function (button) {

            button.addEventListener("click", function () {

                const quizKey =
                    this.dataset.quiz;

                startQuiz(quizKey);

            });

        });


    function startQuiz(quizKey) {

        if (!quizzes[quizKey]) {
            alert("Quiz not available.");
            return;
        }

        currentQuizKey = quizKey;

        currentQuiz = quizzes[quizKey];

        currentQuestionIndex = 0;

        selectedAnswers =
            new Array(currentQuiz.questions.length)
                .fill(null);

        clearInterval(timer);

        quizTitle.textContent =
            currentQuiz.title;

        totalQuestionsElement.textContent =
            currentQuiz.questions.length;

        subjectGrid.parentElement.style.display =
            "none";

        quizSection.style.display =
            "block";

        resultSection.style.display =
            "none";

        window.scrollTo({
            top: quizSection.offsetTop - 70,
            behavior: "smooth"
        });

        startTimer();

        showQuestion();

    }


    /* =========================================
       TIMER
    ========================================= */

    function startTimer() {

        clearInterval(timer);

        timeLeft = 60;

        timerElement.textContent =
            timeLeft;

        timer = setInterval(function () {

            timeLeft--;

            timerElement.textContent =
                timeLeft;

            if (timeLeft <= 0) {

                clearInterval(timer);

                nextQuestion(true);

            }

        }, 1000);

    }


    /* =========================================
       SHOW QUESTION
    ========================================= */

    function showQuestion() {

        const question =
            currentQuiz.questions[
                currentQuestionIndex
            ];

        const total =
            currentQuiz.questions.length;

        currentQuestionElement.textContent =
            currentQuestionIndex + 1;

        questionNumber.textContent =
            "QUESTION " +
            String(currentQuestionIndex + 1)
                .padStart(2, "0");

        questionText.textContent =
            question.q;

        const percent =
            Math.round(
                ((currentQuestionIndex + 1) / total) * 100
            );

        progressPercent.textContent =
            percent + "%";

        progressFill.style.width =
            percent + "%";

        optionsContainer.innerHTML = "";

        question.options.forEach(
            function (optionText, index) {

                const option =
                    document.createElement("button");

                option.className =
                    "option";

                option.textContent =
                    String.fromCharCode(65 + index)
                    + ". "
                    + optionText;

                option.dataset.index =
                    index;

                if (
                    selectedAnswers[
                        currentQuestionIndex
                    ] === index
                ) {

                    option.classList.add(
                        "selected"
                    );

                }

                option.addEventListener(
                    "click",
                    function () {

                        selectAnswer(index);

                    }
                );

                optionsContainer.appendChild(
                    option
                );

            }
        );

        prevBtn.disabled =
            currentQuestionIndex === 0;

        if (
            currentQuestionIndex ===
            total - 1
        ) {

            nextBtn.innerHTML =
                'Finish <i class="fa-solid fa-check"></i>';

        } else {

            nextBtn.innerHTML =
                'Next <i class="fa-solid fa-chevron-right"></i>';

        }

    }


    /* =========================================
       SELECT ANSWER
    ========================================= */

    function selectAnswer(index) {

        selectedAnswers[
            currentQuestionIndex
        ] = index;

        document
            .querySelectorAll(".option")
            .forEach(function (option) {

                option.classList.remove(
                    "selected"
                );

            });

        const selectedOption =
            document.querySelector(
                `.option[data-index="${index}"]`
            );

        if (selectedOption) {

            selectedOption.classList.add(
                "selected"
            );

        }

    }


    /* =========================================
       NEXT
    ========================================= */

    nextBtn.addEventListener(
        "click",
        function () {

            nextQuestion(false);

        }
    );


    function nextQuestion(timeOut) {

        if (!currentQuiz) {
            return;
        }

        if (
            currentQuestionIndex <
            currentQuiz.questions.length - 1
        ) {

            currentQuestionIndex++;

            startTimer();

            showQuestion();

        } else {

            finishQuiz();

        }

    }


    /* =========================================
       PREVIOUS
    ========================================= */

    prevBtn.addEventListener(
        "click",
        function () {

            if (currentQuestionIndex > 0) {

                currentQuestionIndex--;

                startTimer();

                showQuestion();

            }

        }
    );


    /* =========================================
       FINISH QUIZ
    ========================================= */

    function finishQuiz() {

        clearInterval(timer);

        let correct = 0;

        currentQuiz.questions.forEach(
            function (question, index) {

                if (
                    selectedAnswers[index] ===
                    question.answer
                ) {

                    correct++;

                }

            }
        );

        const total =
            currentQuiz.questions.length;

        const wrong =
            total - correct;

        const accuracy =
            Math.round(
                (correct / total) * 100
            );

        scoreElement.textContent =
            correct;

        correctAnswersElement.textContent =
            correct;

        wrongAnswersElement.textContent =
            wrong;

        accuracyElement.textContent =
            accuracy + "%";


        if (accuracy >= 80) {

            resultMessage.textContent =
                "Excellent! You have a strong understanding of this subject.";

        } else if (accuracy >= 60) {

            resultMessage.textContent =
                "Good work! Keep practicing to improve your score.";

        } else {

            resultMessage.textContent =
                "Keep practicing! Review the concepts and try again.";

        }

        quizSection.style.display =
            "none";

        resultSection.style.display =
            "block";

        window.scrollTo({
            top: resultSection.offsetTop - 70,
            behavior: "smooth"
        });

    }


    /* =========================================
       RESTART
    ========================================= */

    restartBtn.addEventListener(
        "click",
        function () {

            startQuiz(currentQuizKey);

        }
    );


    /* =========================================
       BACK TO SUBJECTS
    ========================================= */

    backSubjectBtn.addEventListener(
        "click",
        function () {

            clearInterval(timer);

            quizSection.style.display =
                "none";

            resultSection.style.display =
                "none";

            subjectGrid.parentElement.style.display =
                "block";

            document.getElementById(
                "subjects"
            ).scrollIntoView({
                behavior: "smooth"
            });

        }
    );


    resultSubjectsBtn.addEventListener(
        "click",
        function () {

            clearInterval(timer);

            resultSection.style.display =
                "none";

            subjectGrid.parentElement.style.display =
                "block";

            document.getElementById(
                "subjects"
            ).scrollIntoView({
                behavior: "smooth"
            });

        }
    );


    /* =========================================
       SEARCH SUBJECTS
    ========================================= */

    subjectSearch.addEventListener(
        "input",
        function () {

            const search =
                this.value
                    .toLowerCase()
                    .trim();

            let visibleCards = 0;

            document
                .querySelectorAll(".subject-card")
                .forEach(function (card) {

                    const subject =
                        card.dataset.subject
                            .toLowerCase();

                    if (
                        subject.includes(search)
                    ) {

                        card.style.display =
                            "block";

                        visibleCards++;

                    } else {

                        card.style.display =
                            "none";

                    }

                });

            if (visibleCards === 0) {

                noResults.style.display =
                    "block";

            } else {

                noResults.style.display =
                    "none";

            }

        }
    );


    /* =========================================
       MOBILE MENU
    ========================================= */

    if (menuBtn) {

        menuBtn.addEventListener(
            "click",
            function () {

                mainNav.classList.toggle(
                    "mobile-open"
                );

            }
        );

    }


});