// Recupera a pontuação do localStorage
const pontuacaoFinal = localStorage.getItem("quizPontuacao") || 0;
const totalPerguntas = localStorage.getItem("quizTotalPerguntas") || 10;

// Exibe a pontuação
document.getElementById("pontuacao-final").textContent =
  `Você acertou ${pontuacaoFinal} de ${totalPerguntas} questões`;

// Array de perguntas (o mesmo do seu quiz principal)
const perguntas = [
  {
    pergunta: "Sobre operações com conjuntos, é correto afirmar que:",//Q1
    correta: "b) A interseção de dois conjuntos contém apenas elementos comuns a ambos.",
    imagemResolucao: "URL_DA_IMAGEM_QUESTAO1.jpg" // SUBSTITUA PELA URL REAL
  },
  {
    pergunta: "Uma relação é dita reflexiva quando:",//Q2
    correta: "b) Todo elemento está relacionado consigo mesmo.",
    imagemResolucao: "URL_DA_IMAGEM_QUESTAO1.jpg" // SUBSTITUA PELA URL REAL
  },
  {
    pergunta: "Se uma função associa elementos diferentes de seu domínio a um único elemento de sua imagem, ela é chamada de:",//Q3
    correta: "a) Injetora",
    imagemResolucao: "URL_DA_IMAGEM_QUESTAO1.jpg" // SUBSTITUA PELA URL REAL
  },
  {
    pergunta: "Sobre funções bijetoras, podemos afirmar que:",//Q4
    correta: "c) São simultaneamente injetoras e sobrejetoras.",
    imagemResolucao: "URL_DA_IMAGEM_QUESTAO1.jpg" // SUBSTITUA PELA URL REAL
  },
  {
    pergunta: "Em relação a funções compostas, é correto dizer que:",//Q5
    correta: "c) A composição de funções é associativa.",
    imagemResolucao: "URL_DA_IMAGEM_QUESTAO1.jpg" // SUBSTITUA PELA URL REAL
  },
  {
    pergunta: "Qual das opções caracteriza uma sequência aritmética?",//Q6
    correta: "b) A diferença entre dois termos consecutivos é constante.",
    imagemResolucao: "URL_DA_IMAGEM_QUESTAO1.jpg" // SUBSTITUA PELA URL REAL
  },
  {
    pergunta: "Uma sequência geométrica é definida quando:",//Q7
    correta: "b) A razão entre termos consecutivos é constante.",
    imagemResolucao: "URL_DA_IMAGEM_QUESTAO1.jpg" // SUBSTITUA PELA URL REAL
  },
  {
    pergunta: "Uma relação é dita simétrica quando:",//Q8
    correta: "a) Se (a, b) pertence à relação, então (b, a) também pertence.",
    imagemResolucao: "URL_DA_IMAGEM_QUESTAO1.jpg" // SUBSTITUA PELA URL REAL
  },
  {
    pergunta: "Um subconjunto de um conjunto A é:",//Q9
    correta: "b) Um conjunto que possui apenas elementos que pertencem a A.",
    imagemResolucao: "URL_DA_IMAGEM_QUESTAO1.jpg" // SUBSTITUA PELA URL REAL
  },
  {
    pergunta: "Uma função inversa de uma função bijetora f é definida como:",//Q10
    correta: "a) uma função que associa cada elemento do contradomínio de f ao seu respectivo elemento do domínio de f.",
    imagemResolucao: "https://cdn.discordapp.com/attachments/1335943523459141664/1367896546963623936/3b164860-7971-44ad-ae5c-3ffcac8f8d5c.jpg?ex=6816406f&is=6814eeef&hm=6a3341de9a32c9aa435531671aebb7369e5d5b1470c2b61940c0b27044026c01&" // SUBSTITUA PELA URL REAL
  },

];

// Gera o gabarito
const gabaritoContainer = document.getElementById("gabarito-container");

perguntas.forEach((questao, index) => {
  const gabaritoItem = document.createElement("div");
  gabaritoItem.className = "gabarito-item";

  gabaritoItem.innerHTML = `
                <div class="gabarito-pergunta"><strong>Questão ${index + 1}:</strong> ${questao.pergunta}</div>
                <div class="gabarito-resposta"><strong>Resposta correta:</strong> ${questao.correta}</div>
                <div class="gabarito-explicacao">
                    <img src="${questao.imagemResolucao}" alt="Resolução questão ${index + 1}" class="gabarito-imagem">
                </div>
            `;

  gabaritoContainer.appendChild(gabaritoItem);
});