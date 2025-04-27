
const IDS = {
    nav: ["nav-header", "nav-about", "nav-projects"],
    header: {
        presentation: ["hi", "ami", "career", "me"],
        cards: {
            1: ["my-portfolio-title", "my-portfolio-desc", "my-portfolio-goto"],
            2: ["cv-title", "cv-desc", "cv-goto"]
        }
    }
}

const ES = {
    nav: ["Inicio", "Sobre de mi", "Proyectos"],
    header: {
        presentation: ["Hola", "Soy Cristopher 👋.", "Estudiante de ingeniería en sistemas computacionales de la CDMX, México", "Sobre de mi"],
        cards: {
            1: ["Mi Portafolio", "Construí este portfolio con el fin de mostrar mis avances en el área hasta el momento.\n¡Siéntase libre de echarle un vistazo!", "Proyectos"],
            2: ["¿Buscando mi CV?", "¡No busque más! Aquí hay un acesso rápido a mi curriculum vitae en formato PDF.", "CV_ES.pdf"]
        }
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
