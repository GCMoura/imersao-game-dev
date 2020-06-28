
let cenario;
let imagemCenario;

let cenario1;
let cenario2;
let cenario3;
let cenario4;
let cenario5;
let cenario6;
let cenario7;

let imagemCenario1;
let imagemCenario2;
let imagemCenario3;
let imagemCenario4;
let imagemCenario5;
let imagemCenario6;
let imagemCenario7;

let segundaFase1
let segundaFase2
let segundaFase3
let segundaFase4
let segundaFase5
let segundaFase6
let segundaFase7

let imagemSegundaFase1
let imagemSegundaFase2
let imagemSegundaFase3
let imagemSegundaFase4
let imagemSegundaFase5
let imagemSegundaFase6
let imagemSegundaFase7

let velocidadeCenario = 3
let velocidadeFrame = 40

// let imagemMoeda
// let delayMoeda
// let pontuacaoMoeda = 0
// let moeda

let personagem;
let imagemPersonagem;

const matrizPersonagem = [
    [0, 0],
    [220, 0],
    [440, 0],
    [660, 0],
    [0, 270],
    [220, 270],
    [440, 270],
    [660, 270],
    [0, 540],
    [220, 540],
    [440, 540],
    [660, 540],
    [0, 810],
    [220, 810],
    [440, 810],
    [660, 810]
]

let inimigo
let imagemInimigo
const matrizInimigo = [
    [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
  ]

let inimigoGrande 
let imagemInimigoGrande
const matrizInimigoGrande = [
    [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000]
]

let inimigoVoador
let imagemInimigoVoador
const matrizInimigoVoador = [
    [0,0],
    [200, 0],
    [400, 0],
    [0, 150],
    [200, 150],
    [400, 150],
    [0, 300],
    [200, 300],
    [400, 300],
    [0, 450],
    [200, 450],
    [400, 450],
    [0, 600],
    [200, 600],
    [400, 600],
    [0, 750],
  ]

const inimigos = []

let somDoJogo;
let somDoPulo;
let somGameOver;
let pontuacao

let cenaAtual = 'telaInicial'
let cenas

let jogo   
let telaInicial
let segundaFase
let botaoGerenciador

let imagemTelaInicial
let fonteTelaInicial

let vida
let imagemVida

let fita

let pontuacaoFlag = 0

let somPowerUp