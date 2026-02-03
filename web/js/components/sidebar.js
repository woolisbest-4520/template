export const Sidebar = {
    init(sidebarSelector, toggleSelector) {
        const sidebar = document.querySelector(sidebarSelector);
        const toggle = document.querySelector(toggleSelector);

        toggle.addEventListener("click", () => {
            sidebar.classList.toggle("collapsed");
        });
    }
};
