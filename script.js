const display = document.querySelector("#output");
const buttons = document.querySelectorAll("button");

buttons.forEach(item => {
    item.onclick = () => {
        if (item.id == "btn_clearAll") {
            display.innerText = "";
        }
        else if (item.id == "backspace") {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        }
        else if (display.innerText == "" && item.id == "btn_eql") {
            display.innerText = "";
        }
        else if (item.id == "btn_eql") {
            try {
                display.innerText = eval(display.innerText);
            }
            catch (error) {
                display.innerText = "Error";
                setTimeout(() => {
                    display.innerText = "";
                }, 1000);
            }
        }
        else if (item.id == "." && display.innerText.includes(".")) {
            return;
        }
        else {
            display.innerText += item.id;
        }

    };
});

function toggleTheme() {
    const darkTheme = document.querySelector(".container");
    darkTheme.classList.toggle("dark");

    const imageToggle = document.getElementById("img-toggle");
    if (imageToggle.src.endsWith("image/backspace.png")) {
        imageToggle.src = "image/backspace-white.png";
    }
    else {
        imageToggle.src = "image/backspace.png";
    }

    const barkToggle = document.getElementById("dark-mode");
    if (barkToggle.src.endsWith("image/light-icon.png")) {
        barkToggle.src = "image/dark-icon.png";
    }
    else {
        barkToggle.src = "image/light-icon.png";
    }

}