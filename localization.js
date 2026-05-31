
const IDS = {
    nav: ["nav-header-text", "nav-about-text", "nav-portfolio-text", "nav-cv-text"],
    header: {
        presentation: ["hi", "ami", "career", "me"],
        cards: {
            1: ["portfolio-title", "portfolio-desc", "portfolio-goto"],
            2: ["cv-title", "cv-desc", "cv-goto"]
        }
    },
    about: {
        0: ["about-title"],
        1: ["my-whoami-title", "my-whoami-desc"],
        2: ["my-aspirations-title", "my-aspirations-desc"],
        3: ["my-skills-title", "my-skills-desc"]
    },
    tech: {
        0: ["tech-title"],
        1: ["front-end-title", "front-end-text"],
        2: ["back-end-title", "back-end-text"],
        3: ["os-title", "os-text"],
        4: ["cloud-title", "cloud-tech", "cloud-text"],
        5: ["desktop-title", "desktop-text"],
        6: ["scripting-title", "scripting-text"],
        7: ["other-title", "other-text"],
        8: ["development-so", "development-tools", "development-and"]
    },
    portfolio: {
        0: ["projects-title", "all-projects", "front-end-projects", "desktop-projects", "scripting-projects", "others-projects"],
        1: ["libBasicUI-category", "IPNScheduler-category", "PyWST-category", "PointMotionLib-category", "finbalancpp-category", "clima_mx-category", "IP-Calc-category", "DefendTheClockLib-category", "arpspoofing_tool-category", "pgitHash-category", "escomsole-category", "http_server-category", "ESCOMPong-category"],
        2: ["libBasicUI-description", "IPNScheduler-description", "PyWST-description", "PointMotionLib-description", "finbalancpp-description", "clima_mx-description", "IP-Calc-description", "DefendTheClockLib-description", "arpspoofing_tool-description", "pgitHash-description", "escomsole-description", "http_server-description", "ESCOMPong-description"],
        3: ["libBasicUI-page", "IPNScheduler-page", "PyWST-page", "PointMotionLib-page", "finbalancpp-page", "clima_mx-page", "IP-Calc-page", "DefendTheClockLib-page", "arpspoofing_tool-page", "pgitHash-page", "escomsole-page", "http_server-page", "ESCOMPong-page"],
        4: ["libBasicUI-learn-more", "IPNScheduler-learn-more", "PyWST-learn-more", "PointMotionLib-learn-more", "finbalancpp-learn-more", "clima_mx-learn-more", "IP-Calc-learn-more", "DefendTheClockLib-learn-more", "arpspoofing_tool-learn-more", "pgitHash-learn-more", "escomsole-learn-more", "http_server-learn-more", "ESCOMPong-learn-more"]
    },
    cv: {
        0: ["my-cv", "cv-lang"],
        1: ["education-cv-subtitle", "high-school-level", "high-school", "high-school-program"],
        2: ["university-level", "university", "university-program"],
        3: ["university1-level", "university1", "university1-period"],
        4: ["languages", "languages-center"],
        5: ["languages-cv-subtitle", "first-lang", "first-lang-fluency", "second-lang", "second-lang-fluency"],
        6: ["contact-cv-subtitle", "cv-mail", "cv-city", "cv-country"],
        7: ["skills-cv-subtitle", "skills-technical", "skills-pro"],
        8: ["skills-tech-a", "skills-tech-b", "skills-tech-c", "skills-tech-d", "skills-tech-e"],
        9: ["skills-pro-a", "skills-pro-b", "skills-pro-c", "skills-pro-d", "skills-pro-e"]
    }
}

// I wouldn't like my mail in LLM data...
const mail = "b64_V1ROS2NHTXpVblpqUjJoc1kyazFhMXBYZUdoaWVUVnRZa2M1ZVZwWVRrRmFNakZvWVZkM2RWa3lPWFJEWnowOUNnPT0K";
const cv_url = "b64_WVVoU01HTklUVFpNZVRscVdrZFdjMWxYT1cxTmFsbDFXakpzTUdGSVZtbE1iV3gyVERCT1YweDNiejBLCg=="

const EN = {
    nav: ["Home", "About me", "Projects", "CV"],
    header: {
        presentation: ["Hello", "I'm Cristopher 👋.", "Computer systems engineering student from Mexico", "About me"],
        cards: {
            1: ["My Portfolio", "I have put together this portfolio with school and hobby projects to provide you with an inside look at my journey so far.\nPlease feel free to check it over!", "Go to projects"],
            2: ["Looking for my CV?", "No worries! Click on the button below to check my curriculum vitae.", "Go to CV"]
        }
    },
    about: {
        0: ["About me"],
        1: ["Who am I?", "My name is Cristopher, nice to meet you! I am currently a student in computer systems engineering, where I am developing a foundation in computers as a whole, programming and software engineering. While I may not have formal experience in the field yet, I have a passion for science and technology, specially computers."],
        2: ["What do I aspire to?", "I aspire to become a software developer, where I can combine my technical skills with my love for problem-solving. I enjoy putting things together and taking them apart - whether it’s electronics, software applications, or even LEGO sets."],
        3: ["My skills", "I pride myself on being persistent, thorough and dedicated, I am also open to take the leadership when needed. I have a natural ability to troubleshoot problems with relative ease."]
    },
    tech: {
        0: ["Technologies I am familiar with"],
        1: ["Front-end development", "Proficient in vanilla JavaScript, CSS, TailwindCSS and Next.js."],
        2: ["Back-end development", "Basic knowledge of Python and Java backend frameworks."],
        3: ["Operating systems", "Regarding OSes, I have extensive knowledge of both user and command line interfaces in the most popular OSes, whether it is going through Linux config files, Windows registry or macOS hidden options. I have created several hackintoshes and tried a fair amount of debian-based linux distros in both bare-metal and virtual machines."],
        4: ["Cloud computing", "Azure as cloud platform", "Experience with Azure IaaS and PaaS, managing MySQL instances."],
        5: ["Desktop", "Most desktop grade projects I have built are written in Java, specifically Swing which is a cross-platform framework for desktop applications."],
        6: ["Automation & scripting", "Advanced skills in Python for task automation and web scraping."],
        7: ["Other languages", "While I have not developed many programs with these, I have a fair understanding of how use them to create applications."],
        8: ["Operating Systems", "Tools", "And Postman"]
    },
    portfolio: {
        0: ["Projects", "All", "Front-end", "Desktop", "Scripting", "Others"],
        1: ["Desktop", "Front-end", "Scripting", "Desktop", "Front & back end", "Front-end", "Front-end", "Desktop", "Scripting", "Scripting", "Desktop", "Scripting", "Others"],
        2: ["libBasicUI is a tiny GUI library built on top of Java Swing, it uses custom-painting technics to deliver a modern look and feel while being desktop cross-platform.", "A tool that aims to help IPN students to create class schedules in a easy and fast way, taking into account student's preference for a specific class while avoiding gaps between these.", "Py WebScript Transcriptor is a pure-python HTML to JavaScript transcriptor. Its main goal is to provide a way to create reusable HTML components for static pages, however it also can be used to convert web pages into JS.", "PointMotionLib is project that aims to be a basic animation software. It uses squares (called Vertices) to create polygons using lines and Bezier's curves such as QuadCurve2D and CubicCurve2D. The user can attach Vectors to a Vertex, those Vectors will be the path for the points to follow and create the animation.", "FinbalanC++ is a tool concept that aims to help users to manage personal finances in one place. Written with Web technologies, python and MySQL.", "Application to view forecast information in Mexico via SMN (Servicio Meteorológico Nacional) API. This app makes use of NextJS (a React framework), TailwindCSS, DaisyUI and Python.", "IP-Calc is a web IP calculator. It can display properties for an IPv4, convert net masks from number to IP format and perform subnetting.", "This is a basic open source tower-defense like minigame with in-built world creator and pseudo 3d graphics. Put turrets to kill the all monsters on their way to the clock, survive different enemy legions and upgrade your defences!", "A basic python 3 project to ARP-Poisoning LAN devices.", "Pseudo git hasher (or short pgitHash), is a small utility to create a .xlsx database to track files. pgitHash is meant to help with manual backups by telling you the differences between disks and apply any change to your backup drive.", "REPL written in Java", "Small HTTP 1.1 server", "Mini ping pong using an FPGA and VHDL."],
        3: ["Github Page [EN]", "Github Page [ES]", "Github Page [EN]", "Github Page [EN]", "Github Page [ES]", "Github Page [ES]", "Github Page [ES]", "Github Page [EN]", "Github Page [EN]", "Github Page [EN]", "Github Page [EN]", "Github Page [ES]", "Github Page [EN]"],
        4: ["Learn more", "Learn more", "Learn more", "Learn more", "Learn more", "Learn more", "Learn more", "Learn more", "Learn more", "Learn more", "Learn more", "Learn more", "Learn more"]
    },
    cv: {
        0: ["My CV - Simplified", "CV_EN.pdf"],
        1: ["Education", "High school", "CECyT 9 at IPN", "Programming technician"],
        2: ["University", "ESCOM at IPN", "Computer systems engineering"],
        3: ["Exchange", "ESTIINF at UPM", "1st semester of 2026"],
        4: ["Languages", "CENLEX Zacatenco at IPN"],
        5: ["Languages", "Spanish", "Native", "English", "B2 - CEFR"],
        6: ["Contact", mail, "State of Mexico", "Mexico"],
        7: ["Skills", "Technical", "Professional"],
        8: ["Programming", "Troubleshooting", "Software engineering", "UI/UX design", "Electronics"],
        9: ["Problem-solving", "Dedication", "Persistence", "Thoroughness", "Leadership"]
    }
}
let ES = undefined;

let is_spanish = false;

function set_localization(json, ids) {
    for (const name in json) {
        if (Array.isArray(json[name])) {
            for (let i = 0; i < json[name].length; i++) {
                const e = document.getElementById(ids[name][i]);
                if (e === null)
                    continue;

                if (json[name][i].startsWith("b64_")) {
                    e.textContent = atob(atob(atob(json[name][i].substring(4))));
                    continue;
                }

                e.textContent = json[name][i];
            }
            continue;
        } else if (typeof (json[name]) === "object") {
            set_localization(json[name], ids[name]);
            continue;
        }

        const e = document.getElementById(ids[name]);
        if (e === null)
            continue;

        if (json[name][i].startsWith("b64_")) {
            e.textContent = atob(atob(atob(json[name][i].substring(4))));
            continue;
        }

        e.textContent = json[name];
    }
}

async function load_localization(l) {
    is_spanish = l.includes("es-");
    if (is_spanish && ES === undefined)
        try {
            await fetch("es_localization").then(async (response) => {
                ES = await response.json();
                ES["cv"]["6"][ES["cv"]["6"].indexOf("email")] = mail;
            });
        } catch (e) {
            console.error(e);
            set_lang("en-US");
            return;
        }

    const data = is_spanish ? ES : EN;
    set_localization(data, IDS);

    document.getElementById("cv-mail").href = `mailto:${atob(atob(atob(mail.substring(4))))}`;
    document.getElementById("cv-lang").parentElement.href = atob(atob(atob(cv_url.substring(4)))) + `CV_${is_spanish ? 'ES' : 'EN'}.pdf`

    setTimeout(_ => {
        document.getElementById(last_section).scrollIntoView();
    }, 300);
}

function set_lang(lang) {
    let active = document.getElementById("active-lang");
    toggle_language_menu(false);
    active.textContent = lang;
    load_localization(lang);
}

let wait = 0;

function update_lang() {
    wait++;
    setTimeout(() => {
        wait--;
        if (wait === 0)
            set_lang(navigator.language);
    }, 100);
}

document.addEventListener("DOMContentLoaded", () => {
    update_lang();
});
