let tamanhoFonte = 100; // porcentagem padrão

function aumentarFonte() {
  if (tamanhoFonte < 150) {
    tamanhoFonte += 10;
    document.body.style.fontSize = `${tamanhoFonte}%`;
  }
}

function diminuirFonte() {
  if (tamanhoFonte > 70) {
    tamanhoFonte -= 10;
    document.body.style.fontSize = `${tamanhoFonte}%`;
  }
}
function resetarAcessibilidade() {
  tamanhoFonte = 100;
  document.body.style.fontSize = "100%";
  document.body.classList.remove("alto-contraste");
}
document.getElementById("acessibilidade-toggle").addEventListener("click", () => {
  const menu = document.getElementById("acessibilidade-menu");
  menu.hidden = !menu.hidden;
});