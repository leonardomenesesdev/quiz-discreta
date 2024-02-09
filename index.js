const perguntas = [
    {
      pergunta: 'O que o leleco mais gosta de fazer no fim de semana?',
      respostas: [
        "Jogar",
        "Ver a mandy",
        "Dormir",
      ],
      correta: 1
    },
    {
      pergunta: 'O quanto o leleco ama a mandy?',
      respostas: [
        "Um tico",
        "Absurdamente infinitamente inefavelmente",
        "Muito mas nem tanto!",
      ],
      correta: 1
    },
    {
      pergunta: 'Onde o leleco morava quando era criancinha?',
      respostas: [
        "Fortaleza",
        "Horizonte",
        "Cascavel",
      ],
      correta: 1
    },
    {
      pergunta: 'Quais desses cantos leleco sonha em morar?',
      respostas: [
        "Canadá",
        "Estados Unidos",
        "Suíça",
      ],
      correta: 0
    },
    {
      pergunta: 'Qual o jogo favorito de leleco',
      respostas: [
        "CS2",
        "Valorant",
        "Fifa",
      ],
      correta: 0
    },
    {
      pergunta: 'Quais dessas coisas leleco mais gosta de fazer com a mandy?',
      respostas: [
        "Ler o livro do steller",
        "Ver tiktok",
        "Ver filmeco bom",
      ],
      correta: 2
    },
    {
      pergunta: 'Qual o maior sonho de leleco?',
      respostas: [
        "Ser o homem mais rico e influente do mundo",
        "Dar orgulho pra família dele e pra da mandy e ser bem sucedido",
        "Viajar o mundo todinho",
      ],
      correta: 1
    },
    {
      pergunta: 'Qual a saga de livros favoritas de leleco?',
      respostas: [
        "Percy Jackson",
        "Harry Potter",
        "Desventuras em Série",
      ],
      correta: 1
    },
    {
      pergunta: 'Qual a viagem dos sonhos de leleco com a mandy?',
      respostas: [
        "Suíça no natal",
        "Disney",
        "O destino que a mandy escolher",
      ],
      correta: 2
    },
    {
      pergunta: 'Quem é a melhor namorada do mundo?',
      respostas: [
        "A mandyyyyy",
        "A mandocaaaaaa",
        "A minha plincesa perfeita mais linda do mundo maravilhosa que eu façõ de tudo",
      ],
      correta: 2
    }
  ];
  const quiz= document.querySelector('#quiz')
  const template= document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal=document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  for(const item of perguntas) { 
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let respostas of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode (true)
    dt.querySelector('span').textContent = respostas
    dt.querySelector('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item))
   dt.querySelector('input').value = item.respostas.indexOf(respostas)
   dt.querySelector('input').onchange = (event) => {
     const estaCorreta = event.target.value == item.correta
     corretas.delete(item)
     if (estaCorreta){
      corretas.add(item)
     }
  
   
     mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
   }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  quizItem.querySelector('dl dt').remove()
  
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }