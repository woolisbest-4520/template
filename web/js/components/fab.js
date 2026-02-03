export const FAB = {
    init(fabSelector, menuSelector) {
        const fab = document.querySelector(fabSelector);
        const menu = document.querySelector(menuSelector);

        if (!fab || !menu) return;

        fab.addEventListener("click", () => {
            menu.classList.toggle("open");
        });

        // メニュー外クリックで閉じる
        document.addEventListener("click", (e) => {
            if (!fab.contains(e.target) && !menu.contains(e.target)) {
                menu.classList.remove("open");
            }
        });
    }
};
