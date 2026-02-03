export class API {
    constructor(private base: string) {}

    async get(path: string) {
        const res = await fetch(this.base + path);
        return res.json();
    }

    async post(path: string, body: any) {
        const res = await fetch(this.base + path, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        return res.json();
    }
}
