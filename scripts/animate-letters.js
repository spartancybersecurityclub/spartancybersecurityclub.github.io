const sleep = (ms) => new Promise((res, rej) => setTimeout(res, ms));

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-/[]{}.,?";
const getRandomChar = () => characters.charAt(Math.floor(Math.random() * characters.length));
const getRandomStr = (length) => {
    let str = "";
    for (let i = 0; i < length; i++) {
        str += getRandomChar();
    }
    return str;
}

const animateSleepTimeMs = 50;

window.addEventListener("load", async () => {
    const elem = document.querySelector("[data-animate-letters]");
    const text = elem.textContent;

    for (let i = 0; i <= text.length; i++) {
        const decoded = text.slice(0, i);
        const jumbled = getRandomStr(text.length - i);
        elem.textContent = decoded + jumbled;
        await sleep(animateSleepTimeMs);
    }
});