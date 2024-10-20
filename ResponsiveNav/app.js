// Ícones
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
const hamburgerIcon = document.querySelector(".hamburger");
const xIcon = document.querySelector(".x");
const list = document.querySelector('.ul');

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


// Toggle do ícone do hambúrguer
const hamburguerToggle = () => {
    hamburgerIcon.classList.toggle("hidden");
    xIcon.classList.toggle("hidden");
    list.classList.toggle("opacity-100");
    list.classList.toggle("top-[80px]");
};

// Evento de clique para abrir o menu e mudar o ícone
hamburgerIcon.addEventListener("click", () => {
    hamburguerToggle(); // Alterna os ícones
    onToggleMenu(this); 
});

// Evento de clique para fechar o menu e mudar o ícone
xIcon.addEventListener("click", () => {
    hamburguerToggle(); // Alterna os ícones de volta 
    onToggleMenu(this) 
});

// 
const Lists = document.querySelector('.ul')
function onToggleMenu(e){
    e.name = e.name === 'menu' ? 'close' : 'menu';

    // Se for o botão de close, fecha o menu
    if (e.name === 'menu') {
        // Remove as classes anteriores
        Lists.classList.remove('top-[20px]', 'opacity-100');
        Lists.classList.add('top-[-120px]', 'opacity-0'); // Volta ao estado inicial
    } else {
        // Se estiver abrindo o menu
        Lists.classList.remove('top-[-120px]', 'opacity-0'); // Remove as classes de estado inicial
        Lists.classList.add('top-[20px]', 'opacity-100'); // Adiciona classes para abrir o menu
    }
}
// Invocar o check de tema no carregamento inicial
themeCheck();
