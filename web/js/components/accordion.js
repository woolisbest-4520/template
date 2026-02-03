export const Accordion = {
    init(selector) {
        document.querySelectorAll(selector + " .ui-accordion-header")
            .forEach(header => {
                header.onclick = () => {
                    const content = header.nextElementSibling;
                    content.classList.toggle("open");
                };
            });
    }
};
