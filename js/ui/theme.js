export const Theme = {
    init() {
        const saved = localStorage.getItem("theme") || "light";
        document.documentElement.dataset.theme = saved;
    },
    toggle() {
        const now = document.documentElement.dataset.theme;
        const next = now === "light" ? "dark" : "light";
        document.documentElement.dataset.theme = next;
        localStorage.setItem("theme", next);
    }
};
