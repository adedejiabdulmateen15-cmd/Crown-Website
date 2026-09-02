/* =========================================================
   CROWNLABS
   PROFESSIONAL WEBSITE JAVASCRIPT
   ========================================================= */


/* =========================
   PAGE LOADER
   ========================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        if (loader) {
            loader.classList.add("loaded");
        }

    }, 900);

});


/* =========================
   SCROLL REVEAL
   ========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================
   SCROLL PROGRESS
   ========================= */

const progressBar =
    document.querySelector(".scroll-progress");


function updateScrollProgress() {

    if (!progressBar) return;


    const scrollTop =
        window.scrollY;


    const documentHeight =
        document.documentElement.scrollHeight
        - window.innerHeight;


    if (documentHeight <= 0) {

        progressBar.style.width = "0%";

        return;
    }


    const progress =
        (scrollTop / documentHeight) * 100;


    progressBar.style.width =
        `${progress}%`;

}


window.addEventListener(
    "scroll",
    updateScrollProgress,
    {
        passive: true
    }
);


updateScrollProgress();


/* =========================
   CURSOR GLOW
   ========================= */

const cursorGlow =
    document.querySelector(".cursor-glow");


if (cursorGlow) {

    window.addEventListener(
        "mousemove",
        (event) => {

            cursorGlow.style.left =
                `${event.clientX}px`;

            cursorGlow.style.top =
                `${event.clientY}px`;

        },
        {
            passive: true
        }
    );

}


/* =========================
   MOBILE MENU
   ========================= */

const mobileMenu =
    document.querySelector(".mobile-menu");


const navigation =
    document.querySelector(".navigation");


if (mobileMenu && navigation) {

    mobileMenu.addEventListener(
        "click",
        () => {

            navigation.classList.toggle(
                "mobile-open"
            );

        }
    );


    navigation
        .querySelectorAll("a")
        .forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    navigation.classList.remove(
                        "mobile-open"
                    );

                }
            );

        });

}


/* =========================
   ACTIVE NAVIGATION
   ========================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".navigation a"
    );


function updateActiveNavigation() {

    let currentSection = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;


        const sectionBottom =
            sectionTop +
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.id;

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove(
            "active"
        );


        const target =
            link.getAttribute("href");


        if (
            target ===
            `#${currentSection}`
        ) {

            link.classList.add(
                "active"
            );

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    {
        passive: true
    }
);


updateActiveNavigation();


/* =========================
   3D PROJECT CARD
   ========================= */

const projectCard =
    document.querySelector(
        ".featured-project"
    );


if (
    projectCard &&
    window.matchMedia(
        "(pointer:fine)"
    ).matches
) {

    projectCard.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                projectCard.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const rotateY =
                ((x / rect.width) - .5) * 3;


            const rotateX =
                ((y / rect.height) - .5) * -3;


            projectCard.style.transform =
                `perspective(1200px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        }
    );


    projectCard.addEventListener(
        "mouseleave",
        () => {

            projectCard.style.transform =
                "";

        }
    );

}


/* =========================
   CROWNVERSE PARALLAX
   ========================= */

const crownverseBackground =
    document.querySelector(
        ".crownverse-bg"
    );


window.addEventListener(
    "scroll",
    () => {

        if (!crownverseBackground)
            return;


        const rect =
            crownverseBackground
                .getBoundingClientRect();


        const offset =
            (window.innerHeight / 2 -
            rect.top) * 0.04;


        crownverseBackground.style.transform =
            `translateY(${offset}px)`;

    },
    {
        passive: true
    }
);


/* =========================
   AI STATUS TEXT
   ========================= */

const aiSection =
    document.querySelector(
        "#ai"
    );


const aiBadge =
    document.querySelector(
        ".ai-badge"
    );


if (aiSection && aiBadge) {

    const statuses = [
        "CURRENTLY IN DEVELOPMENT",
        "CROWN A.I IS BEING BUILT",
        "INTELLIGENCE SYSTEM ONLINE",
        "COMING SOON"
    ];


    let statusIndex = 0;


    setInterval(() => {

        statusIndex =
            (statusIndex + 1)
            % statuses.length;


        aiBadge.style.opacity = "0";


        setTimeout(() => {

            aiBadge.lastChild.textContent =
                ` ${statuses[statusIndex]}`;

            aiBadge.style.opacity = "1";

        }, 250);

    }, 5000);

}


/* =========================
   SMOOTH BUTTON FEEDBACK
   ========================= */

document
    .querySelectorAll(
        ".button, .nav-button, .download-button"
    )
    .forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                button.classList.add(
                    "button-clicked"
                );


                setTimeout(() => {

                    button.classList.remove(
                        "button-clicked"
                    );

                }, 300);

            }
        );

    });


/* =========================
   HERO PARALLAX
   ========================= */

const heroVisual =
    document.querySelector(
        ".hero-visual"
    );


if (
    heroVisual &&
    window.matchMedia(
        "(pointer:fine)"
    ).matches
) {

    window.addEventListener(
        "mousemove",
        (event) => {

            const x =
                (event.clientX /
                window.innerWidth -
                .5) * 10;


            const y =
                (event.clientY /
                window.innerHeight -
                .5) * 10;


            heroVisual.style.transform =
                `translate(${x}px, ${y}px)`;

        },
        {
            passive: true
        }
    );

}


/* =========================
   YEAR
   ========================= */

document
    .querySelectorAll(
        "[data-year]"
    )
    .forEach((element) => {

        element.textContent =
            new Date()
                .getFullYear();

    });


/* =========================
   CONSOLE BRANDING
   ========================= */

console.log(
    "%c👑 CROWNLABS",
    "font-size:24px;font-weight:900;color:#d4af37;"
);

console.log(
    "%cTechnology Beyond Limits.",
    "font-size:14px;color:#999;"
);
