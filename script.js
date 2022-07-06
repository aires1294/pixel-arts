const pixelBoard = document.getElementById('pixel-board');
function criaBoard(parametro) {
  for (let indexLinha = 0; indexLinha < parametro; indexLinha += 1) {
    for (let indexColuna = 0; indexColuna < parametro; indexColuna += 1) {
      const pixelElement = document.createElement('div');
      pixelElement.classList.add('pixel');
      pixelBoard.appendChild(pixelElement);
    }
    const coluna = document.createElement('br');
    pixelBoard.appendChild(coluna);
  }
}
criaBoard(5);
