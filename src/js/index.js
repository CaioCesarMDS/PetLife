const elementosDuvida = document.querySelectorAll(".duvida");

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener("click", function selecionarDuvida() {
        duvida.classList.toggle("ativa")
    })
})
