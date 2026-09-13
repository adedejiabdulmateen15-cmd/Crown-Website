/* =========================================================
   CROWNLABS — PROFESSIONAL INTERACTION SYSTEM
   File: script.js
   ========================================================= */

"use strict";

/* =========================================================
   GLOBAL HELPERS
   ========================================================= */

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) =>
    Array.from(parent.querySelectorAll(selector));

const safe = (callback) => {
    try {
        return callback();
    } catch (error) {
        console.error("[CrownLabs]", error);
        return null;
    }
};

/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loading");

    initLoader();
    initScrollProgress();
    initCursorGlow();
    initRevealAnimations();
    initNavigation();
    initSmoothScrolling();
    initActiveNavigation();
    initButtonFeedback();
    initHeroParallax();
    initProjectInteractions();
    initAIStatus();
    initCrownverseEffects();
    initMusicPlayer();
    initYear();
});

/* =========================================================
   LOADER
   ========================================================= */

function initLoader() {
    const loader = $("#loader");

    if (!loader) {
        document.body.classList.remove("loading");
        return;
    }

    const finishLoading = () => {
        loader.classList.add("loaded");
        document.body.classList.remove("loading");

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);
    };

    /*
     * Do not wait for every external resource.
     * CrownLabs should always become usable.
     */
    setTimeout(finishLoading, 650);

    window.addEventListener("load", () => {
        setTimeout(finishLoading, 150);
    }, { once: true });
}

/* =========================================================
   SCROLL PROGRESS
   ========================================================= */

function initScrollProgress() {
    const progress = $(".scroll-progress");

    if (!progress) return;

    const update = () => {
        const documentHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        if (documentHeight <= 0) {
            progress.style.width = "0%";
            return;
        }

        const amount =
            (window.scrollY / documentHeight) * 100;

        progress.style.width = `${Math.min(100, Math.max(0, amount))}%`;
    };

    window.addEventListener("scroll", update, {
        passive: true
    });

    update();
}

/* =========================================================
   CURSOR GLOW
   ========================================================= */

function initCursorGlow() {
    const glow = $(".cursor-glow");

    if (!glow) return;

    if (window.matchMedia("(pointer: coarse)").matches) {
        glow.style.display = "none";
        return;
    }

    let visible = false;

    window.addEventListener("mousemove", (event) => {
        glow.style.left = `${event.clientX}px`;
        glow.style.top = `${event.clientY}px`;

        if (!visible) {
            visible = true;
            glow.style.opacity = "1";
        }
    }, { passive: true });

    document.addEventListener("mouseleave", () => {
        glow.style.opacity = "0";
        visible = false;
    });

    document.addEventListener("mouseenter", () => {
        glow.style.opacity = "1";
        visible = true;
    });
}

/* =========================================================
   REVEAL ANIMATIONS
   ========================================================= */

function initRevealAnimations() {
    const elements = $$(".reveal");

    if (!elements.length) return;

    if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
        elements.forEach((element) => {
            element.classList.add("visible");
        });

        return;
    }

    const observer = new IntersectionObserver(
        (entries, observerInstance) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("visible");
                observerInstance.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -45px 0px"
        }
    );

    elements.forEach((element) => observer.observe(element));
}

/* =========================================================
   NAVIGATION
   ========================================================= */

function initNavigation() {
    const menu = $(".mobile-menu");
    const navigation = $(".navigation");

    if (!menu || !navigation) return;

    menu.setAttribute("aria-expanded", "false");

    const closeMenu = () => {
        navigation.classList.remove("open");
        menu.setAttribute("aria-expanded", "false");
    };

    menu.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");

        menu.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });

    $$(".navigation a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
        if (
            !navigation.contains(event.target) &&
            !menu.contains(event.target)
        ) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 760) {
            closeMenu();
        }
    });
}

/* =========================================================
   SMOOTH SCROLLING
   ========================================================= */

function initSmoothScrolling() {
    $$('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#" ||
                targetId.length < 2
            ) {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            const header = $(".site-header");
            const offset = header
                ? header.offsetHeight + 10
                : 10;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                offset;

            window.scrollTo({
                top: Math.max(0, targetPosition),
                behavior: "smooth"
            });

            history.replaceState(
                null,
                "",
                targetId
            );
        });
    });
}

/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

function initActiveNavigation() {
    const links = $$(".navigation a");

    if (!links.length) return;

    const sections = links
        .map((link) => {
            const href = link.getAttribute("href");

            if (!href || !href.startsWith("#")) {
                return null;
            }

            return document.querySelector(href);
        })
        .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const id = entry.target.id;

                links.forEach((link) => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${id}`
                    );
                });
            });
        },
        {
            rootMargin: "-35% 0px -55% 0px",
            threshold: 0
        }
    );

    sections.forEach((section) => observer.observe(section));
}

/* =========================================================
   BUTTON FEEDBACK
   ========================================================= */

function initButtonFeedback() {
    const buttons = $$(
        ".button, .download-button, .project-link, .final-button"
    );

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            button.classList.remove("is-clicked");

            requestAnimationFrame(() => {
                button.classList.add("is-clicked");
            });

            setTimeout(() => {
                button.classList.remove("is-clicked");
            }, 400);
        });
    });
}

/* =========================================================
   HERO PARALLAX
   ========================================================= */

function initHeroParallax() {
    const visual = $(".hero-visual");

    if (!visual) return;

    if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        window.matchMedia("(pointer: coarse)").matches
    ) {
        return;
    }

    let animationFrame = null;
    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener("mousemove", (event) => {
        mouseX =
            (event.clientX / window.innerWidth - 0.5) * 2;

        mouseY =
            (event.clientY / window.innerHeight - 0.5) * 2;

        if (animationFrame) return;

        animationFrame = requestAnimationFrame(() => {
            visual.style.transform =
                `translate(${mouseX * 7}px, ${mouseY * 7}px)`;

            animationFrame = null;
        });
    }, { passive: true });
}

/* =========================================================
   PROJECT INTERACTIONS
   ========================================================= */

function initProjectInteractions() {
    const cards = $$(".featured-project, .ai-project");

    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.borderColor =
                "rgba(215, 166, 42, 0.24)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.borderColor = "";
        });
    });

    /*
     * Small movement inside project visuals.
     * Disabled on touch devices.
     */
    if (window.matchMedia("(pointer: coarse)").matches) {
        return;
    }

    cards.forEach((card) => {
        const visual = $(".project-visual", card);

        if (!visual) return;

        visual.addEventListener("mousemove", (event) => {
            const rect = visual.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width -
                0.5;

            const y =
                (event.clientY - rect.top) /
                rect.height -
                0.5;

            const symbol = $(".project-symbol", visual);
            const core = $(".ai-project-core", visual);

            if (symbol) {
                symbol.style.transform =
                    `translate(-50%, -50%) rotate(45deg) translate(${x * 10}px, ${y * 10}px)`;
            }

            if (core) {
                core.style.transform =
                    `translate(calc(-50% + ${x * 10}px), calc(-50% + ${y * 10}px))`;
            }
        });

        visual.addEventListener("mouseleave", () => {
            const symbol = $(".project-symbol", visual);
            const core = $(".ai-project-core", visual);

            if (symbol) {
                symbol.style.transform =
                    "translate(-50%, -50%) rotate(45deg)";
            }

            if (core) {
                core.style.transform =
                    "translate(-50%, -50%)";
            }
        });
    });
}

/* =========================================================
   CROWN A.I STATUS
   ========================================================= */

function initAIStatus() {
    const statusElements = $$(".ai-status-main span, .ai-badge");

    if (!statusElements.length) return;

    /*
     * Keeps the status alive without pretending
     * to perform a real backend health check.
     */
    const messages = [
        "Crown A.I online",
        "Crown intelligence active",
        "Crown system ready"
    ];

    let index = 0;

    const mainStatus =
        $(".ai-status-main span");

    if (!mainStatus) return;

    setInterval(() => {
        index = (index + 1) % messages.length;

        mainStatus.style.opacity = "0";

        setTimeout(() => {
            mainStatus.textContent = messages[index];
            mainStatus.style.opacity = "1";
        }, 220);
    }, 4200);
}

/* =========================================================
   CROWNVERSE EFFECTS
   ========================================================= */

function initCrownverseEffects() {
    const section = $(".crownverse-section");
    const card = $(".crownverse-card");

    if (!section || !card) return;

    if (
        window.matchMedia("(pointer: coarse)").matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
        return;
    }

    section.addEventListener("mousemove", (event) => {
        const rect = section.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width -
            0.5;

        const y =
            (event.clientY - rect.top) /
            rect.height -
            0.5;

        card.style.transform =
            `perspective(900px) rotateX(${y * -3}deg) rotateY(${x * 3}deg)`;
    });

    section.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
}

/* =========================================================
   MUSIC PLAYER
   ========================================================= */

function initMusicPlayer() {
    const musicSection = $(".music-section");

    if (!musicSection) return;

    const audio =
        $("audio", musicSection) ||
        $("audio");

    const playButton =
        $(".play-btn", musicSection);

    const previousButton =
        $(".previous-btn", musicSection);

    const nextButton =
        $(".next-btn", musicSection);

    const shuffleButton =
        $(".shuffle-btn", musicSection);

    const repeatButton =
        $(".repeat-btn", musicSection);

    const progress =
        $(".progress-bar", musicSection);

    const volume =
        $(".volume-bar", musicSection);

    const currentTime =
        $(".current-time", musicSection);

    const duration =
        $(".duration", musicSection);

    const title =
        $(".player-title", musicSection);

    const artist =
        $(".player-artist", musicSection);

    const cover =
        $(".player-cover", musicSection);

    const cards =
        $$(".music-card", musicSection);

    /*
     * If there is no audio element, keep the visual
     * player functional without generating errors.
     */
    if (!audio) {
        cards.forEach((card) => {
            card.addEventListener("click", () => {
                selectMusicCard(card, null);
            });
        });

        return;
    }

    const tracks = cards.map((card, index) => {
        const source =
            card.dataset.src ||
            card.getAttribute("data-audio") ||
            $("audio source", card)?.getAttribute("src") ||
            card.querySelector("[data-src]")?.dataset.src ||
            null;

        const trackTitle =
            card.dataset.title ||
            $(".music-card-information strong", card)?.textContent?.trim() ||
            `Crown Track ${index + 1}`;

        const trackArtist =
            card.dataset.artist ||
            $(".music-card-information span", card)?.textContent?.trim() ||
            "Crown Music";

        const trackCover =
            card.dataset.cover ||
            $(".music-card-cover", card)?.getAttribute("src") ||
            null;

        return {
            source,
            title: trackTitle,
            artist: trackArtist,
            cover: trackCover,
            element: card
        };
    });

    let currentTrack = 0;
    let shuffle = false;
    let repeat = false;

    function formatTime(seconds) {
        if (!Number.isFinite(seconds)) {
            return "0:00";
        }

        const minutes = Math.floor(seconds / 60);
        const remaining =
            Math.floor(seconds % 60)
                .toString()
                .padStart(2, "0");

        return `${minutes}:${remaining}`;
    }

    function updateTime() {
        if (currentTime) {
            currentTime.textContent =
                formatTime(audio.currentTime);
        }

        if (duration) {
            duration.textContent =
                formatTime(audio.duration);
        }

        if (progress && Number.isFinite(audio.duration)) {
            progress.value =
                String(
                    (audio.currentTime / audio.duration) * 100
                );
        }
    }

    function updatePlayButton() {
        if (!playButton) return;

        playButton.textContent =
            audio.paused ? "▶" : "Ⅱ";

        playButton.setAttribute(
            "aria-label",
            audio.paused ? "Play track" : "Pause track"
        );
    }

    function updateTrackUI(track) {
        if (!track) return;

        if (title) {
            title.textContent = track.title;
        }

        if (artist) {
            artist.textContent = track.artist;
        }

        if (cover && track.cover) {
            cover.src = track.cover;
        }

        cards.forEach((card) => {
            card.classList.toggle(
                "active",
                card === track.element
            );
        });
    }

    function loadTrack(index, autoplay = false) {
        if (!tracks.length) return;

        if (index < 0) {
            index = tracks.length - 1;
        }

        if (index >= tracks.length) {
            index = 0;
        }

        currentTrack = index;

        const track = tracks[currentTrack];

        updateTrackUI(track);

        if (track.source) {
            audio.src = track.source;
            audio.load();

            if (autoplay) {
                const playPromise = audio.play();

                if (playPromise?.catch) {
                    playPromise.catch(() => {});
                }
            }
        }

        updatePlayButton();
    }

    function selectMusicCard(card, autoplay = true) {
        const index = tracks.findIndex(
            (track) => track.element === card
        );

        if (index === -1) return;

        loadTrack(index, autoplay);
    }

    if (playButton) {
        playButton.addEventListener("click", () => {
            if (!audio.src) {
                loadTrack(currentTrack, true);
                return;
            }

            if (audio.paused) {
                const promise = audio.play();

                if (promise?.catch) {
                    promise.catch(() => {});
                }
            } else {
                audio.pause();
            }
        });
    }

    if (previousButton) {
        previousButton.addEventListener("click", () => {
            loadTrack(currentTrack - 1, true);
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            if (shuffle && tracks.length > 1) {
                let next;

                do {
                    next =
                        Math.floor(
                            Math.random() * tracks.length
                        );
                } while (next === currentTrack);

                loadTrack(next, true);
            } else {
                loadTrack(currentTrack + 1, true);
            }
        });
    }

    if (shuffleButton) {
        shuffleButton.addEventListener("click", () => {
            shuffle = !shuffle;

            shuffleButton.classList.toggle(
                "active",
                shuffle
            );

            shuffleButton.setAttribute(
                "aria-pressed",
                String(shuffle)
            );
        });
    }

    if (repeatButton) {
        repeatButton.addEventListener("click", () => {
            repeat = !repeat;

            repeatButton.classList.toggle(
                "active",
                repeat
            );

            repeatButton.setAttribute(
                "aria-pressed",
                String(repeat)
            );
        });
    }

    if (progress) {
        progress.addEventListener("input", () => {
            if (!Number.isFinite(audio.duration)) return;

            audio.currentTime =
                (Number(progress.value) / 100) *
                audio.duration;
        });
    }

    if (volume) {
        const initialVolume =
            Number(volume.value);

        if (Number.isFinite(initialVolume)) {
            audio.volume =
                Math.min(1, Math.max(0, initialVolume / 100));
        }

        volume.addEventListener("input", () => {
            const value =
                Number(volume.value);

            if (!Number.isFinite(value)) return;

            audio.volume =
                Math.min(1, Math.max(0, value / 100));
        });
    }

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            selectMusicCard(card, true);
        });
    });

    audio.addEventListener("timeupdate", updateTime);

    audio.addEventListener("loadedmetadata", updateTime);

    audio.addEventListener("play", updatePlayButton);

    audio.addEventListener("pause", updatePlayButton);

    audio.addEventListener("ended", () => {
        if (repeat) {
            audio.currentTime = 0;

            const promise = audio.play();

            if (promise?.catch) {
                promise.catch(() => {});
            }

            return;
        }

        if (shuffle && tracks.length > 1) {
            let next;

            do {
                next =
                    Math.floor(
                        Math.random() * tracks.length
                    );
            } while (next === currentTrack);

            loadTrack(next, true);
            return;
        }

        loadTrack(currentTrack + 1, true);
    });

    /*
     * Download currently selected track.
     */
    const downloadButton =
        $(".download-btn", musicSection);

    if (downloadButton) {
        downloadButton.addEventListener("click", () => {
            const track = tracks[currentTrack];

            if (!track?.source) return;

            const link =
                document.createElement("a");

            link.href = track.source;
            link.download =
                `${track.title.replace(/[^\w\s-]/g, "").trim()}.mp3`;

            document.body.appendChild(link);
            link.click();
            link.remove();
        });
    }

    if (tracks.length) {
        loadTrack(0, false);
    }

    updatePlayButton();
}

/* =========================================================
   YEAR
   ========================================================= */

function initYear() {
    const year = String(new Date().getFullYear());

    $$("[data-year]").forEach((element) => {
        element.textContent = year;
    });
}

/* =========================================================
   EXTERNAL LINK SAFETY
   ========================================================= */

function initExternalLinks() {
    $$("a[href]").forEach((link) => {
        const href = link.getAttribute("href");

        if (!href) return;

        if (
            href.startsWith("http://") ||
            href.startsWith("https://")
        ) {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer");
        }
    });
}

safe(initExternalLinks);

/* =========================================================
   IMAGE FALLBACK
   ========================================================= */

function initImageFallbacks() {
    $$("img").forEach((image) => {
        image.addEventListener("error", () => {
            /*
             * Do not replace Crown branding with a random image.
             * Instead, keep the element visually clean.
             */
            image.classList.add("image-load-error");
        });
    });
}

safe(initImageFallbacks);

/* =========================================================
   KEYBOARD ACCESSIBILITY
   ========================================================= */

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    const navigation = $(".navigation");
    const menu = $(".mobile-menu");

    if (!navigation || !menu) return;

    navigation.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
});

/* =========================================================
   VISIBILITY PERFORMANCE
   ========================================================= */

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        return;
    }

    /*
     * When the user returns to the page, refresh the
     * progress indicator immediately.
     */
    const progress = $(".scroll-progress");

    if (!progress) return;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const amount =
        documentHeight > 0
            ? (window.scrollY / documentHeight) * 100
            : 0;

    progress.style.width =
        `${Math.min(100, Math.max(0, amount))}%`;
});

/* =========================================================
   CROWNLABS READY
   ========================================================= */

console.log(
    "%cCROWNLABS",
    "color:#d7a62a;font-size:22px;font-weight:800;"
);

console.log(
    "%cTechnology Beyond Limits.",
    "color:#f4f4f2;font-size:12px;"
);
