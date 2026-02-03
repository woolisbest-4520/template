export const Toast = {
    show(message, duration = 3000) {
        let container = document.querySelector(".ui-toast-container");
        if (!container) {
            container = document.createElement("div");
            container.className = "ui-toast-container";
            document.body.appendChild(container);
        }

        const toast = document.createElement("div");
        toast.className = "ui-toast";
        toast.textContent = message;

        container.appendChild(toast);

        setTimeout(() => toast.classList.add("show"), 10);
        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }
};
