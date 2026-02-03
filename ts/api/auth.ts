export class Auth {
    static saveToken(token: string) {
        localStorage.setItem("token", token);
    }

    static getToken(): string | null {
        return localStorage.getItem("token");
    }

    static clear() {
        localStorage.removeItem("token");
    }
}
