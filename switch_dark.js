const input = document.querySelector("input[type='checkbox']");
const body = document.querySelector("body");

const toggleThemeMode = () => {
    body.classList.toggle("dark");
};

input.onchange = toggleThemeMode;