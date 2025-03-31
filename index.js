const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());

const posts = [
    {
      id: 1,
      name: 'John Doe',
      timestamp: '2025-03-28T08:45:00Z',
      content: 'Hoje comecei um novo projeto de software. Estou empolgado, mas também um pouco nervoso. A ideia é criar algo simples, mas que possa crescer com o tempo. Vamos ver o que acontece!'
    },
    {
      id: 2,
      name: 'John Doe',
      timestamp: '2025-03-29T10:20:00Z',
      content: 'O que mais me impressiona no desenvolvimento de software é a quantidade de problemas que aparecem de onde menos esperamos. Às vezes, tudo funciona bem e, de repente, um simples erro quebra tudo. Desafios diários!'
    },
    {
      id: 3,
      name: 'John Doe',
      timestamp: '2025-03-30T14:10:00Z',
      content: 'Hoje fui dar uma caminhada ao ar livre. O tempo estava ótimo e a mente parecia mais tranquila. Às vezes, a resposta para um problema não vem em frente à tela do computador, mas sim quando nos desconectamos um pouco.'
    },
    {
      id: 4,
      name: 'John Doe',
      timestamp: '2025-03-30T18:35:00Z',
      content: 'Estou começando a pensar em uma ideia para um novo blog. Queria algo sobre tecnologia, mas que seja acessível para quem não é tão familiarizado com o assunto. Acredito que a educação digital tem muito potencial.'
    },
    {
      id: 5,
      name: 'John Doe',
      timestamp: '2025-03-31T08:00:00Z',
      content: 'Ontem, após mais um dia de trabalho, me peguei refletindo sobre as pequenas vitórias que a gente conquista sem nem perceber. Às vezes, avançar um pouco em um projeto, ou até mesmo aprender algo novo, é um grande progresso.'
    },
    {
      id: 6,
      name: 'John Doe',
      timestamp: '2025-03-31T12:15:00Z',
      content: 'Estou realmente começando a perceber a importância de dar pausa. O equilíbrio entre trabalho e descanso é fundamental. Hoje, tirei um tempo para relaxar, ouvir uma boa música e esquecer um pouco das preocupações.'
    }
];

app.get("/posts", (req, res) => {
    res.json(posts);
});

app.listen(port);