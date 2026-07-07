// ================================
// Birthday Surprise Pro
// Password: 1234
// ================================

let pin = "";
const correctPin = "1234";

const error = document.getElementById("error");

// Fill PIN Dots
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

    error.innerHTML = "";

}

// Delete Last Digit
function clearPin() {

    pin = pin.slice(0, -1);

    updateDots();

}

// Check Password
function checkPin() {

    if (pin.length !== 4) {

        error.innerHTML = "Enter 4 Digit PIN";

        return;

    }

    if (pin === correctPin) {

        error.style.color = "#7CFC00";
        error.innerHTML = "Access Granted ❤️";

        setTimeout(function () {

            window.location.href = "cake.html";

        }, 800);

    }

    else {

        error.style.color = "#ffffff";
        error.innerHTML = "Wrong Password ❌";

        document.querySelector(".container").animate([

            { transform: "translateX(-8px)" },
            { transform: "translateX(8px)" },
            { transform: "translateX(-8px)" },
            { transform: "translateX(8px)" },
            { transform: "translateX(0px)" }

        ], {

            duration: 350

        });

        pin = "";

        updateDots();

    }

}

// Keyboard Support
document.addEventListener("keydown", function (e) {

    if (e.key >= "0" && e.key <= "9") {

        press(e.key);

    }

    if (e.key === "Backspace") {

        clearPin();

    }

    if (e.key === "Enter") {

        checkPin();

    }

});