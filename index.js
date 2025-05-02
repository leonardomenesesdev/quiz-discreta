const perguntas = [
  {
    pergunta: 'Sobre operações com conjuntos, é correto afirmar que:',//Questão 1
    respostas: [
      "a) A união de dois conjuntos resulta em um conjunto vazio.",
      "b) A interseção de dois conjuntos contém apenas elementos comuns a ambos.",
      "c) O complemento de um conjunto inclui todos os seus subconjuntos.",
      "d) Dois conjuntos distintos não podem ter interseção.",
      "e) Todo conjunto é subconjunto de outro conjunto qualquer.",
    ],
    correta: 1,//B
    imagemResolucao: "URL_DA_IMAGEM_QUESTAO1.jpg" // ADICIONE AQUI A URL DA IMAGEM
  },
  {
    pergunta: 'Uma relação é dita reflexiva quando:',//Questão 2
    respostas: [
      "a) Todo elemento está relacionado com outro elemento diferente.",
      "b) Todo elemento está relacionado consigo mesmo.",
      "c) Nenhum elemento está relacionado consigo mesmo.",
      "d) Todo elemento se relaciona com todos os outros, menos com ele próprio.",
      "e) A relação não depende dos elementos do conjunto."
    ],
    correta: 1,//B
    imagemResolucao: "URL_DA_IMAGEM_QUESTAO1.jpg" // ADICIONE AQUI A URL DA IMAGEM
  },
  {
    pergunta: 'Se uma função associa elementos diferentes de seu domínio a um único elemento de sua imagem, ela é chamada de:',//Questão 3
    respostas: [
      "a) Injetora",
      "b) Sobrejetora",
      "c) Bijetora",
      "d) Inversa",
      "e) Composta"
    ],
    correta: 0,//A
    imagemResolucao: "URL_DA_IMAGEM_QUESTAO1.jpg" // ADICIONE AQUI A URL DA IMAGEM
  },{
    pergunta: 'Sobre funções bijetoras, podemos afirmar que:',//Questão 4
    respostas: [
      "a) São apenas sobrejetoras.",
      "b) São apenas injetoras.",
      "c) São simultaneamente injetoras e sobrejetoras.",
      "d) Não possuem função inversa.",
      "e) Sempre têm mais elementos no domínio que no contradomínio."
    ],
    correta: 2,//C
    imagemResolucao: "URL_DA_IMAGEM_QUESTAO1.jpg" // ADICIONE AQUI A URL DA IMAGEM
  },{
    pergunta: 'Em relação a funções compostas, é correto dizer que:',//Questão 5
    respostas: [
      "a) A função composta de f e g é a soma de f com g.",
      "A função composta de f e g é sempre igual à função inversa de f.",
      "c) A composição de funções é associativa.",
      "d) Toda função composta é necessariamente bijetora.",
      "e) A função composta não depende da ordem de composição."
    ],
    correta: 2,//C
    imagemResolucao: "URL_DA_IMAGEM_QUESTAO1.jpg" // ADICIONE AQUI A URL DA IMAGEM
  },{
    pergunta: 'Qual das opções caracteriza uma sequência aritmética?',//Questão 6
    respostas: [
      "a) A razão entre dois termos consecutivos é constante.",
      "b) A diferença entre dois termos consecutivos é constante.",
      "c) Cada termo é o produto do anterior por uma constante.",
      "d) A sequência cresce de forma exponencial.",
      "e) Os termos dobram a cada passo."
    ],
    correta: 1,//B
    imagemResolucao: "URL_DA_IMAGEM_QUESTAO1.jpg" // ADICIONE AQUI A URL DA IMAGEM
  },{
    pergunta: 'Uma sequência geométrica é definida quando:',//Questão 7
    respostas: [
      "a) A diferença entre termos consecutivos é sempre igual.",
      "b) A razão entre termos consecutivos é constante.",
      "c) Os termos são múltiplos de números primos.",
      "d) O quadrado de cada termo é igual ao produto dos vizinhos.",
      "e) A sequência alterna entre soma e multiplicação."
    ],
    correta: 1,//B
    imagemResolucao: "URL_DA_IMAGEM_QUESTAO1.jpg" // ADICIONE AQUI A URL DA IMAGEM
  },{
    pergunta: 'Uma relação é dita simétrica quando:',//Questão 8
    respostas: [
      "a) Se (a, b) pertence à relação, então (b, a) também pertence.",
      "b) Cada elemento se relaciona apenas consigo mesmo.",
      "c) A relação depende de um valor numérico fixo.",
      "d) Existe pelo menos um par (a, b) para o qual (b, a) não pertence à relação.",
      "e) Não existem elementos iguais no conjunto."
    ],
    correta: 0,//A
    imagemResolucao: "URL_DA_IMAGEM_QUESTAO1.jpg" // ADICIONE AQUI A URL DA IMAGEM
  },{
    pergunta: 'Um subconjunto de um conjunto A é:',//Questão 9
    respostas: [
      "a) Um conjunto que contém todos os elementos de A e mais alguns.",
      "b) Um conjunto que possui apenas elementos que pertencem a A.",
      "c) Um conjunto que tem obrigatoriamente mais elementos que A.",
      "d) Um conjunto com elementos distintos de A.",
      "e) Um conjunto que não compartilha nenhum elemento com A."
    ],
    correta: 1,//B
    imagemResolucao: "URL_DA_IMAGEM_QUESTAO1.jpg" // ADICIONE AQUI A URL DA IMAGEM
  },{
    pergunta: '10. Uma função inversa de uma função bijetora f é definida como:',//Questão 10
    respostas: [
      "a) Uma função que associa cada elemento do contradomínio de f ao seu respectivo elemento do domínio de f.",
      "b) Uma função que duplica os valores da função f.",
      "c) Uma função que ignora o contradomínio de f.",
      "d) Uma função que apenas troca o sinal dos valores de f.",
      "e) Uma função que não tem relação com a função original f."
    ],
    correta: 0,//A
    imagemResolucao: "https://cdn.discordapp.com/attachments/1335943523459141664/1367896546963623936/3b164860-7971-44ad-ae5c-3ffcac8f8d5c.jpg?ex=6816406f&is=6814eeef&hm=6a3341de9a32c9aa435531671aebb7369e5d5b1470c2b61940c0b27044026c01&" // ADICIONE AQUI A URL DA IMAGEM
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
// Adiciona o event listener para o botão de finalizar
document.querySelector('.finalizar-container a').addEventListener('click', function(e) {
  // Salva os dados no localStorage antes do redirecionamento
  localStorage.setItem('quizPontuacao', corretas.size);
  localStorage.setItem('quizTotalPerguntas', totalDePerguntas);

  // O navegador continuará com o redirecionamento normal para resolucoes.html
  // Não precisa de preventDefault() ou window.location
});
