const translations = {
    en: {
        title: "Will you marry me?",
        yes: "Yes ❤️",
        no: "No 😢",
        yay: "YAYYY, LOVE U BABE ❤️🎉",
        modeNormal: "Normal",
        modeHard: "Hard "
    },
    zh: {
        title: "你能和我在一起吗？",
        yes: "同意 ❤️",
        no: "不行 😢",
        yay: "太好了！爱你宝宝！ ❤️🎉",
        modeNormal: "普通",
        modeHard: "困难 "
    }
};

let currentLang = "en";
let noClickCount = 0;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const mainVideo = document.getElementById("gif");
const videoSad = document.getElementById("videoSad");
const videoHappy = document.getElementById("videoHappy");

const message = document.getElementById("message");
const languageSelect = document.getElementById("languageSelect");

// mode changing
let mode = "normal";
const modeSelect = document.getElementById("modeSelect");

modeSelect.addEventListener("change", () => {
    mode = modeSelect.value;
});

//mouse movement
document.addEventListener("mousemove", (e) => {
    if (mode !== "hard") return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const rect = noBtn.getBoundingClientRect();

    const btnX = rect.left + rect.width / 2;
    const btnY = rect.top + rect.height / 2;

    const distance = Math.hypot(mouseX - btnX, mouseY - btnY);

    if (distance < 100) {
        moveButton();
    }
});

function moveButton() {
    noBtn.style.position = "absolute";

    const newX = Math.random() * 80;
    const newY = Math.random() * 80;

    noBtn.style.left = newX + "%";
    noBtn.style.top = newY + "%";
}

noBtn.addEventListener("click", () => {
    noClickCount++;

    // Change to sad gif after clicking no 3 times.
    if (noClickCount == 3) {
        mainVideo.src = videoSad.querySelector("source").src;
        mainVideo.play();
    }

    // Shrink button
    let noScale = 1 - (noClickCount * 0.15);
    // ${scale} is the same as f string, this applies the visual transformation
    noBtn.style.transform = `scale(${noScale})`;

    let yesScale = 1 + (noClickCount * 0.5);
    yesBtn.style.transform = `scale(${yesScale})`;

    moveButton();

    // Remove after 5 clicks
    if (noClickCount >= 5) {
        noBtn.style.display = "none";
    }
});

yesBtn.addEventListener("click", () => {
    mainVideo.src = videoHappy.querySelector("source").src;
    mainVideo.play();
    message.innerText = translations[currentLang].yay; //This part doesn't translate when triggered first

    // Hide buttons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});


function updateLanguage(lang) {
    currentLang = lang;

    document.getElementById("title").innerText = translations[lang].title;
    yesBtn.innerText = translations[lang].yes;
    noBtn.innerText = translations[lang].no;
    document.getElementById("message").innerText = translations[lang].yay;

    document.getElementById("modeNormal").innerText = translations[lang].modeNormal;
    document.getElementById("modeHard").innerText = translations[lang].modeHard;
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