export function getRandomColor() {
    return "#" + Math.round(Math.random() * 16777215).toString(16) + "ff";
}