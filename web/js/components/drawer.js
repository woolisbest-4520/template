export const Drawer = {
    init(drawerSelector, overlaySelector, triggerSelector) {
        const drawer = document.querySelector(drawerSelector);
        const overlay = document.querySelector(overlaySelector);
        const trigger = document.querySelector(triggerSelector);

        trigger.addEventListener("click", () => {
            drawer.classList.add("open");
            overlay.classList.add("show");
        });

        overlay.addEventListener("click", () => {
            drawer.classList.remove("open");
            overlay.classList.remove("show");
        });
    }
};
