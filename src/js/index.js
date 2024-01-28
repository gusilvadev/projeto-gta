const botao = document.querySelector(".button-plataforma");

const elementoPlataformas = document.querySelector(".button-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo")
});
