// ===================================
// Birthday Surprise - Logic Controller
// Secret PIN Password : 1234
// ===================================

let pin = "";
const correctPin = "1234"; // 👈 Agar PIN change karna ho toh yahan apna secret number likhein

const error = document.getElementById("error");

// ===================================
// 1. Update PIN Display Boxes
// ===================================
function updateDots() {
    for (let i = 1; i <= 4; i++) {
        const dot = document.getElementById("dot" + i);
        
        if (i <= pin.length) {
            dot.classList.add("active");
            dot.innerText = "❤"; // 👈 Box ke andar star ki jagah cute bullet dil print karne ke liye
        } else {
            dot.classList.remove("active");
            dot.innerText = ""; // Backspace dabane par box mita dene ke liye
        }
    }
}

// ===================================
// 2. Number Press Action (Button Clicks)
// ===================================
function press(number) {
    // Agar 4 digits pehle hi enter ho chuke hain toh mazeed type na ho
    if (pin.length >= 4) return;

    pin += number;
    updateDots();
    error.innerHTML = ""; // Naya button dabane par purana error saaf karne ke liye
}

// ===================================
// 3. Delete / Backspace Function
// ===================================
function clearPin() {
    if (pin.length > 0) {
        pin = pin.slice(0, -1); // Aakhri digit ko remove karne ke liye
        updateDots();
    }
    error.innerHTML = "";
}

// ===================================
// 4. Check Password Validations
// ===================================
function checkPin() {
    // Agar user ne bina 4 digits poore kiye submit daba diya
    if (pin.length < 4) {
        error.style.color = "#ffffff";
        error.innerHTML = "Enter 4 Digit PIN";
        return;
    }

    // Agar password bilkul sahi hai
    if (pin === correctPin) {
        error.style.color = "#90EE90"; // Soft light green message alert
        error.innerHTML = "Access Granted ❤️";
        
        // Pure window frame layout ko halka sa smooth zoom effect dene ke liye
        document.querySelector(".main-layout").style.transform = "scale(1.03)";

        // 900 milliseconds ke delay ke baad automatic agle page par bhej dega
        setTimeout(() => {
            window.location.href = "cake.html"; 
        }, 900);

    } else {
        // Agar password galat ho jaye
        error.style.color = "#ffffff";
        error.innerHTML = "Wrong Password ❌";
        
        shake(); // Shake animation chalane ke liye
        pin = ""; // Input ko reset karne ke liye
        updateDots(); // Boxes ko dobara khaali dikhane ke liye
    }
}

// ===================================
// 5. Wrong Password Shake Animation
// ===================================
function shake() {
    // Main layout window frame ko select kiya
    const box = document.querySelector(".main-layout");
    
    // Smooth cinematic shake path definitions
    box.animate([
        { transform: "translateX(-10px)" },
        { transform: "translateX(10px)" },
        { transform: "translateX(-10px)" },
        { transform: "translateX(10px)" },
        { transform: "translateX(0px)" }
    ], {
        duration: 350 // Animation speed in milliseconds
    });
}

// ===================================
// 6. Desktop Physical Keyboard Bindings
// ===================================
document.addEventListener("keydown", function(e){
    // Agar user keyboard se 0 se 9 tak koi number dabaye
    if(e.key >= "0" && e.key <= "9"){
        press(e.key);
    }
    // Agar user keyboard se Backspace dabaye
    if(e.key === "Backspace"){
        clearPin();
    }
    // Agar user keyboard se Enter dabaye
    if(e.key === "Enter"){
        checkPin();
    }
});
