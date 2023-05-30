const input = document.querySelector("input[type='checkbox']");
const body = document.querySelector("body");

const applyDarkMode = () => {
    body.classList.add("dark")
}

const removeDarkMode = () => {
    body.classList.remove("dark")
}

const toggleThemeMode = () => {
    if (input.checked) {
        applyDarkMode();
        localStorage.setItem("darkMode", "true");
    } else {
        removeDarkMode();
        localStorage.setItem("darkMode", "false")
    }
};

const savedDarkMode = localStorage.getItem("darkMode")

if (savedDarkMode === "true") {
    input.checked = true;
    applyDarkMode();
} else {
    input.checked = false;
    removeDarkMode();
}

input.addEventListener("change", toggleThemeMode);