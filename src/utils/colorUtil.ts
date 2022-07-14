export function getRandomColor() {
    return "#" + Math.round(Math.random() * 0xffffff).toString(16) + "ff";
}