export class HTTP {
    static async get(url: string) {
        const res = await fetch(url);
        return res.json();
    }

    static async post(url: string, body: any) {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        return res.json();
    }
}
