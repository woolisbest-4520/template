export const $ = (sel: string): HTMLElement | null =>
    document.querySelector(sel);

export const $$ = (sel: string): HTMLElement[] =>
    Array.from(document.querySelectorAll(sel));
