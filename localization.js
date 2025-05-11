
const IDS = {
    nav: ["nav-header", "nav-about", "nav-projects"],
    header: {
        presentation: ["hi", "ami", "career", "me"],
        cards: {
            1: ["my-portfolio-title", "my-portfolio-desc", "my-portfolio-goto"],
            2: ["my-cv-title", "my-cv-desc", "my-cv-goto"]
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
        1: ["front-end-badge", "front-end-text"],
        2: ["back-end-badge", "back-end-text"],
        3: ["os-title", "os-badge", "os-text"],
        4: ["cloud-title", "cloud-badge", "cloud-tech", "cloud-text"],
        5: ["desktop-title", "desktop-badge", "desktop-text"],
        6: ["scripting-badge", "scripting-text"],
        7: ["other-title", "other-badge", "other-text"],
        8: ["tools-title", "tools-badge", "tools-text"]
    }
}

const ES = {
    nav: ["Inicio", "Sobre de mi", "Proyectos"],
    header: {
        presentation: ["Hola", "Soy Cristopher 👋.", "Estudiante de ingeniería en sistemas computacionales de la CDMX, México", "Sobre de mi"],
        cards: {
            1: ["Mi Portafolio", "Construí este portfolio con el fin de mostrar mis avances en el área hasta el momento.\n¡Siéntete libre de echarle un vistazo!", "Proyectos"],
            2: ["¿Buscando mi CV?", "¡No busques más! Aquí hay un acesso rápido a mi curriculum vitae en formato PDF.", "CV_ES.pdf"]
        }
    },
    about: {
        0: ["Sobre mi"],
        1: ["¿Quién soy?", "Me llamo Cristopher, ¡un gusto! Actualmente soy un estudiante de ingeniería en sistemas computacionales, donde estoy profundizando distintos temas sobre las computadoras como un todo, programación e ingeniería de software. Aunque al momento aún no tengo experiencia en el campo, comparto una pasión por la tecnología, especialmente computadores."],
        2: ["¿A que aspiro?", "Aspiro a convertirme en un desarrollador de software, donde pueda combinar mis habilidades técnicas con mi entusiasmo por resolver problemas. Disfruto armar y desarmar cosas - sean electrónicos, aplicaciones de software, o incluso sets de LEGO."],
        3: ["Mis habilidades", "Me siento orgulloso de ser alguien persistente, minucioso y dedicado, así mismo, estoy abierto a llevar la iniciativa cuando es necesario. Considero tener una habilidad natural para resolver problemas con relativa facilidad."]
    },
    tech: {
        0: ["Tecnologías con las que estoy familiarizado"],
        1: ["Intermedio", "He creado proyectos con JS y CSS desde cero, pero también he usado frameworks como Next.js, TailwindCSS y Tauri para crear proyectos tanto personales como académicos."],
        2: ["Principiante", "Tengo poca experiencia con frameworks de backend; no obstante, me siento orgulloso de saber bastante Python y Java."],
        3: ["Sistemas operativos", "Avanzado", "Tengo un conocimiento extenso tanto de la interfaz de usuario como la linea de comando de los sistemas más populares, se trate de navegar a través de los archivos de configuración de Linux, el registro de Windows o las opciones ocultas de macOS. He configurado varias 'hackintoshes' y probado una cantidad considerable de distribuciones Linux basadas en debian."],
        4: ["Nube & gestión", "Intermedio", "Azure como plataforma de nube", "He usado los servicios de infraestructura y plataforma de Azure (IaaS y PaaS), principalmente máquinas virtuales, instancias de MySQL administradas, Azure disks y Azure files para desplegar y administrar pequeños proyectos distribuidos."],
        5: ["Escritorio", "Avanzado", "La mayoría de las aplicaciones de escritorio que he construido están escritas en Java, específicamente Swing, el cual es un framework para desarrollar aplicaciones multiplataforma para escritorio."],
        6: ["Avanzado", "Soy capaz de crear, en breve tiempo, programas en Python para automatizar tareas simples, desde procesar un CSV hasta tan complejas como el web scrapping."],
        7: ["Otros lenguajes", "Intermedio", "Al momento no he construido muchas aplicaciones con estos lenguajes, pero tengo conocimiento suficiente para construir aplicaciones."],
        8: ["Herramientas", "Intermedio", "He usado estas herramientas para desarrollar algunos de los proyectos en este portafolio."]
    }
}

const EN = {
    nav: ["Home", "About me", "Projects"],
    header: {
        presentation: ["Hello", "I'm Cristopher 👋.", "Computational systems engineering student from CDMX, Mexico", "About me"],
        cards: {
            1: ["My Portfolio", "I have put together this portfolio to provide you with an inside look at my journey so far.\nPlease feel free to check it over!", "Projects"],
            2: ["Looking for my CV?", "No worries! Here's my curriculum vitae in PDF format.", "CV_EN.pdf"]
        }
    },
    about: {
        0: ["About me"],
        1: ["Who am I?", "My name is Cristopher, nice to meet you! I am currently a student in computational systems engineering, where I am developing a foundation in computers as a whole, programming and software engineering. While I may not have formal experience in the field yet, I have a passion for technology, specially computers."],
        2: ["What do I aspire to?", "I aspire to become a software developer, where I can combine my technical skills with my love for problem-solving. I enjoy putting things together and taking them apart - whether it’s electronics, software applications, or even LEGO sets."],
        3: ["My skills", "I pride myself on being persistent, thorough and dedicated, I am also open to take the leadership when needed. I have a natural ability to troubleshoot problems with relative ease."]
    },
    tech: {
        0: ["Technologies I am familiar with"],
        1: ["Intermediate", "I have put together things with vanilla JS and CSS, but I have also used frameworks like Next.js, TailwindCSS and Tauri to build personal and academic projects."],
        2: ["Beginner", "I have little experience with backend frameworks; however I take pride in being fluent in both Python and Java."],
        3: ["Operating systems", "Advanced", "Regarding OSes, I have extensive knowledge of both user and command line interfaces in the most popular OSes, whether it is going through Linux config files, Windows registry or macOS hidden options. I have built several hackintoshes and tried a fair amount of debian-based linux distros."],
        4: ["Cloud & management", "Intermediate", "Azure as cloud platform", "I have used Azure's IaaS and PaaS, primarily virtual machines, administered MySQL instances, Azure disks and Azure files to deploy and manage small distributed projects."],
        5: ["Desktop", "Advanced", "Most desktop grade projects I have built are written in Java, specifically Swing which is a framework to develop cross-platform desktop applications."],
        6: ["Advanced", "I am capable of rapidly creating Python programs to automate tasks as simple as parsing a CSV and as complex as web scrapping."],
        7: ["Other languages", "Intermediate", "While I have not developed many programs with these, I have a fair understanding of how use them to create applications."],
        8: ["Tools", "Intermediate", "I have used these tools to create some of the projects in this portfolio."]
    }
}

function set_localization(json, ids) {
    for (const name in json) {
        if (Array.isArray(json[name])) {
            for (let i = 0; i < json[name].length; i++) {
                const e = document.getElementById(ids[name][i]);
                if (e === null)
                    continue;

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
        e.textContent = json[name][i];
    }
}

function load_localization(l) {
    const data = l.includes("es-") ? ES : EN;
    set_localization(data, IDS);
}

document.addEventListener("DOMContentLoaded", () => {
    set_lang(navigator.language);
});
