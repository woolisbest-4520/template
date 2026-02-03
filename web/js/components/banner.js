export const Banner = {
    show(id, msg) {
        const el = document.getElementById(id);
        el.textContent = msg;
        el.classList.add("show");
    },
    hide(id) {
        document.getElementById(id).classList.remove("show");
    }
};
