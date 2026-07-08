// ===================================
// Birthday Surprise - Logic Controller
// Secret PIN Password : 1234
// ===================================

let pin = "";
const correctPin = "1234";

const error = document.getElementById("error");

// Update input layout elements
function updateDots() {
    for (let i = 1; i <= 4; i++) {
        const dot = document.getElementById("dot" + i);
        if (i <= pin.length) {
            dot.classList.add("active");
            dot.innerText = "❤"; // Box filling character indicator matching template video
        } else {
            dot.classList.remove("active");
            dot.innerText = "";
        }
    }
}

// Press action implementation triggers
function press(number) {
    if (pin.length >= 4) return;
    pin += number;
    updateDots();
    error.innerHTML = "";
}

// Erase digit backspace operation logic
function clearPin() {
    if (pin.length > 0) {
        pin = pin.slice(0, -1);
        updateDots();
    }
    error.innerHTML = "";
}

// Input verification submission routine
function checkPin() {
    if (pin.length < 4) {
        error.style.color = "#ffffff";
        error.innerHTML = "Enter 4 Digit PIN";
        return;
    }

    if (pin === correctPin) {
        error.style.color = "#90EE90";
        error.innerHTML = "Access Granted ❤️";
        
        // Triggers gentle window zoom scaling framework
        document.querySelector(".main-container").style.transform = "scale(1.03)";

        // Redirection to baloom.html updated here
        setTimeout(() => {
            window.location.href = "baloom.html"; 
        }, 900);
    } else {
        error.style.color = "#ffffff";
        error.innerHTML = "Wrong Password ❌";
        shake();
        pin = "";
        updateDots();
    }
}

// Shake animation routine execution link
function shake() {
    const box = document.querySelector(".main-container");
    box.animate([
        { transform: "translateX(-10px)" },
        { transform: "translateX(10px)" },
        { transform: "translateX(-10px)" },
        { transform: "translateX(10px)" },
        { transform: "translateX(0px)" }
    ], {
        duration: 350
    });
}

// Standard structural keyboard matrix listener loop binding config
document.addEventListener("keydown", function(e){
    if(e.key >= "0" && e.key <= "9"){ press(e.key); }
    if(e.key === "Backspace"){ clearPin(); }
    if(e.key === "Enter"){ checkPin(); }
});
