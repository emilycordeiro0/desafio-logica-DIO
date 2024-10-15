/*# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}***/

let nomeDoHeroi = 'Luminaris'; 
let experiencia = 9504;

switch (true){
  case (experiencia <= 1000):
    console.log("O herói de nome " + nomeDoHeroi + " está no nivel: Ferro");
    break;

  case (experiencia >= 1001 && experiencia <= 2000):
    console.log("O herói de nome " + nomeDoHeroi + " está no nivel: Bronze");
    break;

  case (experiencia >= 2001 && experiencia <= 5000):
    console.log("O herói de nome " + nomeDoHeroi + " está no nivel: Prata");
    break;

  case (experiencia >= 5001 && experiencia <= 7000):
    console.log("O herói de nome " + nomeDoHeroi + " está no nivel: Ouro");
    break;

  case (experiencia >= 7001 && experiencia <= 8000):
    console.log("O herói de nome " + nomeDoHeroi + " está no nivel: Platina");
    break;

  case (experiencia >= 8001 && experiencia <= 9000):
    console.log("O herói de nome " + nomeDoHeroi + " está no nivel: Ascendente");
    break;

  case (experiencia >= 9001 && experiencia <= 10000):
    console.log("O herói de nome " + nomeDoHeroi + " está no nivel: Imortal");
    break;

  case (experiencia >= 10001):
    console.log("O herói de nome " + nomeDoHeroi + " está no nivel: Radiante");
    break;

  default:
    console.log("Não foi possivel localizar o nivel do herói " + nomeDoHeroi);
    break;
}

