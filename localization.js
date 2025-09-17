
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
        1: ["front-end-title", "front-end-badge", "front-end-text"],
        2: ["back-end-title", "back-end-badge", "back-end-text"],
        3: ["os-title", "os-badge", "os-text"],
        4: ["cloud-title", "cloud-badge", "cloud-tech", "cloud-text"],
        5: ["desktop-title", "desktop-badge", "desktop-text"],
        6: ["scripting-title", "scripting-badge", "scripting-text"],
        7: ["other-title", "other-badge", "other-text"],
        8: ["tools-title", "tools-badge", "tools-text"]
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
        3: ["languages", "languages-center"],
        4: ["languages-cv-subtitle", "first-lang", "first-lang-fluency", "second-lang", "second-lang-fluency"],
        5: ["contact-cv-subtitle", "cv-mail", "cv-city", "cv-country"],
        6: ["software-dev-cv-subtitle", "front-end-cv", "automation-cv", "cloud-cv"]
    }
}

// I wouldn't like my mail in LLM data...
const mail = "b64_V1ROS2NHTXpVblpqUjJoc1kyazFhMXBYZUdoaWVUVnRZa2M1ZVZwWVRrRmFNakZvWVZkM2RWa3lPWFJEWnowOUNnPT0K";
const cv_url = "b64_WVVoU01HTklUVFpNZVRscVdrZFdjMWxYT1cxTmFsbDFXakpzTUdGSVZtbE1iV3gyVERCT1YweDNiejBLCg=="

const ES = {
    nav: ["Inicio", "Sobre de mi", "Proyectos", "CV"],
    header: {
        presentation: ["Hola", "Soy Cristopher 👋.", "Estudiante de ingeniería en sistemas computacionales del Estado de México, México", "Sobre de mi"],
        cards: {
            1: ["Mi Portafolio", "Construí este portfolio con el fin de mostrar mis avances en el área hasta el momento.\n¡Siéntete libre de echarle un vistazo!", "Proyectos"],
            2: ["¿Buscando mi CV?", "¡No busques más! Has clic sobre 'Ir al CV' para ver mi curriculum vitae.", "Ir al CV"]
        }
    },
    about: {
        0: ["Sobre mi"],
        1: ["¿Quién soy?", "Me llamo Cristopher, ¡un gusto! Actualmente soy un estudiante de ingeniería en sistemas computacionales, estoy aprendiendo sobre distintos temas, por ejemplo las computadoras como un todo, programación e ingeniería de software. Aunque al momento aún no tengo experiencia en el campo, comparto una pasión por la ciencia y tecnología, especialmente las computadoras."],
        2: ["¿A que aspiro?", "Aspiro a convertirme en un desarrollador de software, donde pueda combinar mis habilidades técnicas con mi entusiasmo por resolver problemas. Disfruto armar y desarmar cosas - sean electrónicos, aplicaciones de software, o incluso sets de LEGO."],
        3: ["Mis habilidades", "Me siento orgulloso de ser alguien persistente, minucioso y dedicado, así mismo, estoy abierto a llevar la iniciativa cuando es necesario. Considero tener una habilidad natural para resolver problemas con relativa facilidad."]
    },
    tech: {
        0: ["Tecnologías con las que estoy familiarizado"],
        1: ["Front-end", "Intermedio", "He creado proyectos con JS y CSS desde cero, pero también he usado frameworks como Next.js, TailwindCSS y Tauri para crear proyectos tanto personales como académicos."],
        2: ["Back-end", "Principiante", "Tengo poca experiencia con frameworks de backend; no obstante, considero que se más que el promedio en cuanto a Python y Java."],
        3: ["Sistemas operativos", "Intermedio", "Tengo un conocimiento extenso tanto de la interfaz de usuario como la linea de comando de los sistemas más populares, se trate de navegar a través de los archivos de configuración de Linux, el registro de Windows o las opciones ocultas de macOS. He configurado varias hackintoshes y probado una cantidad considerable de distribuciones Linux basadas en debian tanto en nativo como en máquinas virtuales."],
        4: ["Nube & gestión", "Intermedio", "Azure como plataforma de nube", "He usado los servicios de infraestructura y plataforma de Azure (IaaS y PaaS), principalmente máquinas virtuales, instancias de MySQL administradas, Azure disks y Azure files para desplegar y administrar pequeños proyectos distribuidos."],
        5: ["Escritorio", "Avanzado", "La mayoría de las aplicaciones de escritorio que he construido están escritas en Java, específicamente Swing, el cual es un framework para desarrollar aplicaciones multiplataforma para escritorio."],
        6: ["Scripting", "Avanzado", "Soy capaz de crear, a la brevedad, programas en Python para automatizar todo tipo de tareas, desde las simples como procesar un CSV hasta tan las más complejas como el web scrapping."],
        7: ["Otros lenguajes", "Intermedio", "Al momento no he construido muchos programas con estos lenguajes, pero tengo conocimiento suficiente para construir aplicaciones."],
        8: ["Herramientas", "Intermedio", "He usado estas herramientas para desarrollar algunos de los proyectos en este portafolio."]
    },
    portfolio: {
        0: ["Proyectos", "Todo", "Front-end", "Escritorio", "Scripting", "Otros"],
        1: ["Escritorio", "Front-end", "Scripting", "Escritorio", "Front & back end", "Front-end", "Front-end", "Escritorio", "Scripting", "Scripting", "Escritorio", "Scripting", "Otros"],
        2: ["libBasicUI es una pequeña biblioteca de interfaz gráfica hecha encima de Java Swing, esta utiliza técnicas de custom-painting para entregar un look and feel moderno al mismo tiempo que mantiene la compatibilidad multi-plataforma.", "Herramienta que tiene como objetivo ayudar a los estudiantes del IPN a crear horarios de forma rápida y sencilla, teniendo en cuenta la preferencia por una determinada unidad de aprendizaje y evitando las horas muertas entre clases.", "Py WebScript Transcriptor es un traductor de HTML a JavaScript completamente escrito en Python. Tiene como objetivo principal proveer una forma de crear elementos HTML reutilizables para páginas estáticas, aunque también es posible utilizarlo para convertir páginas web a JS.", "PointMotionLib es un proyecto que aspira a ser un software básico de animación. Utiliza cuadrados (llamados Vertices) para crear polígonos utilizando lineas y curvas de Bezier como QuadCurve2D y CubicCurve2D. El usuario puede ligar vectores a los vertices, estos vectores serán la ruta que los puntos seguirán para crear la animación.", "FinbalanC++ es un concepto de herramienta que aspira a ayudar a los usuarios a manejar sus finanzas personales en un solo lugar. Escrito con tecnologías web, python y MySQL.", "Aplicación para visualizar la información del clima en México a través de la API del SMN (Servicio Meteorológico Nacional). Esta aplicación utiliza NextJS (framework de React), TailwindCSS, DaisyUI y Python.", "IP-Calc es una calculadora IP con interfaz web. Puede mostrar propiedades de una IPv4, convertir máscaras de red de formato numérico a formato IP y realizar subnetting.", "Pequeño minijuego tipo tower-defense de código abierto con creador de mundos incluido y gráficos pseudo 3d. Coloca torretas para eliminar todos los monstruo que se dirigen al reloj, defiende diferentes hordas de enemigos y renueva tus defensas.", "Proyecto básico en python3 para realizar ARP-Poisoning a dispositivos en red local.", "Pseudo git hasher (o de forma abreviada pgitHash), es una utilidad pequeña para crear bases de datos .xlsx con el fin de llevar un control de archivos. pgitHash pretende ayudar con las copias de seguridad manuales al señalar las diferencias entre discos y aplicar cualquier cambio al disco de respaldo.", "REPL escrito en Java", "Pequeño servidor HTTP 1.1", "Pequeño juego de ping pong en FPGA con VHDL."],
        3: ["Página de Github [EN]", "Página de Github [ES]", "Página de Github [EN]", "Página de Github [EN]", "Página de Github [ES]", "Página de Github [ES]", "Página de Github [ES]", "Página de Github [EN]", "Página de Github [EN]", "Página de Github [EN]", "Página de Github [EN]", "Página de Github [ES]", "Página de Github [EN]"],
        4: ["Saber más", "Saber más", "Saber más", "Saber más", "Saber más", "Saber más", "Saber más", "Saber más", "Saber más", "Saber más", "Saber más", "Saber más", "Saber más"]
    },
    cv: {
        0: ["Mi CV", "CV_ES.pdf"],
        1: ["Educación", "Bachillerato", "CECyT 9 en el IPN", "Técnico en programación"],
        2: ["Universidad", "ESCOM en el IPN", "Ingeniería en sistemas computacionales"],
        3: ["Idiomas", "CENLEX Zacatenco en el IPN"],
        4: ["Idiomas", "Español", "Nativo", "Inglés", "B2 - MCER"],
        5: ["Contacto", mail, "Estado de México", "México"],
        6: ["Desarrollo de software", "Desarrollo de front-end", "Automatización & scripting", "Cómputo en la nube"]
    }
}

const EN = {
    nav: ["Home", "About me", "Projects", "CV"],
    header: {
        presentation: ["Hello", "I'm Cristopher 👋.", "Computer systems engineering student from the State of Mexico, Mexico", "About me"],
        cards: {
            1: ["My Portfolio", "I have put together this portfolio to provide you with an inside look at my journey so far.\nPlease feel free to check it over!", "Projects"],
            2: ["Looking for my CV?", "No worries! Click on 'Go to CV section' to check my curriculum vitae.", "Go to CV section"]
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
        1: ["Front-end", "Intermediate", "I have put together things with vanilla JS and CSS, but I have also used frameworks like Next.js, TailwindCSS and Tauri to build personal and academic projects."],
        2: ["Back-end", "Beginner", "I have little experience with backend frameworks; however I take pride in being somewhat fluent in both Python and Java."],
        3: ["Operating systems", "Intermediate", "Regarding OSes, I have extensive knowledge of both user and command line interfaces in the most popular OSes, whether it is going through Linux config files, Windows registry or macOS hidden options. I have built several hackintoshes and tried a fair amount of debian-based linux distros in both bare-metal and virtual machines."],
        4: ["Cloud & management", "Intermediate", "Azure as cloud platform", "I have used Azure's IaaS and PaaS, primarily virtual machines, administered MySQL instances, Azure disks and Azure files to deploy and manage small distributed projects."],
        5: ["Desktop", "Advanced", "Most desktop grade projects I have built are written in Java, specifically Swing which is a cross-platform framework for desktop applications."],
        6: ["Scripting", "Advanced", "I am capable of rapidly creating Python programs to automate tasks as simple as parsing a CSV and as complex as web scrapping."],
        7: ["Other languages", "Intermediate", "While I have not developed many programs with these, I have a fair understanding of how use them to create applications."],
        8: ["Tools", "Intermediate", "I have used these tools to create some of the projects in this portfolio."]
    },
    portfolio: {
        0: ["Projects", "All", "Front-end", "Desktop", "Scripting", "Others"],
        1: ["Desktop", "Front-end", "Scripting", "Desktop", "Front & back end", "Front-end", "Front-end", "Desktop", "Scripting", "Scripting", "Desktop", "Scripting", "Others"],
        2: ["libBasicUI is a tiny GUI library built on top of Java Swing, it uses custom-painting technics to deliver a modern look and feel while being desktop cross-platform.", "A tool that aims to help IPN students to create class schedules in a easy and fast way, taking into account student's preference for a specific class while avoiding gaps between these.", "Py WebScript Transcriptor is a pure-python HTML to JavaScript transcriptor. Its main goal is to provide a way to create reusable HTML components for static pages, however it also can be used to convert web pages into JS.", "PointMotionLib is project that aims to be a basic animation software. It uses squares (called Vertices) to create polygons using lines and Bezier's curves such as QuadCurve2D and CubicCurve2D. The user can attach Vectors to a Vertex, those Vectors will be the path for the points to follow and create the animation.", "FinbalanC++ is a tool concept that aims to help users to manage personal finances in one place. Written with Web technologies, python and MySQL.", "Application to view forecast information in Mexico via SMN (Servicio Meteorológico Nacional) API. This app makes use of NextJS (a React framework), TailwindCSS, DaisyUI and Python.", "IP-Calc is a web IP calculator. It can display properties for an IPv4, convert net masks from number to IP format and perform subnetting.", "This is a basic open source tower-defense like minigame with in-built world creator and pseudo 3d graphics. Put turrets to kill the all monsters on their way to the clock, survive different enemy legions and upgrade your defences!", "A basic python 3 project to ARP-Poisoning LAN devices.", "Pseudo git hasher (or short pgitHash), is a small utility to create a .xlsx database to track files. pgitHash is meant to help with manual backups by telling you the differences between disks and apply any change to your backup drive.", "REPL written in Java", "Small HTTP 1.1 server", "Mini ping pong using an FPGA and VHDL."],
        3: ["Github Page [EN]", "Github Page [ES]", "Github Page [EN]", "Github Page [EN]", "Github Page [ES]", "Github Page [ES]", "Github Page [ES]", "Github Page [EN]", "Github Page [EN]", "Github Page [EN]", "Github Page [EN]", "Github Page [ES]", "Github Page [EN]"],
        4: ["Learn more", "Learn more", "Learn more", "Learn more", "Learn more", "Learn more", "Learn more", "Learn more", "Learn more", "Learn more", "Learn more", "Learn more", "Learn more"]
    },
    cv: {
        0: ["My CV", "CV_EN.pdf"],
        1: ["Education", "High school", "CECyT 9 at IPN", "Programming technician"],
        2: ["University", "ESCOM at IPN", "Computer systems engineering"],
        3: ["Languages", "CENLEX Zacatenco at IPN"],
        4: ["Languages", "Spanish", "Native", "English", "B2 - CEFR"],
        5: ["Contact", mail, "State of Mexico", "Mexico"],
        6: ["Software development", "Front-end development", "Automation & scripting", "Cloud computing"]
    }
}

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

function load_localization(l) {
    is_spanish = l.includes("es-");
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
