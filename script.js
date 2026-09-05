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

            const opened =
                navigation.classList.toggle(
                    "mobile-open"
                );

            mobileMenu.setAttribute(
                "aria-expanded",
                String(opened)
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

                    mobileMenu.setAttribute(
                        "aria-expanded",
                        "false"
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

            const children =
                Array.from(
                    aiBadge.childNodes
                );

            const textNode =
                children.find(
                    node =>
                        node.nodeType ===
                        Node.TEXT_NODE
                );

            if (textNode) {

                textNode.textContent =
                    ` ${statuses[statusIndex]}`;

            }

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


/* =========================================================
   CROWN MUSIC ENGINE
   ========================================================= */

const tracks = [

    {
        title: "STARS",
        artist: "Crown Music",
        file: "music/stars.mp3",
        cover: "music/stars-cover.png"
    },

    {
        title: "CROWNVERSE",
        artist: "Crown Music",
        file: "music/crownverse.mp3",
        cover: "music/crownverse-cover.png"
    },

    {
        title: "CHILL",
        artist: "Crown Music",
        file: "music/chill.mp3",
        cover: "music/chill-cover.png"
    }

];


const musicPlayer =
    document.querySelector(
        ".music-player"
    );


if (musicPlayer) {

    const playerCover =
        document.querySelector(
            ".player-cover"
        );

    const playerTitle =
        document.querySelector(
            ".player-title"
        );

    const playerArtist =
        document.querySelector(
            ".player-artist"
        );

    const playButton =
        document.querySelector(
            ".play-btn"
        );

    const previousButton =
        document.querySelector(
            ".previous-btn"
        );

    const nextButton =
        document.querySelector(
            ".next-btn"
        );

    const shuffleButton =
        document.querySelector(
            ".shuffle-btn"
        );

    const repeatButton =
        document.querySelector(
            ".repeat-btn"
        );

    const downloadButton =
        document.querySelector(
            ".download-btn"
        );

    const progressInput =
        document.querySelector(
            ".progress-bar"
        );

    const volumeInput =
        document.querySelector(
            ".volume-bar"
        );

    const currentTimeElement =
        document.querySelector(
            ".current-time"
        );

    const durationElement =
        document.querySelector(
            ".duration"
        );

    const musicCards =
        document.querySelectorAll(
            ".music-card"
        );


    let currentTrack = 0;

    let isShuffle = false;

    let isRepeat = false;


    const audio =
        new Audio();

    audio.preload = "metadata";

    audio.volume = 0.8;


    function formatTime(seconds) {

        if (!Number.isFinite(seconds)) {
            return "0:00";
        }

        const minutes =
            Math.floor(seconds / 60);

        const remainingSeconds =
            Math.floor(seconds % 60)
                .toString()
                .padStart(2, "0");

        return `${minutes}:${remainingSeconds}`;

    }


    function loadTrack(index, autoplay = false) {

        if (index < 0) {
            index = tracks.length - 1;
        }

        if (index >= tracks.length) {
            index = 0;
        }

        currentTrack = index;

        const track =
            tracks[currentTrack];


        audio.src =
            track.file;

        audio.load();


        playerCover.src =
            track.cover;

        playerCover.alt =
            `${track.title} cover`;


        playerTitle.textContent =
            track.title;

        playerArtist.textContent =
            track.artist;


        currentTimeElement.textContent =
            "0:00";

        durationElement.textContent =
            "0:00";

        progressInput.value =
            "0";


        musicCards.forEach((card) => {

            card.classList.toggle(
                "active",
                Number(
                    card.dataset.track
                ) === currentTrack
            );


            const button =
                card.querySelector(
                    ".card-play"
                );

            if (button) {

                button.textContent =
                    "▶";

            }

        });


        if (autoplay) {

            audio.play()
                .then(() => {

                    updatePlayButton();

                })
                .catch((error) => {

                    console.warn(
                        "Crown Music playback was blocked:",
                        error
                    );

                });

        }


        updatePlayButton();

    }


    function updatePlayButton() {

        if (!playButton) return;

        if (audio.paused) {

            playButton.textContent =
                "▶";

            playButton.setAttribute(
                "aria-label",
                "Play"
            );

        } else {

            playButton.textContent =
                "Ⅱ";

            playButton.setAttribute(
                "aria-label",
                "Pause"
            );

        }


        musicCards.forEach((card) => {

            const button =
                card.querySelector(
                    ".card-play"
                );

            if (!button) return;

            const trackNumber =
                Number(
                    card.dataset.track
                );

            if (
                trackNumber === currentTrack &&
                !audio.paused
            ) {

                button.textContent =
                    "Ⅱ";

            } else {

                button.textContent =
                    "▶";

            }

        });

    }


    function playCurrentTrack() {

        audio.play()
            .then(() => {

                updatePlayButton();

            })
            .catch((error) => {

                console.warn(
                    "Unable to play Crown Music:",
                    error
                );

            });

    }


    function pauseCurrentTrack() {

        audio.pause();

        updatePlayButton();

    }


    function togglePlay() {

        if (audio.paused) {

            playCurrentTrack();

        } else {

            pauseCurrentTrack();

        }

    }


    function nextTrack() {

        if (isShuffle) {

            let nextIndex;

            do {

                nextIndex =
                    Math.floor(
                        Math.random() *
                        tracks.length
                    );

            } while (
                tracks.length > 1 &&
                nextIndex === currentTrack
            );

            loadTrack(
                nextIndex,
                true
            );

            return;
        }


        loadTrack(
            currentTrack + 1,
            true
        );

    }


    function previousTrack() {

        if (audio.currentTime > 3) {

            audio.currentTime = 0;

            return;
        }


        loadTrack(
            currentTrack - 1,
            true
        );

    }


    if (playButton) {

        playButton.addEventListener(
            "click",
            togglePlay
        );

    }


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            nextTrack
        );

    }


    if (previousButton) {

        previousButton.addEventListener(
            "click",
            previousTrack
        );

    }


    if (shuffleButton) {

        shuffleButton.addEventListener(
            "click",
            () => {

                isShuffle =
                    !isShuffle;

                shuffleButton.classList.toggle(
                    "active",
                    isShuffle
                );

            }
        );

    }


    if (repeatButton) {

        repeatButton.addEventListener(
            "click",
            () => {

                isRepeat =
                    !isRepeat;

                repeatButton.classList.toggle(
                    "active",
                    isRepeat
                );

            }
        );

    }


    if (downloadButton) {

        downloadButton.addEventListener(
            "click",
            () => {

                const track =
                    tracks[currentTrack];

                const link =
                    document.createElement("a");

                link.href =
                    track.file;

                link.download =
                    `${track.title}.mp3`;

                document.body.appendChild(link);

                link.click();

                link.remove();

            }
        );

    }


    if (progressInput) {

        progressInput.addEventListener(
            "input",
            () => {

                if (!audio.duration)
                    return;

                const percentage =
                    Number(
                        progressInput.value
                    );

                audio.currentTime =
                    (percentage / 100) *
                    audio.duration;

            }
        );

    }


    if (volumeInput) {

        volumeInput.addEventListener(
            "input",
            () => {

                audio.volume =
                    Number(
                        volumeInput.value
                    );

            }
        );

    }


    audio.addEventListener(
        "loadedmetadata",
        () => {

            durationElement.textContent =
                formatTime(
                    audio.duration
                );

        }
    );


    audio.addEventListener(
        "timeupdate",
        () => {

            if (!audio.duration)
                return;

            const percentage =
                (audio.currentTime /
                audio.duration) *
                100;

            progressInput.value =
                percentage;

            currentTimeElement.textContent =
                formatTime(
                    audio.currentTime
                );

        }
    );


    audio.addEventListener(
        "play",
        updatePlayButton
    );


    audio.addEventListener(
        "pause",
        updatePlayButton
    );


    audio.addEventListener(
        "ended",
        () => {

            if (isRepeat) {

                audio.currentTime = 0;

                playCurrentTrack();

            } else {

                nextTrack();

            }

        }
    );


    musicCards.forEach((card) => {

        card.addEventListener(
            "click",
            (event) => {

                const clickedButton =
                    event.target.closest(
                        ".card-play"
                    );

                const index =
                    Number(
                        card.dataset.track
                    );


                if (
                    index === currentTrack &&
                    clickedButton &&
                    !audio.paused
                ) {

                    pauseCurrentTrack();

                    return;

                }


                loadTrack(
                    index,
                    true
                );

            }
        );

    });


    document.addEventListener(
        "keydown",
        (event) => {

            const tag =
                document.activeElement?.tagName;

            if (
                tag === "INPUT" ||
                tag === "TEXTAREA"
            ) {
                return;
            }


            if (
                event.code ===
                "Space"
            ) {

                event.preventDefault();

                togglePlay();

            }


            if (
                event.code ===
                "ArrowRight"
            ) {

                if (audio.duration) {

                    audio.currentTime =
                        Math.min(
                            audio.duration,
                            audio.currentTime + 5
                        );

                }

            }


            if (
                event.code ===
                "ArrowLeft"
            ) {

                audio.currentTime =
                    Math.max(
                        0,
                        audio.currentTime - 5
                    );

            }

        }
    );


    loadTrack(0, false);

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

console.log(
    "%c🎵 CROWN MUSIC ENGINE ONLINE",
    "font-size:14px;font-weight:900;color:#d4af37;"
);
