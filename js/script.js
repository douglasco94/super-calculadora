window.addEventListener('load', start);

function start() {
  console.log('Trabalho Prático - 1');
}

function calc() {
  let inputA = document.querySelector('#inputA').value;
  let inputB = document.querySelector('#inputB').value;

  soma(inputA, inputB);
  subtracao(inputA, inputB);
  multiplicacao(inputA, inputB);
  divisao(inputA, inputB);
  quadrado(inputA, inputB);
  divisores(inputA, inputB);
  fatorialAB(inputA, inputB);
}

function soma(a, b) {
  let inputSoma = document.querySelector('#soma');

  inputSoma.value = Number(a) + Number(b);
}

function subtracao(a, b) {
  let inputSubtracaoAB = document.querySelector('#subtracaoAB');
  let inputSubtracaoBA = document.querySelector('#subtracaoBA');

  inputSubtracaoAB.value = (Number(a) - Number(b)).toFixed(2);
  inputSubtracaoBA.value = (Number(b) - Number(a)).toFixed(2);
}

function multiplicacao(a, b) {
  let inputMultiplicacao = document.querySelector('#multiplicacao');

  inputMultiplicacao.value = (Number(a) * Number(b)).toFixed(2);
}

function divisao(a, b) {
  let inputDivisaoAB = document.querySelector('#divisaoAB');
  let inputDivisaoBA = document.querySelector('#divisaoBA');

  if (a > 0) {
    inputDivisaoBA.value = (Number(b) / Number(a)).toFixed(2);
  } else {
    inputDivisaoBA.value = 'Divisão por 0';
  }

  if (b > 0) {
    inputDivisaoAB.value = (Number(a) / Number(b)).toFixed(2);
  } else {
    inputDivisaoAB.value = 'Divisão por 0';
  }
}

function quadrado(a, b) {
  let inputQuadradoA = document.querySelector('#quadradoA');
  let inputQuadradoB = document.querySelector('#quadradoB');

  inputQuadradoA.value = (Number(a) * Number(a)).toFixed(2);
  inputQuadradoB.value = (Number(b) * Number(b)).toFixed(2);
}

function divisores(a, b) {
  let inputDivisoresA = document.querySelector('#divisoresA');
  let inputDivisoresB = document.querySelector('#divisoresB');
  let arrayDivisoresA = [];
  let arrayDivisoresB = [];

  for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
      arrayDivisoresA.push(i);
    }
  }
  for (let i = 1; i <= b; i++) {
    if (b % i == 0) {
      arrayDivisoresB.push(i);
    }
  }

  const arrayA = arrayDivisoresA.join([(separador = ',')]);
  const arrayB = arrayDivisoresB.join([(separador = ',')]);

  inputDivisoresA.value = `${arrayA}  (${arrayDivisoresA.length})`;
  console.log(`${arrayA}  (${arrayDivisoresA.length})`);
  inputDivisoresB.value = `${arrayB}  (${arrayDivisoresB.length})`;
  console.log(`${arrayB}  (${arrayDivisoresB.length})`);
}

function fatorial(a) {
  if (a > 0 && a <= 1) {
    return 1;
  } else {
    return a * fatorial(a - 1);
  }
}

function fatorialAB(a, b) {
  let inputFatorialA = document.querySelector('#fatorialA');
  let inputFatorialB = document.querySelector('#fatorialB');

  if (a > 21) {
    inputFatorialA.value = 'Número muito grande';
  } else {
    let auxA = fatorial(a).toFixed(2);
    inputFatorialA.value = auxA;
  }

  if (b > 21) {
    inputFatorialB.value = 'Número muito grande';
  } else {
    let auxB = fatorial(b).toFixed(2);
    inputFatorialB.value = auxB;
  }
}
