const images: string[] = [
    "https://picsum.photos/id/10/200/200",
    "https://picsum.photos/id/35/200/200",
    "https://picsum.photos/id/152/200/200",
    "https://picsum.photos/id/155/200/200",
    "https://picsum.photos/id/250/200/200",
];

const randomIndex = Math.floor(Math.random() * images.length);

export const image = images[randomIndex];