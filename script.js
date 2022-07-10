/*const pixelBoard = document.getElementById('pixel-board');

const classeDaSelecaoAtual = document.getElementsByClassName('selected');
const novoPixelBoard = document.getElementsByClassName('pixel');
const paleta = document.querySelectorAll('.color');

function criaBoard(parametro) {
  for (let indexLinha = 0; indexLinha < parametro; indexLinha += 1) {
    for (let indexColuna = 0; indexColuna < parametro; indexColuna += 1) {
      const pixelElement = document.createElement('div');
      pixelElement.classList.add('pixel');
      // pixelElement.style.backgroundColor = 'white';
      pixelBoard.appendChild(pixelElement);

      // novaCor.add('white');

      // console.log('Index Coluna', indexColuna);
      // console.log('Index linha', indexLinha);
      // console.log('PIXELL', pixelElement);
    }
    const coluna = document.createElement('br');
    pixelBoard.appendChild(coluna);
  }
}
criaBoard(5);

function selecaoCor(selecao) {
  classeDaSelecaoAtual[0].classList.remove('selected');
  selecao.target.classList.add('selected');
}

function pintarPixel(p) {
  if (pixelElement)
    console.log('vamos ver oq faz', classeDaSelecaoAtual[0].classList[1]);
  p.target.style.backgroundColor = classeDaSelecaoAtual[0].classList[1];
}

function preparaQuadro() {
  for (let jogar = 0; jogar < paleta.length; jogar += 1) {
    paleta[jogar].addEventListener('click', selecaoCor);
  }
  for (
    let indexPinta = 0;
    indexPinta < novoPixelBoard.length;
    indexPinta += 1
  ) {
    novoPixelBoard[indexPinta].className = 'pixel';
    novoPixelBoard[indexPinta].addEventListener('click', pintarPixel);
  }
}
preparaQuadro();*/

const pixelBoard = document.getElementById('pixel-board');

const classeDaSelecaoAtual = document.getElementsByClassName('selected');
const novoPixelBoard = document.getElementsByClassName('pixel');
const paleta = document.querySelectorAll('.color');

function criaBoard(parametro) {
  for (let indexLinha = 0; indexLinha < parametro; indexLinha += 1) {
    for (let indexColuna = 0; indexColuna < parametro; indexColuna += 1) {
      const pixelElement = document.createElement('div');
      pixelElement.classList.add('pixel');
      pixelBoard.appendChild(pixelElement);
      pixelElement.style.backgroundColor = 'white';
    }
    const coluna = document.createElement('br');
    pixelBoard.appendChild(coluna);
  }
}
criaBoard(5);

function selecaoCor(selecao) {
  classeDaSelecaoAtual[0].classList.remove('selected');
  selecao.target.classList.add('selected');
}

function pintarPixel(p) {
  console.log(classeDaSelecaoAtual[0].classList[1]);
  p.target.style.backgroundColor = classeDaSelecaoAtual[0].classList[1];
}

function preparaQuadro() {
  for (let jogar = 0; jogar < paleta.length; jogar += 1) {
    paleta[jogar].addEventListener('click', selecaoCor);
  }
  for (
    let indexPinta = 0;
    indexPinta < novoPixelBoard.length;
    indexPinta += 1
  ) {
    novoPixelBoard[indexPinta].className = 'pixel';
    novoPixelBoard[indexPinta].addEventListener('click', pintarPixel);
  }
}
preparaQuadro();
