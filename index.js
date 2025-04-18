const perguntas = [
    {
      pergunta: 'Resposta item b',
      respostas: [
        "a",
        "b",
        "c",
      ],
      correta: 1
    },
    {
      pergunta: 'Resposta item b',
      respostas: [
        "a",
        "b",
        "c",
      ],
      correta: 1
    },
    {
      pergunta: 'Resposta item b',
      respostas: [
        "a",
        "b",
        "c",
      ],
      correta: 1
    },
    {
      pergunta: 'Resposta item b',
      respostas: [
        "a",
        "b",
        "c",
      ],
      correta: 1
    },
    {
      pergunta: 'Resposta item b',
      respostas: [
        "a",
        "b",
        "c",
      ],
      correta: 1
    },
    {
      pergunta: 'Resposta item b',
      respostas: [
        "a",
        "b",
        "c",
      ],
      correta: 1
    },
    {
      pergunta: 'Resposta item b',
      respostas: [
        "a",
        "b",
        "c",
      ],
      correta: 1
    },
    {
      pergunta: 'Resposta item b',
      respostas: [
        "a",
        "b",
        "c",
      ],
      correta: 1
    },
    {
      pergunta: 'Resposta item b',
      respostas: [
        "a",
        "b",
        "c",
      ],
      correta: 1
    },
    {
      pergunta: 'Resposta item b',
      respostas: [
        "a",
        "b",
        "c",
      ],
      correta: 1
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