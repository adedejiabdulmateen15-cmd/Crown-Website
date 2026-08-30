/* =========================================================
   CROWNLABS
   MAIN DESIGN SYSTEM
========================================================= */

:root {

    --black: #050505;
    --black-soft: #0b0b0b;
    --black-card: #101010;

    --gold: #ffc400;
    --gold-light: #ffe477;
    --gold-dark: #9a7000;

    --white: #f5f5f5;
    --silver: #a9a9a9;
    --gray: #666;
    --dark-gray: #242424;

    --border: rgba(255, 196, 0, 0.22);

}


/* =========================================================
   RESET
========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {

    background: var(--black);

    color: var(--white);

    font-family:
        Arial,
        Helvetica,
        sans-serif;

    min-height: 100vh;

    overflow-x: hidden;

}


/* =========================================================
   BACKGROUND
========================================================= */

.background-grid {

    position: fixed;

    inset: 0;

    pointer-events: none;

    background-image:

        linear-gradient(
            rgba(255,255,255,0.025) 1px,
            transparent 1px
        ),

        linear-gradient(
            90deg,
            rgba(255,255,255,0.025) 1px,
            transparent 1px
        );

    background-size: 50px 50px;

    mask-image:
        linear-gradient(
            to bottom,
            black,
            transparent 85%
        );

    z-index: -3;

}


.background-glow {

    position: fixed;

    width: 450px;

    height: 450px;

    border-radius: 50%;

    background:
        rgba(255,196,0,0.07);

    filter: blur(110px);

    pointer-events: none;

    z-index: -2;

}


.glow-left {

    left: -250px;

    top: 20%;

}


.glow-right {

    right: -250px;

    top: 60%;

}


/* =========================================================
   GLOBAL
========================================================= */

.container {

    width: min(1180px, 92%);

    margin: auto;

}


a {

    transition: 0.25s ease;

}


.section-label {

    color: var(--gold);

    font-size: 9px;

    font-weight: 900;

    letter-spacing: 3px;

}


.button {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 15px;

    padding: 15px 21px;

    border-radius: 9px;

    text-decoration: none;

    font-size: 10px;

    font-weight: 900;

    letter-spacing: 1.3px;

}


.button-gold {

    background: var(--gold);

    color: #050505;

    box-shadow:
        0 0 35px
        rgba(255,196,0,0.13);

}


.button-gold:hover {

    background: white;

    transform: translateY(-3px);

}


.button-gold span {

    font-size: 18px;

}


.button-outline {

    border: 1px solid #292929;

    color: #999;

}


.button-outline:hover {

    border-color: var(--gold);

    color: var(--gold);

}


/* =========================================================
   HEADER
========================================================= */

.site-header {

    position: sticky;

    top: 0;

    z-index: 100;

    padding-top: 18px;

}


.header-inner {

    min-height: 70px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 10px 14px;

    border:
        1px solid
        rgba(255,196,0,0.18);

    border-radius: 17px;

    background:
        rgba(5,5,5,0.82);

    backdrop-filter: blur(18px);

}


.brand {

    display: flex;

    align-items: center;

    gap: 10px;

    text-decoration: none;

    color: white;

}


.brand img {

    width: 43px;

    height: 43px;

    object-fit: contain;

}


.brand-text {

    display: flex;

    flex-direction: column;

}


.brand-text strong {

    font-size: 16px;

    letter-spacing: 2px;

}


.brand-text strong span {

    color: var(--gold);

}


.brand-text small {

    color: #555;

    font-size: 7px;

    letter-spacing: 2px;

    margin-top: 4px;

}


.navigation {

    display: flex;

    gap: 32px;

}


.navigation a {

    color: #777;

    text-decoration: none;

    font-size: 10px;

    font-weight: 900;

    letter-spacing: 2px;

}


.navigation a:hover {

    color: var(--gold);

}


.header-button {

    padding: 11px 17px;

    background: var(--gold);

    color: #050505;

    border-radius: 8px;

    text-decoration: none;

    font-size: 9px;

    font-weight: 900;

    letter-spacing: 1px;

}


/* =========================================================
   HERO
========================================================= */

.hero {

    min-height: 680px;

}


.hero-layout {

    min-height: 680px;

    display: grid;

    grid-template-columns:
        1.1fr
        0.9fr;

    align-items: center;

    gap: 40px;

}


.hero-content {

    padding: 60px 0;

}


.online-status {

    display: inline-flex;

    align-items: center;

    gap: 8px;

    padding: 8px 12px;

    margin-bottom: 25px;

    border:
        1px solid
        rgba(255,196,0,0.2);

    border-radius: 30px;

    color: #aaa;

    font-size: 8px;

    font-weight: 900;

    letter-spacing: 2px;

}


.online-status span {

    width: 6px;

    height: 6px;

    border-radius: 50%;

    background: var(--gold);

    box-shadow:
        0 0 12px
        var(--gold);

}


.hero h1 {

    margin-top: 16px;

    font-size:
        clamp(52px, 7vw, 88px);

    line-height: 0.96;

    letter-spacing: -4px;

    font-weight: 900;

}


.hero h1 span {

    display: block;

    color: transparent;

    -webkit-text-stroke:
        1px
        var(--gold);

}


.hero-description {

    max-width: 580px;

    margin-top: 25px;

    color: #888;

    font-size: 16px;

    line-height: 1.7;

}


.hero-actions {

    display: flex;

    flex-wrap: wrap;

    gap: 12px;

    margin-top: 32px;

}


/* =========================================================
   HERO LOGO
========================================================= */

.hero-visual {

    position: relative;

    min-height: 480px;

    display: flex;

    align-items: center;

    justify-content: center;

}


.hero-crown {

    width: min(370px, 80%);

    position: relative;

    z-index: 3;

    filter:
        drop-shadow(
            0 0 25px
            rgba(255,196,0,0.25)
        )
        drop-shadow(
            0 30px 35px
            rgba(0,0,0,0.8)
        );

    animation:
        crownFloat 5s ease-in-out infinite;

}


.logo-circle {

    position: absolute;

    width: 410px;

    height: 410px;

    border-radius: 50%;

    border:
        1px solid
        rgba(255,196,0,0.18);

}


.logo-circle-small {

    position: absolute;

    width: 300px;

    height: 300px;

    border-radius: 50%;

    border:
        1px dashed
        rgba(255,196,0,0.12);

}


.logo-caption {

    position: absolute;

    bottom: 25px;

    z-index: 5;

    display: flex;

    flex-direction: column;

    align-items: center;

}


.logo-caption strong {

    color: var(--gold);

    font-size: 11px;

    letter-spacing: 5px;

}


.logo-caption span {

    color: #555;

    font-size: 7px;

    letter-spacing: 3px;

    margin-top: 5px;

}


@keyframes crownFloat {

    0%, 100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-12px);
    }

}


/* =========================================================
   STATS
========================================================= */

.stats-section {

    margin-bottom: 110px;

}


.stats-grid {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    border-top:
        1px solid
        #222;

    border-bottom:
        1px solid
        #222;

}


.stat {

    padding: 25px;

    border-right:
        1px solid
        #222;

}


.stat:last-child {

    border-right: none;

}


.stat strong {

    display: block;

    color: var(--gold);

    font-size: 21px;

    margin-bottom: 7px;

}


.stat span {

    color: #555;

    font-size: 8px;

    font-weight: 900;

    letter-spacing: 2px;

}


/* =========================================================
   PROJECT SECTION
========================================================= */

.projects-section {

    padding-bottom: 120px;

}


.section-heading {

    display: flex;

    justify-content: space-between;

    align-items: end;

    gap: 30px;

    margin-bottom: 35px;

}


.section-heading h2 {

    margin-top: 12px;

    font-size:
        clamp(35px, 5vw, 55px);

    letter-spacing: -3px;

}


.section-heading h2 span {

    color: var(--gold);

}


.section-intro {

    max-width: 330px;

    color: #666;

    font-size: 12px;

    line-height: 1.7;

}


/* =========================================================
   PROJECT CARD
========================================================= */

.project-card {

    display: grid;

    grid-template-columns:
        0.72fr
        1.28fr;

    min-height: 420px;

    overflow: hidden;

    border:
        1px solid
        #252525;

    border-radius: 20px;

    background:
        linear-gradient(
            120deg,
            rgba(255,196,0,0.055),
            transparent 35%
        ),
        #0b0b0b;

    box-shadow:
        0 30px 80px
        rgba(0,0,0,0.35);

}


/* PROJECT VISUAL */

.project-visual {

    position: relative;

    display: flex;

    align-items: center;

    justify-content: center;

    background:
        radial-gradient(
            circle,
            rgba(255,196,0,0.1),
            transparent 60%
        ),
        #070707;

    border-right:
        1px solid
        #252525;

}


.project-number {

    position: absolute;

    top: 20px;

    left: 22px;

    color: var(--gold);

    font-size: 10px;

    font-weight: 900;

    letter-spacing: 2px;

}


.project-icon {

    width: 145px;

    height: 145px;

    display: flex;

    align-items: center;

    justify-content: center;

    border:
        1px solid
        rgba(255,196,0,0.35);

    border-radius: 25px;

    background:
        rgba(255,196,0,0.035);

    font-size: 55px;

    box-shadow:
        0 0 50px
        rgba(255,196,0,0.07);

    position: relative;

    z-index: 2;

}


.project-line {

    position: absolute;

    left: 0;

    right: 0;

    top: 50%;

    height: 1px;

    background:
        rgba(255,196,0,0.18);

}


/* PROJECT INFORMATION */

.project-information {

    padding: 45px;

}


.project-header {

    display: flex;

    justify-content: space-between;

}


.project-type {

    color: var(--gold);

    font-size: 9px;

    font-weight: 900;

    letter-spacing: 2px;

}


.project-version {

    color: #555;

    font-size: 9px;

}


.project-information h3 {

    margin:
        25px 0
        17px;

    font-size:
        clamp(30px, 4vw, 48px);

    line-height: 1;

    letter-spacing: -2px;

}


.project-information h3 span {

    display: block;

    color: var(--gold);

}


.project-information > p {

    color: #777;

    max-width: 600px;

    font-size: 13px;

    line-height: 1.7;

}


.project-specs {

    display: flex;

    gap: 35px;

    flex-wrap: wrap;

    margin:
        27px 0;

    padding:
        19px 0;

    border-top:
        1px solid
        #242424;

    border-bottom:
        1px solid
        #242424;

}


.project-specs div {

    display: flex;

    flex-direction: column;

    gap: 6px;

}


.project-specs small {

    color: #555;

    font-size: 7px;

    font-weight: 900;

    letter-spacing: 1.5px;

}


.project-specs strong {

    font-size: 9px;

    letter-spacing: 1px;

}


.project-specs .released {

    color: var(--gold);

}


.download-button {

    display: inline-flex;

    align-items: center;

    gap: 12px;

    padding:
        14px 18px;

    border-radius: 8px;

    background: var(--gold);

    color: #050505;

    text-decoration: none;

    font-size: 9px;

    font-weight: 900;

    letter-spacing: 1px;

}


.download-button:hover {

    background: white;

    transform: translateY(-2px);

}


.download-button span {

    font-size: 19px;

}


/* =========================================================
   FUTURE PROJECT
========================================================= */

.future-project {

    display: flex;

    align-items: center;

    gap: 22px;

    margin-top: 18px;

    padding: 25px 28px;

    border:
        1px dashed
        #292929;

    border-radius: 14px;

}


.future-icon {

    font-size: 32px;

}


.future-content h3 {

    margin:
        6px 0;

    font-size: 18px;

}


.future-content h3 span {

    color: var(--gold);

}


.future-content > p:last-child {

    color: #555;

    font-size: 11px;

    line-height: 1.5;

}


.future-arrow {

    margin-left: auto;

    color: var(--gold);

    font-size: 25px;

}


/* =========================================================
   ABOUT
========================================================= */

.about-section {

    padding:
        100px 0;

    border-top:
        1px solid
        #202020;

}


.about-layout {

    display: grid;

    grid-template-columns:
        0.75fr
        1.25fr;

    align-items: center;

    gap: 70px;

}


.about-logo {

    display: flex;

    justify-content: center;

}


.about-logo img {

    width: 280px;

    filter:
        drop-shadow(
            0 0 35px
            rgba(255,196,0,0.18)
        );

}


.about-content h2 {

    margin-top: 12px;

    font-size:
        clamp(38px, 5vw, 58px);

    line-height: 1;

    letter-spacing: -3px;

}


.about-content h2 span {

    display: block;

    color: var(--gold);

}


.about-content > p:not(.section-label) {

    margin-top: 25px;

    max-width: 620px;

    color: #777;

    font-size: 14px;

    line-height: 1.8;

}


.about-divider {

    height: 1px;

    background: #222;

    margin:
        30px 0
        18px;

}


.about-info {

    display: flex;

    align-items: center;

    gap: 10px;

    color: #555;

    font-size: 9px;

    letter-spacing: 2px;

}


.about-info strong {

    color: var(--gold);

}


/* =========================================================
   FINAL
========================================================= */

.final-section {

    padding:
        100px 0;

    text-align: center;

    border-top:
        1px solid
        #1c1c1c;

    background:
        radial-gradient(
            circle at center,
            rgba(255,196,0,0.07),
            transparent 60%
        );

}


.final-content {

    display: flex;

    flex-direction: column;

    align-items: center;

}


.final-content img {

    width: 90px;

    margin-bottom: 18px;

    filter:
        drop-shadow(
            0 0 25px
            rgba(255,196,0,0.2)
        );

}


.final-content > p {

    color: var(--gold);

    font-size: 9px;

    font-weight: 900;

    letter-spacing: 5px;

}


.final-content h2 {

    margin:
        18px 0
        30px;

    font-size:
        clamp(32px, 5vw, 60px);

    line-height: 1;

    letter-spacing: -3px;

}


.final-content h2 span {

    display: block;

    color: var(--gold);

}


/* =========================================================
   FOOTER
========================================================= */

.site-footer {

    border-top:
        1px solid
        #202020;

}


.footer-inner {

    min-height: 90px;

    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 25px;

}


.footer-brand {

    display: flex;

    align-items: center;

    gap: 10px;

}


.footer-brand img {

    width: 38px;

    height: 38px;

}


.footer-brand div {

    display: flex;

    flex-direction: column;

}


.footer-brand strong {

    color: #aaa;

    font-size: 11px;

    letter-spacing: 2px;

}


.footer-brand small {

    color: #444;

    font-size: 7px;

    letter-spacing: 1.5px;

    margin-top: 4px;

}


.footer-inner > p {

    color: #444;

    font-size: 9px;

}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 850px) {


    .navigation {

        gap: 15px;

    }


    .hero-layout {

        grid-template-columns: 1fr;

        text-align: center;

    }


    .hero-content {

        display: flex;

        flex-direction: column;

        align-items: center;

    }


    .hero-visual {

        min-height: 420px;

    }


    .stats-grid {

        grid-template-columns:
            repeat(2, 1fr);

    }


    .stat:nth-child(2) {

        border-right: none;

    }


    .stat:nth-child(3),
    .stat:nth-child(4) {

        border-top:
            1px solid
            #222;

    }


    .section-heading {

        align-items: flex-start;

        flex-direction: column;

    }


    .project-card {

        grid-template-columns: 1fr;

    }


    .project-visual {

        min-height: 270px;

        border-right: none;

        border-bottom:
            1px solid
            #252525;

    }


    .about-layout {

        grid-template-columns: 1fr;

        text-align: center;

    }


    .about-content > p:not(.section-label) {

        margin-left: auto;

        margin-right: auto;

    }


    .about-info {

        justify-content: center;

    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 560px) {


    .container {

        width: 90%;

    }


    .header-button {

        display: none;

    }


    .navigation {

        gap: 12px;

    }


    .navigation a {

        font-size: 8px;

    }


    .hero {

        min-height: auto;

    }


    .hero-layout {

        min-height: auto;

        padding-top: 50px;

    }


    .hero h1 {

        font-size: 48px;

        letter-spacing: -3px;

    }


    .hero-description {

        font-size: 14px;

    }


    .hero-actions {

        flex-direction: column;

        width: 100%;

    }


    .button {

        width: 100%;

    }


    .hero-visual {

        min-height: 330px;

    }


    .hero-crown {

        width: 245px;

    }


    .logo-circle {

        width: 280px;

        height: 280px;

    }


    .logo-circle-small {

        width: 210px;

        height: 210px;

    }


    .stats-grid {

        grid-template-columns: 1fr;

    }


    .stat {

        border-right: none;

        border-bottom:
            1px solid
            #222;

    }


    .stat:nth-child(3),
    .stat:nth-child(4) {

        border-top: none;

    }


    .stat:last-child {

        border-bottom: none;

    }


    .project-information {

        padding: 28px 22px;

    }


    .project-information h3 {

        font-size: 32px;

    }


    .project-specs {

        gap: 18px;

    }


    .download-button {

        width: 100%;

        justify-content: center;

    }


    .future-project {

        align-items: flex-start;

    }


    .future-arrow {

        display: none;

    }


    .about-logo img {

        width: 220px;

    }


    .footer-inner {

        padding:
            25px 0;

        flex-direction: column;

        text-align: center;

    }

}