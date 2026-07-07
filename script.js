// ===============================
// Birthday Surprise Pro
// Password: 1234
// ===============================

let pin = "";
const correctPin = "1234";

// Update PIN dots
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

// Number Press
function press(number) {

    if (pin.length >= 4) return;

    pin += number;

    updateDots();

}

// Delete
function clearPin() {

    pin = pin.slice(0, -1);

    updateDots();

}

// Check Password
function checkPin() {

    const error = document.getElementById("error");

    if (pin.length < 4) {

        error.innerHTML = "Enter 4-digit PIN";

        return;

    }

    if (pin === correctPin) {

        error.style.color = "#90EE90";
        error.innerHTML = "✔ Access Granted";

        setTimeout(() => {

            window.location.href = "cake.html";

        }, 800);

    } else {

        error.style.color = "#FFD2D2";
        error.innerHTML = "❌ Wrong PIN";

        pin = "";

        updateDots();

    }

}