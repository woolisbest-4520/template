export const Hamburger = {
    init(selector) {
        const btn = document.querySelector(selector);
        btn.addEventListener("click", () => {
            btn.classList.toggle("open");
        });
    }
};
