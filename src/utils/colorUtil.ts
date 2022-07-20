export function getRandomColor() {
    let color = Math.round(Math.random() * 0xffffff).toString(16);
    // 만약 6자리 미만의 16진수가 완성되면 버그가 생김
    // 그래서 6자리 미만일 경우 모자른 자리수만큼 0을 더해줌
    if (color.length < 6) {
        const zero = Array(6 - color.length).fill(0).join("");
        color = zero + color;
    }
    return  "#" + color;
}