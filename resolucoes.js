// Recupera a pontuação do localStorage
const pontuacaoFinal = localStorage.getItem("quizPontuacao") || 0;
const totalPerguntas = localStorage.getItem("quizTotalPerguntas") || 10;

// Exibe a pontuação
document.getElementById("pontuacao-final").textContent =
  `Você acertou ${pontuacaoFinal} de ${totalPerguntas} questões`;

const foto1 = "https://cdn.discordapp.com/attachments/1335943523459141664/1368362390659534878/image.jpg?ex=6817f248&is=6816a0c8&hm=7d600bb1abc116be0713ee1f057456517d74d5428bc777aab7638e5f3afe241e&";
const foto2 = "https://cdn.discordapp.com/attachments/1335943523459141664/1368362391770759288/image.jpg?ex=6817f249&is=6816a0c9&hm=877da96324f0b64210a0c31557ef3ee28b98ad20a9fe283a87b1fd107c93e53f&";
const foto3 = "https://cdn.discordapp.com/attachments/1335943523459141664/1368362392836112394/image.jpg?ex=6817f249&is=6816a0c9&hm=72669c25d19560f4c74d8a8b4216563bca4ba3c77e4629380b5aafbd356478a1&";
const foto4 = "https://cdn.discordapp.com/attachments/1335943523459141664/1368362391015784571/image.jpg?ex=6817f248&is=6816a0c8&hm=ebc3810d1d5ad53163d55177201b765e9bd20fcf328ada4014bf88339c1ca196&";
const foto5 = "https://cdn.discordapp.com/attachments/1335943523459141664/1368362390298820688/image.jpg?ex=6817f248&is=6816a0c8&hm=19aeb66220ea46f015748cd431a2a7743089a52acbed0d687a51ed3602ba852c&";
const foto6 = "https://cdn.discordapp.com/attachments/1335943523459141664/1368362391460646994/image.jpg?ex=6817f249&is=6816a0c9&hm=de89268459164f9de73e8a6b11b8167e03dcda2dca6ffdca354738a531f0f356&";
const foto7 = "https://cdn.discordapp.com/attachments/1335943523459141664/1368362393213735013/image.jpg?ex=6817f249&is=6816a0c9&hm=c71d16b708a9c4973515fb763922c841a69ef3624987ce27e823afaca4f652bc&";
const foto8 = "https://cdn.discordapp.com/attachments/1335943523459141664/1368362392513417276/image.jpg?ex=6817f249&is=6816a0c9&hm=685f879af4f3241e1a34520b5c6aebeddc48c348fbe44e913333f8b334a5e606&";
const foto9 = "https://cdn.discordapp.com/attachments/1335943523459141664/1368362392097918996/image.jpg?ex=6817f249&is=6816a0c9&hm=ae7650d64546791f4d0336180136ae0b0716b32ec45814d1a2630c37ab4428ef&";
const foto10 = "https://cdn.discordapp.com/attachments/1335943523459141664/1367896546963623936/3b164860-7971-44ad-ae5c-3ffcac8f8d5c.jpg?ex=6816406f&is=6814eeef&hm=6a3341de9a32c9aa435531671aebb7369e5d5b1470c2b61940c0b27044026c01&";

// Array de perguntas (o mesmo do seu quiz principal)
const perguntas = [
  {
    pergunta: "Sobre operações com conjuntos, é correto afirmar que:",//Q1
    correta: "b) A interseção de dois conjuntos contém apenas elementos comuns a ambos.",
    imagemResolucao: foto1
  },
  {
    pergunta: "Uma relação é dita reflexiva quando:",//Q2
    correta: "b) Todo elemento está relacionado consigo mesmo.",
    imagemResolucao: foto2
  },
  {
    pergunta: "Se uma função associa elementos diferentes de seu domínio a um único elemento de sua imagem, ela é chamada de:",//Q3
    correta: "a) Injetora",
    imagemResolucao: foto3
  },
  {
    pergunta: "Sobre funções bijetoras, podemos afirmar que:",//Q4
    correta: "c) São simultaneamente injetoras e sobrejetoras.",
    imagemResolucao: foto4
  },
  {
    pergunta: "Em relação a funções compostas, é correto dizer que:",//Q5
    correta: "c) A composição de funções é associativa.",
    imagemResolucao: foto5
  },
  {
    pergunta: "Qual das opções caracteriza uma sequência aritmética?",//Q6
    correta: "b) A diferença entre dois termos consecutivos é constante.",
    imagemResolucao: foto6
  },
  {
    pergunta: "Uma sequência geométrica é definida quando:",//Q7
    correta: "b) A razão entre termos consecutivos é constante.",
    imagemResolucao: foto7
  },
  {
    pergunta: "Uma relação é dita simétrica quando:",//Q8
    correta: "a) Se (a, b) pertence à relação, então (b, a) também pertence.",
    imagemResolucao: foto8
  },
  {
    pergunta: "Um subconjunto de um conjunto A é:",//Q9
    correta: "b) Um conjunto que possui apenas elementos que pertencem a A.",
    imagemResolucao: foto9
  },
  {
    pergunta: "Uma função inversa de uma função bijetora f é definida como:",//Q10
    correta: "a) uma função que associa cada elemento do contradomínio de f ao seu respectivo elemento do domínio de f.",
    imagemResolucao: foto10
  }

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