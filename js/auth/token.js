export const Token = {
    set(token) {
        localStorage.setItem("auth_token", token);
    },
    get() {
        return localStorage.getItem("auth_token");
    },
    clear() {
        localStorage.removeItem("auth_token");
    },
    isValid() {
        return !!localStorage.getItem("auth_token");
    }
};
