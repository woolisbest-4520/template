export const Dropdown = {
    init(selector) {
        const root = document.querySelector(selector);
        const menu = root.querySelector(".ui-dropdown-menu");

        root.onclick = () => {
            menu.classList.toggle("open");
        };

        document.addEventListener("click", (e) => {
            if (!root.contains(e.target)) {
                menu.classList.remove("open");
            }
        });
    }
};
