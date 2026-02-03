export const YouTube = {
    parse(url) {
        const id = url.match(/(?:v=|youtu\.be\/)([^&]+)/)?.[1];
        return {
            id,
            embed: `https://www.youtube.com/embed/${id}`
        };
    }
};
