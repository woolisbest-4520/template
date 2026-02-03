export const Breadcrumb = {
    set(selector, items) {
        const root = document.querySelector(selector);
        root.innerHTML = "";

        items.forEach((item, i) => {
            if (i > 0) root.appendChild(document.createTextNode(" / "));

            if (item.url) {
                const a = document.createElement("a");
                a.href = item.url;
                a.textContent = item.label;
                root.appendChild(a);
            } else {
                const span = document.createElement("span");
                span.textContent = item.label;
                root.appendChild(span);
            }
        });
    }
};
