export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => [...document.querySelectorAll(selector)];

export const on = (el, event, handler) => {
    el.addEventListener(event, handler);
};

export const create = (tag, attrs = {}) => {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    return el;
};
