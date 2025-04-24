const perguntas = [
  {
    pergunta: 'Resposta item b',
    respostas: ["a", "b", "c"],
    correta: 1
  },
  {
    pergunta: 'Resposta item b',
    respostas: ["a", "teste", "c"],
    correta: 1
  },
  {
    pergunta: 'Resposta item b',
    respostas: ["a", "b", "c"],
    correta: 1
  },{
    pergunta: 'Resposta item b',
    respostas: ["a", "b", "c"],
    correta: 1
  },{
    pergunta: 'Resposta item b',
    respostas: ["a", "b", "c"],
    correta: 1
  },{
    pergunta: 'Resposta item b',
    respostas: ["a", "b", "c"],
    correta: 1
  },
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span');
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  const quizContainer = quizItem.querySelector('.quiz-item');

  // Atualiza o texto da pergunta
  quizContainer.querySelector('h3').textContent = item.pergunta;

  const dl = quizContainer.querySelector('dl');
  const dtBase = dl.querySelector('dt');

  for (let i = 0; i < item.respostas.length; i++) {
    const resposta = item.respostas[i];

    const dt = dtBase.cloneNode(true);
    dt.querySelector('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item));
    dt.querySelector('input').value = i;
    dt.querySelector('span').textContent = resposta;

    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = Number(event.target.value) === item.correta;
      corretas.delete(item);
      if (estaCorreta) {
        corretas.add(item);
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
    };

    dl.appendChild(dt);
  }

  dtBase.remove(); // Remove o exemplo original do template

  // Botão de mostrar imagem
  const mostrarImagemBtn = document.createElement('button');
  mostrarImagemBtn.textContent = 'Mostrar Imagem';
  
  mostrarImagemBtn.onclick = () => {
    const imgExistente = quizContainer.querySelector('img');
  
    if (imgExistente) {
      imgExistente.remove(); // remove a imagem se já existe
      mostrarImagemBtn.textContent = 'Mostrar Imagem'; // altera o texto do botão
    } else {
      const img = document.createElement('img');
      img.src = "https://adimax.com.br/wp-content/uploads/2022/05/cuidados-filhote-de-cachorro.jpg";
      img.alt = 'Imagem da questão';
      img.style.maxWidth = '100%';
      img.style.marginTop = '10px';
      quizContainer.appendChild(img);
  
      mostrarImagemBtn.textContent = 'Ocultar Imagem'; // altera o texto do botão
    }
  };
  

  quizContainer.appendChild(mostrarImagemBtn);
  quiz.appendChild(quizItem);
}
