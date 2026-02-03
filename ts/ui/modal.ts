export class Modal {
    static open(id: string) {
        document.getElementById(id)?.classList.add("open");
    }

    static close(id: string) {
        document.getElementById(id)?.classList.remove("open");
    }
}
