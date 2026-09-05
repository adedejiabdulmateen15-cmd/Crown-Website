// ==========================================
// CROWNLABS — CROWN MUSIC PLAYER
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    const audio = new Audio();

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

    let currentTrack = 0;
    let isPlaying = false;
    let isShuffle = false;
    let isRepeat = false;

    // ------------------------------------------
    // Find music elements on the page
    // ------------------------------------------

    const musicSection = document.querySelector("#music");

    if (!musicSection) {
        console.log("Crown Music section not found yet.");
        return;
    }

    const player = musicSection.querySelector(".music-player");

    if (!player) {
        console.log("Crown Music player not found yet.");
        return;
    }

    const playButton = player.querySelector(".play-btn");
    const previousButton = player.querySelector(".previous-btn");
    const nextButton = player.querySelector(".next-btn");
    const shuffleButton = player.querySelector(".shuffle-btn");
    const repeatButton = player.querySelector(".repeat-btn");
    const downloadButton = player.querySelector(".download-btn");

    const progressBar = player.querySelector(".progress-bar");
    const volumeBar = player.querySelector(".volume-bar");

    const playerCover = player.querySelector(".player-cover");
    const playerTitle = player.querySelector(".player-title");
    const playerArtist = player.querySelector(".player-artist");
    const currentTimeElement = player.querySelector(".current-time");
    const durationElement = player.querySelector(".duration");

    // ------------------------------------------
    // Utility
    // ------------------------------------------

    function formatTime(seconds) {
        if (!Number.isFinite(seconds)) {
            return "0:00";
        }

        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);

        return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
    }

    // ------------------------------------------
    // Load track
    // ------------------------------------------

    function loadTrack(index) {
        currentTrack = index;

        const track = tracks[currentTrack];

        audio.src = track.file;
        audio.load();

        if (playerCover) {
            playerCover.src = track.cover;
            playerCover.alt = `${track.title} cover`;
        }

        if (playerTitle) {
            playerTitle.textContent = track.title;
        }

        if (playerArtist) {
            playerArtist.textContent = track.artist;
        }

        if (progressBar) {
            progressBar.value = 0;
        }

        if (currentTimeElement) {
            currentTimeElement.textContent = "0:00";
        }

        if (durationElement) {
            durationElement.textContent = "0:00";
        }

        updateTrackCards();
        updatePlayButton();
    }

    // ------------------------------------------
    // Play / Pause
    // ------------------------------------------

    async function togglePlay() {
        try {
            if (audio.paused) {
                await audio.play();
                isPlaying = true;
            } else {
                audio.pause();
                isPlaying = false;
            }

            updatePlayButton();
        } catch (error) {
            console.error("Crown Music playback error:", error);
        }
    }

    function updatePlayButton() {
        if (!playButton) return;

        playButton.textContent = audio.paused ? "▶" : "Ⅱ";
        playButton.setAttribute(
            "aria-label",
            audio.paused ? "Play music" : "Pause music"
        );
    }

    // ------------------------------------------
    // Previous
    // ------------------------------------------

    function previousTrack() {
        if (audio.currentTime > 3) {
            audio.currentTime = 0;
            return;
        }

        currentTrack--;

        if (currentTrack < 0) {
            currentTrack = tracks.length - 1;
        }

        loadTrack(currentTrack);

        if (isPlaying) {
            audio.play().catch(() => {});
        }
    }

    // ------------------------------------------
    // Next
    // ------------------------------------------

    function nextTrack() {
        if (isShuffle) {
            let nextIndex;

            do {
                nextIndex = Math.floor(Math.random() * tracks.length);
            } while (tracks.length > 1 && nextIndex === currentTrack);

            currentTrack = nextIndex;
        } else {
            currentTrack++;

            if (currentTrack >= tracks.length) {
                currentTrack = 0;
            }
        }

        loadTrack(currentTrack);

        if (isPlaying) {
            audio.play().catch(() => {});
        }
    }

    // ------------------------------------------
    // Track cards
    // ------------------------------------------

    function updateTrackCards() {
        const cards = musicSection.querySelectorAll("[data-track]");

        cards.forEach(card => {
            const cardTrack = Number(card.dataset.track);

            card.classList.toggle(
                "active",
                cardTrack === currentTrack
            );
        });
    }

    // ------------------------------------------
    // Progress
    // ------------------------------------------

    audio.addEventListener("loadedmetadata", () => {
        if (durationElement) {
            durationElement.textContent = formatTime(audio.duration);
        }

        if (progressBar) {
            progressBar.max = audio.duration || 0;
        }
    });

    audio.addEventListener("timeupdate", () => {
        if (progressBar) {
            progressBar.value = audio.currentTime;
        }

        if (currentTimeElement) {
            currentTimeElement.textContent =
                formatTime(audio.currentTime);
        }
    });

    if (progressBar) {
        progressBar.addEventListener("input", () => {
            audio.currentTime = Number(progressBar.value);
        });
    }

    // ------------------------------------------
    // When song ends
    // ------------------------------------------

    audio.addEventListener("ended", () => {
        if (isRepeat) {
            audio.currentTime = 0;
            audio.play().catch(() => {});
            return;
        }

        nextTrack();
    });

    // ------------------------------------------
    // Volume
    // ------------------------------------------

    if (volumeBar) {
        audio.volume = Number(volumeBar.value);

        volumeBar.addEventListener("input", () => {
            audio.volume = Number(volumeBar.value);
        });
    } else {
        audio.volume = 0.8;
    }

    // ------------------------------------------
    // Shuffle
    // ------------------------------------------

    if (shuffleButton) {
        shuffleButton.addEventListener("click", () => {
            isShuffle = !isShuffle;

            shuffleButton.classList.toggle("active", isShuffle);
            shuffleButton.setAttribute(
                "aria-pressed",
                String(isShuffle)
            );
        });
    }

    // ------------------------------------------
    // Repeat
    // ------------------------------------------

    if (repeatButton) {
        repeatButton.addEventListener("click", () => {
            isRepeat = !isRepeat;

            repeatButton.classList.toggle("active", isRepeat);
            repeatButton.setAttribute(
                "aria-pressed",
                String(isRepeat)
            );
        });
    }

    // ------------------------------------------
    // Download
    // ------------------------------------------

    if (downloadButton) {
        downloadButton.addEventListener("click", () => {
            const track = tracks[currentTrack];

            const link = document.createElement("a");

            link.href = track.file;
            link.download = `${track.title.toLowerCase()}.mp3`;

            document.body.appendChild(link);
            link.click();
            link.remove();
        });
    }

    // ------------------------------------------
    // Buttons
    // ------------------------------------------

    if (playButton) {
        playButton.addEventListener("click", togglePlay);
    }

    if (previousButton) {
        previousButton.addEventListener("click", previousTrack);
    }

    if (nextButton) {
        nextButton.addEventListener("click", nextTrack);
    }

    // ------------------------------------------
    // Clicking a music card
    // ------------------------------------------

    const trackCards = musicSection.querySelectorAll("[data-track]");

    trackCards.forEach(card => {
        card.addEventListener("click", () => {
            const index = Number(card.dataset.track);

            if (!Number.isInteger(index)) {
                return;
            }

            loadTrack(index);

            isPlaying = true;

            audio.play()
                .then(() => {
                    updatePlayButton();
                })
                .catch(error => {
                    console.error(
                        "Unable to play Crown Music track:",
                        error
                    );
                    isPlaying = false;
                    updatePlayButton();
                });
        });
    });

    // ------------------------------------------
    // Keyboard controls
    // ------------------------------------------

    document.addEventListener("keydown", event => {
        const tag = event.target.tagName;

        if (
            tag === "INPUT" ||
            tag === "TEXTAREA" ||
            tag === "BUTTON"
        ) {
            return;
        }

        if (event.code === "Space") {
            event.preventDefault();
            togglePlay();
        }

        if (event.code === "ArrowRight") {
            audio.currentTime = Math.min(
                audio.currentTime + 5,
                audio.duration || audio.currentTime
            );
        }

        if (event.code === "ArrowLeft") {
            audio.currentTime = Math.max(
                audio.currentTime - 5,
                0
            );
        }
    });

    // ------------------------------------------
    // Audio state
    // ------------------------------------------

    audio.addEventListener("play", () => {
        isPlaying = true;
        updatePlayButton();
    });

    audio.addEventListener("pause", () => {
        isPlaying = false;
        updatePlayButton();
    });

    audio.addEventListener("error", () => {
        console.error(
            "Crown Music could not load:",
            tracks[currentTrack].file
        );
    });

    // ------------------------------------------
    // Start with STARS
    // ------------------------------------------

    loadTrack(0);

    console.log("👑 Crown Music initialized.");
});
