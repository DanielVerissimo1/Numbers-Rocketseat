import { exibirMensagemToast } from './toast.js';

const WARNING_ICON = new URL('../assets/warning.png', import.meta.url).href;

export function maximoMaiorQueMinimo(min, max) {
  if (max < min || max === min) {
    exibirMensagemToast('O valor máximo deve ser maior que o valor mínimo.', WARNING_ICON);
    return false;
  }
  return true;
}

export function quantidadeMaiorQueIntervalo(quantity, min, max) {
  if (quantity > max - min + 1) {
    exibirMensagemToast(
      `Você pediu ${quantity} números, mas existem apenas ${max - min + 1} disponíveis nesse intervalo.`,
      WARNING_ICON
    );
    return true;
  }
  return false;
}

export function numeroJaSorteado(generatedNumbers, number) {
  return generatedNumbers.includes(number);
}
