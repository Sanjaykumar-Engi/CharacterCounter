const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const remaining = document.getElementById("remaining");
const warning = document.getElementById("warning");
const progress = document.getElementById("progress");

const MAX = 200;

textarea.addEventListener("input", function () {
    let text = textarea.value;
    let length = text.length;

    if (length > MAX) {
        textarea.value = text.substring(0, MAX);
        length = MAX;
        warning.textContent = "Character limit reached!";
    } else {
        warning.textContent = "";
    }

    counter.textContent = `${length}/${MAX} characters`;
    remaining.textContent = `${MAX - length} left`;

    let percent = (length / MAX) * 100;
    progress.style.width = percent + "%";

    if (percent < 60) {
        progress.style.background = "#2ecc71";
    } else if (percent < 85) {
        progress.style.background = "#f39c12";
    } else {
        progress.style.background = "#e74c3c";
    }
});