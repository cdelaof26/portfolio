
const IDS = {
    nav: ["nav-header", "nav-about", "nav-projects"],
    header: {
        presentation: ["hi", "ami", "career", "me"],
        cards: {
            1: ["my-portfolio-title", "my-portfolio-desc", "my-portfolio-goto"],
            2: ["cv-title", "cv-desc", "cv-goto"]
        }
    },
    about: {
        0: ["about-title"],
        1: ["my-whoami-title", "my-whoami-desc"],
        2: ["my-aspirations-title", "my-aspirations-desc"],
        3: ["my-skills-title", "my-skills-desc"]
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
    }
}

const EN = {
    nav: ["Home", "About me", "Projects"],
    header: {
        presentation: ["Hello", "I'm Cristopher 👋.", "Computational systems engineering student from CDMX, Mexico", "About me"],
        cards: {
            1: ["My Portfolio", "I've put together this portfolio to provide you with an inside look at my journey so far.\nPlease feel free to check it over!", "Projects"],
            2: ["Looking for my CV?", "No worries! Here's my curriculum vitae in PDF format.", "CV_EN.pdf"]
        }
    },
    about: {
        0: ["About me"],
        1: ["Who am I?", "My name is Cristopher, nice to meet you! I am currently a student in computational systems engineering, where I am developing a foundation in computers as a whole, programming and software engineering. While I may not have formal experience in the field yet, I have a passion for technology, specially computers."],
        2: ["What do I aspire to?", "I aspire to become a software developer, where I can combine my technical skills with my love for problem-solving. I enjoy putting things together and taking them apart - whether it’s electronics, software applications, or even LEGO sets."],
        3: ["My skills", "I pride myself on being persistent, thorough and dedicated, I am also open to take the leadership when needed. I have a natural ability to troubleshoot problems with relative ease."]
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
