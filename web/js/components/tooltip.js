export const Tooltip = {
    init(selector) {
        const tooltip = document.createElement("div");
        tooltip.className = "ui-tooltip";
        document.body.appendChild(tooltip);

        document.querySelectorAll(selector).forEach(el => {
            el.addEventListener("mouseenter", () => {
                tooltip.textContent = el.dataset.tooltip;
                tooltip.style.display = "block";
            });

            el.addEventListener("mousemove", (e) => {
                tooltip.style.left = e.pageX + 10 + "px";
                tooltip.style.top = e.pageY + 10 + "px";
            });

            el.addEventListener("mouseleave", () => {
                tooltip.style.display = "none";
            });
        });
    }
};
