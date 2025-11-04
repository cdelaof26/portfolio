
const aboutArticles = ["my-whoami", "my-aspirations", "my-skills"];
const technologies = ["front-end", "back-end", "os", "cloud", "desktop", "scripting", "other", "tools"];

const front_end_projects = ["IPNScheduler", "clima_mx", "IP-Calc", "finbalancpp"];
const desktop_projects = ["libBasicUI", "PointMotionLib", "DefendTheClockLib", "escomsole"];
const scripting_projects = ["PyWST", "arpspoofing_tool", "pgitHash", "http_server"];
const other_projects = ["ESCOMPong"];

const projects = [front_end_projects, desktop_projects, scripting_projects, other_projects];

let last_section = "header";
let lang_menu_visible = false;

function toggle_class(add, element, ...classes) {
    if (typeof element === "string")
        element = document.getElementById(element);

    if (element === null)
        return;

    classes.forEach(c => {
        if (add)
            element.classList.add(c);
        else
            element.classList.remove(c);
    });
}

function toggle_language_menu(show) {
    lang_menu_visible = show;
    let menu = document.getElementById("lang-menu");
    let langButton = document.getElementById("lang-button");
    toggle_class(show, "chevron-down", "-rotate-180");
    toggle_class(!show, langButton, "rounded-lg");
    toggle_class(show, langButton, "rounded-t-lg");
    toggle_class(!show, menu, "opacity-[0]", "-translate-y-full");
    toggle_class(show, menu, "translate-y-10", "md:translate-y-11", "lg:translate-y-12");
}

function open_section(evt) {
    let element = evt.target;
    if (element.tagName === "P")
        return;

    while (element.tagName !== "DIV" || !element.id.includes("-article"))
        element = element.parentElement;

    const id = element.id.replace("article", "");
    const button = document.getElementById(id + "button");
    const section = document.getElementById(id + "text-section");

    const is_open = button.classList.contains("rotate-45");

    toggle_class(!is_open, element, "shadow-lg");
    toggle_class(is_open, element, "bg-sidebar-0", "dark:bg-sidebar-1");

    toggle_class(!is_open, button, "rotate-45");
    toggle_class(is_open, section, "h-0", "opacity-0", "overflow-hidden");

    if (section.style.height === "0px")
        section.style.height = section.scrollHeight + "px";
    else
        section.style.height = "0px";

    ["front-end", "back-end", "os", "cloud", "desktop", "scripting", "other", "tools"].forEach(_id => {
        if (id.includes(_id))
            return;

        const _element = document.getElementById(_id + "-article");
        const _section = document.getElementById(_id + "-text-section");
        toggle_class(false, _element, "shadow-lg");
        toggle_class(true, _element, "bg-sidebar-0", "dark:bg-sidebar-1");
        toggle_class(false, _id + "-button", "rotate-45");
        toggle_class(true, _section, "h-0", "opacity-0", "overflow-hidden");
        _section.style.height = "0px";
    });
}

function toggle_language_menu_visibility() {
    toggle_language_menu(!lang_menu_visible);
}

function is_scrolled_into_view(element_id) {
    const element = document.getElementById(element_id);
    if (element === null)
        return false;

    const doc_view_top = window.scrollY;
    const doc_view_bottom = doc_view_top + window.innerHeight;

    const element_top = element.getBoundingClientRect().top + doc_view_top;
    const element_bottom = element_top + element.offsetHeight;

    return element_bottom <= doc_view_bottom && element_top >= doc_view_top;
}

function set_section_selected(section) {
    const id = "nav-" + section;
    last_section = section;

    // console.log(section);

    ["header", "about", "cv", "portfolio"].forEach((_id) => {
        _id = "nav-" + _id;
        const e = document.getElementById(_id);
        toggle_class(id === _id, e, "md:border-sky-600", "dark:md:border-sky-500");
        toggle_class(id === _id, e, "text-white", "bg-sky-600", "dark:bg-sky-500", "md:bg-transparent", "dark:md:bg-transparent", "md:text-black", "dark:md:text-white");

        toggle_class(id !== _id, e, "md:border-transparent");
    });
}

let menuVisible = false;

function toggle_main_menu(visible) {
    menuVisible = visible;

    const menu = document.getElementById("main-menu");
    if (visible)
        menu.classList.remove("scale-0");
    else
        menu.classList.add("scale-0");
}

function scroll_section_into_view(section) {
    toggle_main_menu(false);
    document.getElementById(section).scrollIntoView();
}

let index = 0;
let cat = front_end_projects;

function load_img() {
    const next_img = document.getElementById(cat[index] + "-img");
    if (next_img.getAttribute("path") !== "")
        fetch(next_img.getAttribute("path")).then(async promise => {
            next_img.setAttribute("path", "");
            next_img.src = URL.createObjectURL(await promise.blob());
            toggle_class(false, next_img, "hidden");
            toggle_class(true, next_img.nextElementSibling, "hidden");
        }).catch(e => {
            console.error(e);
            toggle_class(true, next_img, "hidden");
            toggle_class(false, next_img.nextElementSibling, "hidden");
        });
}

function show_project(prev) {
    if (cat.length === 1) {
        toggle_class(false, cat[index] + "-project-article", "hidden");
        index = 0;
        toggle_class(false, cat[index] + "-project-article", "hidden");
        load_img();
        return;
    }

    index += prev ? -1 : 1;

    let current = index + (prev ? 1 : -1);
    if (index === cat.length && !prev) {
        index = 0;
        current = cat.length - 1;
    } else if (index === -1) {
        index = cat.length - 1;
        current = 0;
    }

    for (let i = 0; i < cat.length; i++) {
        toggle_class(i === index, `circle-button-${i}`, "bg-sky-600", "dark:bg-sky-500");
        toggle_class(i !== index, `circle-button-${i}`, "bg-sidebar-0", "dark:bg-sidebar-1");
    }

    load_img();

    toggle_class(false, cat[index] + "-project-article", "hidden");
    toggle_class(true, cat[current] + "-project-article", "hidden");
}

function _show_project(evt) {
    toggle_class(true, cat[index] + "-project-article", "hidden");
    index = Number(evt.target.id.replace("circle-button-", "")) - 1;
    show_project(false);
}

function toggle_project_set(type) {
    const id = type + "-projects";

    ["all", "front-end", "desktop", "scripting", "others"].forEach((_id, i) => {
        if (type === _id) {
            toggle_class(true, cat[index] + "-project-article", "hidden");
            cat = projects[i - 1];
            index = 1;
            show_project(true);

            const buttons = document.getElementById("projects-button-div");
            while (buttons.hasChildNodes())
                buttons.removeChild(buttons.children[0])

            buttons.appendChild(circle_button(0, "bg-sky-600 dark:bg-sky-500"));
            for (let j = 1; j < cat.length; j++)
                buttons.appendChild(circle_button(j, "bg-sidebar-0 dark:bg-sidebar-1"));
        }

        _id = _id + "-projects";
        const title_element = document.getElementById(_id);
        const parent = title_element.parentElement;

        toggle_class(id !== _id, title_element, "md:hidden", "md:opacity-[0]");
        toggle_class(id !== _id, parent, "bg-sidebar-0", "dark:bg-sidebar-1", "lg:w-16");
        toggle_class(id === _id, parent, "lg:w-48", "bg-sky-600", "text-white");
    });
}

function header_scroll_into_view(evt) {
    let id;
    if (evt.target.id === null || !evt.target.id.includes("-header-btn"))
        id = evt.target.parentElement.id.replace("-header-btn", "");
    else
        id = evt.target.id.replace("-header-btn", "");

    const element = document.getElementById(id);
    if (element === null)
        return;
    element.scrollIntoView();
}

document.addEventListener("scroll", () => {
    if (is_scrolled_into_view("career")) {
        set_section_selected("header");

        aboutArticles.forEach(_id => {
            toggle_class(true, _id + "-article", "-translate-x-full", "opacity-[0]");
        });

        technologies.forEach((_id) => {
            toggle_class(true, _id + "-article", "translate-y-full", "opacity-[0]");
        });

        projects.forEach((_id) => {
            toggle_class(true, _id + "-project-article", "translate-y-full", "opacity-[0]");
        });
    }

    if (is_scrolled_into_view("my-whoami-article") || is_scrolled_into_view("my-skills-article")) {
        set_section_selected("about");
        aboutArticles.forEach(_id => {
            toggle_class(false, _id + "-article", "-translate-x-full", "opacity-[0]");
        });
    }

    if (is_scrolled_into_view("cv") || is_scrolled_into_view("education-cv-subtitle")
        || is_scrolled_into_view("languages-cv-subtitle") || is_scrolled_into_view("software-dev-cv-subtitle")) {
        set_section_selected("cv");
    }

    if (is_scrolled_into_view("front-end-article") || is_scrolled_into_view("os-article")
        || is_scrolled_into_view("desktop-article") || is_scrolled_into_view("other-article")) {
        set_section_selected("about");

        technologies.forEach((_id) => {
            toggle_class(false, _id + "-article", "translate-y-full", "opacity-[0]");
        });
    }

    if (is_scrolled_into_view("project-filter")) {
        set_section_selected("portfolio");
        load_img();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (evt) => {
        if (!document.getElementById("lang-div").contains(evt.target))
            toggle_language_menu(false);
    });

    document.body.addEventListener("click", (evt) => {
        if (!document.getElementById("nav").contains(evt.target) && !document.getElementById("main-menu").contains(evt.target))
            toggle_main_menu(false);
    });
});
