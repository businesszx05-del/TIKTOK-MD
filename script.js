// 1. Apna Secret Passcode yahan set karein (e.g., '1214')
const CORRECT_CODE = "1214"; 
let inputCode = "";

// 2. Dots ko update karne ka function (Press hone par dot black ho jaye)
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index < inputCode.length) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// 3. Number press karne ka function
function pressKey(num) {
    if (inputCode.length < 4) {
        inputCode += num;
        updateDots();
    }
}

// 4. 'C' (Clear) button ka function
function clearCode() {
    inputCode = "";
    updateDots();
}

// 5. '✓' (Check) button ka function
function checkCode() {
    // Agar poore 4 digits enter ho chuke hain
    if (inputCode.length === 4) {
        if (inputCode === CORRECT_CODE) {
            // Agar code sahi hai toh passcode screen hide karo aur cake screen show karo
            document.getElementById('screen-passcode').classList.add('hidden');
            document.getElementById('screen-cake').classList.remove('hidden');
        } else {
            // Agar code galat hai
            alert("Wrong Code! Try again ❤️");
            clearCode();
        }
    } else {
        alert("Please enter a 4-digit code first!");
    }
}

// 6. Next page par blow button ka function
function blowCandle() {
    alert("Wish made! ✨ Happy Birthday!");
}
