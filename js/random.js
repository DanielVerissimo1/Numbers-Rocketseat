import { exibirMensagemToast } from './toast.js';
import {
  maximoMaiorQueMinimo,
  numeroJaSorteado,
  quantidadeMaiorQueIntervalo,
} from './validation.js';

const SUCCESS_ICON = new URL('../assets/success.png', import.meta.url).href;

export function sortearNumeros(quantity, minNumber, maxNumber, shouldNotRepeat) {
  if (!maximoMaiorQueMinimo(minNumber, maxNumber)) return;

  const result = shouldNotRepeat
    ? sortearSemRepeticao(quantity, minNumber, maxNumber)
    : sortearComRepeticao(quantity, minNumber, maxNumber);

  if (result) exibirMensagemToast('Número sorteado com sucesso!', SUCCESS_ICON);

  return result;
}

function sortearComRepeticao(quantity, minNumber, maxNumber) {
  const result = [];

  for (let i = 0; i < quantity; i++) {
    result.push(sortearNumero(minNumber, maxNumber));
  }

  return result;
}

function sortearSemRepeticao(quantity, minNumber, maxNumber) {
  const result = [];

  if (!quantidadeMaiorQueIntervalo(quantity, minNumber, maxNumber)) {
    while (result.length < quantity) {
      const randomNumber = sortearNumero(minNumber, maxNumber);

      if (!numeroJaSorteado(result, randomNumber)) {
        result.push(randomNumber);
      }
    }

    return result;
  }

  return false;
}

function sortearNumero(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
