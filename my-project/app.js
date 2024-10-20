// Ícones
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

// Variáveis dos temas
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Alternar ícones
const iconToggle = () => {
    moonIcon.classList.toggle("hidden");
    sunIcon.classList.toggle("hidden");
};

// Verificação do tema inicial
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("hidden");
        sunIcon.classList.remove("hidden");
        return;
    }
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
};

// Troca de tema manualmente
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
};

// Chamar a troca de tema ao clicar nos botões
sunIcon.addEventListener("click", () => {
    themeSwitch();
});
moonIcon.addEventListener("click", () => {
    themeSwitch();
});

// Invocar o check de tema no carregamento inicial
themeCheck();
