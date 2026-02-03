export const RadialFAB360 = {
    init(fabSelector, menuSelector, radius = 110) {
        const fab = document.querySelector(fabSelector);
        const menu = document.querySelector(menuSelector);
        const items = menu.querySelectorAll(".ui-radial-item-360");

        if (!fab || !menu) return;

        fab.addEventListener("click", () => {
            const isOpen = menu.classList.toggle("open");

            const total = items.length;
            const step = (Math.PI * 2) / total;

            items.forEach((item, i) => {
                const angle = step * i;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                if (isOpen) {
                    item.style.transform = `translate(${-x}px, ${-y}px) scale(1)`;
                    item.style.opacity = "1";
                } else {
                    item.style.transform = "scale(0.5)";
                    item.style.opacity = "0";
                }
            });
        });

        // 外側クリックで閉じる
        document.addEventListener("click", (e) => {
            if (!fab.contains(e.target) && !menu.contains(e.target)) {
                menu.classList.remove("open");
                items.forEach(item => {
                    item.style.transform = "scale(0.5)";
                    item.style.opacity = "0";
                });
            }
        });
    }
};
