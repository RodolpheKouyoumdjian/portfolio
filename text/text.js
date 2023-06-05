menu = true;

function performTransition(text, selector) {
    const pauseTime = 500 / text.length;

    const element = document.querySelector(selector);
    if (element) {
        const currentText = element.textContent;
        const length = currentText.length;

        if (currentText == "") {
            if (text == "") {
                setTimeout(() => {
                    element.textContent = "";
                }, pauseTime);
            } else {
                const newText = text;
                const newTextLength = newText.length;

                // Simulate typewriter effect by progressively adding characters
                for (let i = 0; i <= newTextLength; i++) {
                    setTimeout(() => {
                        element.textContent = newText.substring(0, i);
                    }, i * pauseTime); // Delay between character additions (adjust as needed)
                }
            }
        } else {
            // Simulate keyboard delete by progressively removing characters
            const deletePromise = new Promise((resolve) => {
                for (let i = length - 1; i > 0; i--) {
                    setTimeout(() => {
                        element.textContent = currentText.substring(0, i);

                        if (i === 1) {
                            resolve();
                        }
                    }, (length - i) * pauseTime); // Delay between character removals (adjust as needed)
                }
            });

            // Wait for deletePromise to resolve before typing the new text
            deletePromise.then(() => {
                if (text == "") {
                    setTimeout(() => {
                        element.textContent = "";
                    }, pauseTime);
                } else {
                    const newText = text;
                    const newTextLength = newText.length;

                    // Simulate typewriter effect by progressively adding characters
                    for (let i = 1; i <= newTextLength; i++) {
                        setTimeout(() => {
                            element.textContent = newText.substring(0, i);
                        }, i * pauseTime); // Delay between character additions (adjust as needed)
                    }
                }
            });
        }
    }
}

function t1(text) {
    performTransition(text, "#title-1");
}

function t2(text) {
    performTransition(text, "#title-2");
}

function t3(text) {
    performTransition(text, "#title-3");
}

function t4(text) {
    performTransition(text, "#title-4");
}

function t5(text) {
    performTransition(text, "#title-5");
}

function t6(text) {
    performTransition(text, "#title-6");
}

function p1(text) {
    performTransition(text, "#p-1");
}

function p2(text) {
    performTransition(text, "#p-2");
}

function p3(text) {
    performTransition(text, "#p-3");
}

function p4(text) {
    performTransition(text, "#p-4");
}

function p5(text) {
    performTransition(text, "#p-5");
}

function p6(text) {
    performTransition(text, "#p-6");
}

function bottom2back() {
    performTransition("back", "#bottom-back");
    document.querySelector("#bottom-back").setAttribute("href", "");
    document.querySelector("#bottom-back").setAttribute("download", "");
}

function back2bottom() {
    performTransition("download", "#bottom-back");
}

// EDUCATION
function edu2mcgill() {
    performTransition("McGill University", "#title-1");
}

function mcgill2edu() {
    performTransition("Education", "#title-1");
}

function projects2dawson() {
    performTransition("Dawson College", "#title-2");
}

function dawson2projects() {
    performTransition("Projects", "#title-2");
}

function p2uni() {
    performTransition(
        "B. Sc. Computer Science, 3.88/4.0 CGPA, Fall 2022-",
        "#p-1"
    );
}

function uni2p() {
    performTransition("", "#p-1");
}

function p2cegep() {
    performTransition(
        "D.S.C Pure and Applied Sciences, Fall 2020-Winter 2022",
        "#p-2"
    );
}

function cegep2p() {
    performTransition("", "#p-2");
}

function courses2empty() {
    performTransition("", "#title-3");
}

function empty2courses() {
    performTransition("Courses", "#title-3");
}

function contact2empty() {
    performTransition("", "#title-4");
}

function empty2contact() {
    performTransition("Contact", "#title-4");
}

// When we click on Education
document
    .querySelector("#bottom-back")
    .addEventListener("click", function (event) {
        if (!menu) {
            event.preventDefault();
            init();
            menu = true;
        }
    });

function transitionWlink(order, title, description, link) {
    t_id = "#title-" + order;
    p_id = "#p-" + order;

    performTransition(title, t_id);
    document.querySelector(t_id).setAttribute("href", link);
    document.querySelector(t_id).setAttribute("target", "_blank");
    performTransition(description, p_id);
}

document.querySelector("#title-1").addEventListener("click", function (event) {
    

    // Code to run when the button is clicked
    if (menu) {
        event.preventDefault();
        bottom2back();

        transitionWlink(
            1,
            "McGill University",
            "B. Sc. Computer Science, 3.88/4.0 CGPA, Fall 2022-",
            "https://www.mcgill.ca/study/2023-2024/faculties/science/undergraduate/programs/bachelor-science-bsc-major-computer-science"
        );

        transitionWlink(
            2,
            "Dawson College",
            "D.S.C Pure and Applied Sciences, Fall 2020-Winter 2022",
            "https://www.dawsoncollege.qc.ca/pure-applied/"
        );

        transitionWlink(3, "", "", "");

        transitionWlink(4, "", "", "");

        transitionWlink(5, "", "", "");

        transitionWlink(6, "", "", "");

        menu = false;
        document.querySelector("#bottom-back").setAttribute("href", "");
        document.querySelector("#bottom-back").setAttribute("download", "");
    }
});

// When we click on Projects
document.querySelector("#title-2").addEventListener("click", function (event) {
    // Code to run when the button is clicked
    if (menu) {
        event.preventDefault(); // Prevent default navigation behavior

        bottom2back();

        // scryblr.com
        transitionWlink(
            1,
            "scryblr.com",
            "Full stack SAAS. Built with Flask (Python), HTML, CSS, JS & Firebase.",
            "https://scryblr.com/"
        );

        // Rewind
        transitionWlink(
            2,
            "Rewind",
            "Location based social media app. Built with the Flutter framework in Dart. Uses a Firebase backend.",
            ""
        );

        // PairIt
        transitionWlink(
            3,
            "PairIt",
            "A language learning game for IOS. Built with SwiftUI, data processing with Python",
            "https://apps.apple.com/app/id6443927039"
        );

        // RoboHacks
        transitionWlink(
            4,
            "McGill RoboHacks'23",
            "Built a robot using C and arduino. Challenge was to get the robot to find a light source and fire water at it... we failed miserably but it was a great learning experience!",
            ""
        );

        // Asset Allocation
        transitionWlink(
            5,
            "Asset Allocation",
            "Mean-variance portfolio optimization using the Sharpe Ratio, a Monte Carlo method. Built in Python",
            "https://github.com/RodolpheKouyoumdjian/AssetAllocation/blob/main/AssetAllocation.ipynb"
        );

        // Earthquakes
        transitionWlink(
            6,
            "Earthquakes Analysis",
            "Studying the link between earthquakes intensity and location. KNN clustering, scikit learn library (Python).",
            "https://github.com/RodolpheKouyoumdjian/EarthquakesAnalysis/blob/main/KNN_Earthquake_Prediction.ipynb"
        );

        menu = false;
        document.querySelector("#bottom-back").setAttribute("href", "");
        document.querySelector("#bottom-back").setAttribute("download", "");
    }
});

// When we click on Projects
document.querySelector("#title-3").addEventListener("click", function (event) {
    // Code to run when the button is clicked
    if (menu) {
        event.preventDefault(); // Prevent default navigation behavior

        bottom2back();

        transitionWlink(
            1,
            "MATH308",
            "Fundamentals of Statistical Learning with R. Dimensionality Reducation, Principal, Multiple & Correspondence Analysis. Hierarchical & non-hierarchical clustering."
        );

        transitionWlink(
            2,
            "COMP206",
            "Intro to Software Systems, Bash & C. Bash scripting. C: Memory allocation, pointers, data structures."
        );

        transitionWlink(
            3,
            "COMP250",
            "Intro to C.S. OOP with Java: Classes, inheritance, stacks, queues, hashmaps, trees, heaps, pointers. Algorithms: Breadth & depth first search, Djikstra's algorithm. "
        );

        transitionWlink(
            4,
            "COMP273",
            "Intro to Computer Systems. MIPS assembly, computer architecture (circuitry, cache, logic etc.)"
        );

        transitionWlink(5, "", "", "");

        transitionWlink(6, "", "", "");

        menu = false;
        document.querySelector("#bottom-back").setAttribute("href", "");
        document.querySelector("#bottom-back").setAttribute("download", "");
    }
});

// When we click on contact
document.querySelector("#title-4").addEventListener("click", function (event) {
    // Code to run when the button is clicked
    if (menu) {
        event.preventDefault(); // Prevent default navigation behavior

        bottom2back();

        // github
        transitionWlink(
            1,
            "Github",
            "View my public source code!",
            "https://github.com/RodolpheKouyoumdjian"
        );

        // email
        transitionWlink(
            2,
            "Email",
            "Don't hesitate to contact me!",
            "mailto:kouyoumdjianrodolphe@gmail.com"
        );

        // linkedin
        transitionWlink(
            3,
            "LinkedIn",
            "or contact me through LinkedIn",
            "https://www.linkedin.com/in/rodolphekouyoumdjian/"
        );

        transitionWlink(4, "", "", "");

        transitionWlink(5, "", "", "");

        transitionWlink(6, "", "", "");

        menu = false;
        document.querySelector("#bottom-back").setAttribute("href", "");
        document.querySelector("#bottom-back").setAttribute("download", "");

    }
});

function init() {
    back2bottom();
    document.querySelector("#bottom-back").setAttribute("href", "./assets/cv/Rodolphe Kouyoumdjian CV copy.pdf");
    document.querySelector("#bottom-back").setAttribute("download", "RK - CV");

    transitionWlink(1, "Education", "", "");

    transitionWlink(2, "Projects", "", "");

    transitionWlink(3, "Courses", "", "");

    transitionWlink(4, "Contact", "", "");

    transitionWlink(5, "", "", "");

    transitionWlink(6, "", "", "");

    menu = true;
}
