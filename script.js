const texto = document.getElementById('texto');
const aumentarTexto = document.getElementById('aumentarTexto');
const diminuirTexto = document.getElementById('diminuirTexto');

let tamanhoFonte = 16;

aumentarTexto.addEventListener('click', () => {
  tamanhoFonte += 2;
  texto.style.fontSize = `${tamanhoFonte}px`;
});

diminuirTexto.addEventListener('click', () => {
  if (tamanhoFonte > 10) {
    tamanhoFonte -= 2;
    texto.style.fontSize = `${tamanhoFonte}px`;
  }
});