const formSection = document.getElementById('content-form');
const resultSection = document.getElementById('content-result');

const resultCount = document.getElementById('result-count');
const generatedNumbersSection = document.getElementById('results');
const againButton = document.getElementById('draw-again');

export function renderizarResultado(result, count) {
  formSection.classList.add('hidden');
  resultSection.classList.remove('hidden');

  atualizarContagem(count);

  generatedNumbersSection.innerHTML = '';
  againButton.classList.add('hidden');

  const delay = 4200;

  result.forEach((number, index) => {
    const time = index === 0 ? 0 : delay * index;

    setTimeout(() => {
      generatedNumbersSection.insertAdjacentHTML('beforeend', criarCard(number));
    }, time);

    setTimeout(() => {
      if (index === result.length - 1) {
        againButton.classList.remove('hidden');
      }
    }, time + 3000);
  });
}

export function renderizarFormulario() {
  formSection.classList.remove('hidden');
  resultSection.classList.add('hidden');
  againButton.classList.add('hidden');
}

function atualizarContagem(count) {
  return (resultCount.innerText = `${count}º resultado`);
}

function criarCard(number) {
  return `
    <li class="card">
        <span class="number">${number}</span>
    </li>
  `;
}
