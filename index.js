
let lang_menu_visible = false;

function toggle_language_menu(show) {
    lang_menu_visible = show;
    let menu = document.getElementById("lang-menu");
    let langButton = document.getElementById("lang-button");
    if (show) {
        document.getElementById("chevron-up").classList.remove("hidden");
        document.getElementById("chevron-down").classList.add("hidden");
        langButton.classList.remove("rounded-lg");
        langButton.classList.add("rounded-t-lg");
        menu.classList.remove("opacity-[0]");
        menu.classList.remove("-translate-y-full");
        menu.classList.add("translate-y-8");
        return;
    }

    document.getElementById("chevron-up").classList.add("hidden");
    document.getElementById("chevron-down").classList.remove("hidden");
    langButton.classList.add("rounded-lg");
    langButton.classList.remove("rounded-t-lg");
    menu.classList.add("opacity-[0]");
    menu.classList.add("-translate-y-full");
    menu.classList.remove("translate-y-8");
}

function toggle_language_menu_visibility() {
    toggle_language_menu(!lang_menu_visible);
}

function set_lang(lang) {
    let active = document.getElementById("active-lang");
    toggle_language_menu(false);
    active.textContent = lang;
    load_localization(lang);
}

function is_scrolled_into_view(element_id) {
    const element = document.getElementById(element_id);
    const doc_view_top = window.scrollY;
    const doc_view_bottom = doc_view_top + window.innerHeight;

    const element_top = element.getBoundingClientRect().top + doc_view_top;
    const element_bottom = element_top + element.offsetHeight;

    return element_bottom <= doc_view_bottom && element_top >= doc_view_top;
}

function set_section_selected(section) {
    ["nav-header", "nav-about", "nav-projects"].forEach((_id) => {
        const _e = document.getElementById(_id);
        _e.classList.remove("border-indigo-600");
        _e.classList.remove("dark:border-indigo-500");
        _e.classList.add("border-transparent");
    });

    const id = "nav-" + section;

    const e = document.getElementById(id);
    e.classList.add("border-indigo-600");
    e.classList.add("dark:border-indigo-500");
    e.classList.remove("border-transparent");
}

document.addEventListener("scroll", () => {
    if (is_scrolled_into_view("header")) {
        set_section_selected("header");
    } else if (is_scrolled_into_view("about")) {
        set_section_selected("about");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (evt) => {
        if (!document.getElementById("lang-div").contains(evt.target))
            toggle_language_menu(false);
    });
});
