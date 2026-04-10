const translations = {
    en: {
        title: "Will you marry me?",
        yes: "Yes ❤️",
        no: "No 😢",
        yay: "YAYYY ❤️🎉"
    },
    zh: {
        title: "你能和我在一起吗？",
        yes: "同意 ❤️",
        no: "不行 😢",
        yay: "太好了！爱你宝宝！ ❤️🎉"
    }
};

let currentLang = "en";
let noClickCount = 0;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const gif = document.getElementById("gif");
const message = document.getElementById("message");
const languageSelect = document.getElementById("languageSelect");


noBtn.addEventListener("click", () => {
    noClickCount++;

    // Change to sad gif after clicking no 3 times.
    if (noClickCount == 3) {
        gif.querySelector("source").src = "static/imgs/THAS2986.MOV";
        gif.load();
    }

    // Shrink button
    let noScale = 1 - (noClickCount * 0.15);
    // ${scale} is the same as f string, this applies the visual transformation
    noBtn.style.transform = `scale(${noScale})`;

    let yesScale = 1 + (noClickCount * 0.5);
    yesBtn.style.transform = `scale(${yesScale})`;


    // Move button randomly
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";

    // Remove after 5 clicks
    if (noClickCount >= 5) {
        noBtn.style.display = "none";
    }
});

yesBtn.addEventListener("click", () => {
    gif.querySelector("source").src = "static/imgs/PIFV3484.MOV";
    gif.load();
    message.innerText = translations[currentLang].yay;

    // Hide buttons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});


function updateLanguage(lang) {
    currentLang = lang;

    document.getElementById("title").innerText = translations[lang].title;
    yesBtn.innerText = translations[lang].yes;
    noBtn.innerText = translations[lang].no;
}


languageSelect.addEventListener("change", () => {
    updateLanguage(languageSelect.value);
});

/* auto detect browser lang feature
const userLang = navigator.language.startsWith("zh") ? "zh" : "en";
updateLanguage(userLang);
languageSelect.value = userLang; */

/* store lang feature
const savedLang = localStorage.getItem("lang");
if (savedLang) {
    updateLanguage(savedLang);
    languageSelect.value = savedLang;
}
const savedLang = localStorage.getItem("lang");
if (savedLang) {
    updateLanguage(savedLang);
    languageSelect.value = savedLang;
} */

//Button dodging the cursor
//Sound effects
//Better UI (centered, responsive)
//Change no text each press
//Convert to mp4