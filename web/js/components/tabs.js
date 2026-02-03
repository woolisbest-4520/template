export const Tabs = {
    init(selector) {
        const root = document.querySelector(selector);
        const tabs = root.querySelectorAll(".ui-tab");
        const contents = root.querySelectorAll(".ui-tab-content");

        tabs.forEach((tab, i) => {
            tab.onclick = () => {
                tabs.forEach(t => t.classList.remove("active"));
                contents.forEach(c => c.classList.remove("active"));

                tab.classList.add("active");
                contents[i].classList.add("active");
            };
        });
    }
};
