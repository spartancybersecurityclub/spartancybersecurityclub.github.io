const sleep = (ms) => new Promise((res, rej) => setTimeout(res, ms));

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-/[]{}.,?";
const getRandomChar = () => characters.charAt(Math.floor(Math.random() * characters.length));
const getRandomStrSliceWithSpaces = (text, startIndex) => {
  let str = "";
  for (let i = startIndex; i < text.length; i++) {
    if (text[i] == " ") str += " ";
    else str += getRandomChar();
  }
  return str;
};

const animateSleepTimeMs = 50;

window.addEventListener("load", async () => {
    // Don't run if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion)").matches) return;

    const elem = document.querySelector("[data-animate-letters]");
    const text = elem.textContent;

    for (let i = 0; i <= text.length; i++) {
        const decoded = text.slice(0, i);
        const jumbled = getRandomStrSliceWithSpaces(text, i);
        elem.textContent = decoded + jumbled;
        await sleep(animateSleepTimeMs);
    }
});