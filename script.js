// ======================================
// Birthday Surprise Pro
// Secret PIN : 1234
// ======================================

let pin = "";
const correctPin = "1234";

const error = document.getElementById("error");

// ---------------------
// Update PIN Dots
// ---------------------
function updateDots() {

    for (let i = 1; i <= 4; i++) {

        const dot = document.getElementById("dot" + i);

        if (i <= pin.length) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }

    }

}

// ---------------------
// Number Press
// ---------------------
function press(number) {

    if (pin.length >= 4) return;

    pin += number;

    error.innerHTML = "";
    error.style.color = "#ffffff";

    updateDots();

}

// ---------------------
// Delete
// ---------------------
function clearPin() {

    if (pin.length === 0) return;

    pin = pin.slice(0, -1);

    error.innerHTML = "";

    updateDots();

}

// ---------------------
// Check PIN
// ---------------------
function checkPin() {

    if (pin.length < 4) {

        error.style.color = "#FFD700";
        error.innerHTML = "Enter 4 Digit PIN";

        return;

    }

    if (pin === correctPin) {

        error.style.color = "#90EE90";
        error.innerHTML = "✔ Access Granted";

        document.querySelector(".container").style.transform = "scale(1.05)";

        setTimeout(() => {

            window.location.href = "cake.html";

        }, 1000);

    }

    else {

        error.style.color = "#FFD2D2";
        error.innerHTML = "❌ Wrong PIN";

        document.querySelector(".container").classList.add("shake");

        setTimeout(() => {
            document.querySelector(".container").classList.remove("shake");
        }, 500);

        pin = "";

        updateDots();

    }

}

// ---------------------
// Keyboard Support
// ---------------------
document.addEventListener("keydown", function (e) {

    if (e.key >= "0" && e.key <= "9") {

        press(Number(e.key));

    }

    else if (e.key === "Backspace") {

        clearPin();

    }

    else if (e.key === "Enter") {

        checkPin();

    }

});