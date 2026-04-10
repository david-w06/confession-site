let noClickCount = 0;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const gif = document.getElementById("gif");
const message = document.getElementById("message");


noBtn.addEventListener("click", () => {
    noClickCount++;

    // Change to sad gif after clicking no 3 times.
    if (noClickCount == 3) {
        gif.querySelector("source").src = "static/imgs/PIFV3484.MOV";
        gif.load();
    }

    // Shrink button
    let scale = 1 - (noClickCount * 0.15);
    // ${scale} is the same as f string, this applies the visual transformation
    noBtn.style.transform = `scale(${scale})`;

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
    gif.querySelector("source").src = "static/imgs/THAS2986.MOV";
    gif.load();
    message.innerText = "YAYYY ❤️🎉";
});


//Button dodging the cursor (way cooler)
//Smooth animations (feels professional)
//Sound effects (makes it hilarious)
//Better UI (centered, responsive)
//Convert to mp4