
let cenario;
let imagemCenario;
let velocidadeCenario = 3
let velocidadeFrame = 40

let moeda
let imagemMoeda

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
const moedas = []

let somDoJogo;
let somDoPulo;
let somGameOver;
let pontuacao

function preload() { //antes do jogo começar
    imagemCenario = loadImage('./assets/imagens/cenario/floresta.png')
    imagemPersonagem = loadImage('./assets/imagens/personagem/correndo.png')
    imagemInimigo = loadImage('./assets/imagens/inimigos/gotinha.png')
    imagemInimigoGrande = loadImage('./assets/imagens/inimigos/troll.png')
    imagemInimigoVoador = loadImage('./assets/imagens/inimigos/gotinha-voadora.png')

    imagemMoeda = loadImage('./assets/imagens/cenario/moeda.png')
    
    somDoJogo = loadSound('./assets/sons/trilha_jogo.mp3')
    somDoPulo = loadSound('./assets/sons/somPulo.mp3')
    somGameOver = loadSound('./assets/sons/gameOver.wav')
}

function setup() { //setup inicial do jogo. É chamado uma vez no inicio
    createCanvas(windowWidth, windowHeight)
    cenario = new Cenario(imagemCenario, velocidadeCenario)

    pontuacao = new Pontuacao()

    const moeda1 = new Moeda(imagemMoeda, 5, 300)
    const moeda2 = new Moeda(imagemMoeda, 5, 500)
    const moeda3 = new Moeda(imagemMoeda, 5, 700)

    moedas.push(moeda1)
    moedas.push(moeda2)
    moedas.push(moeda3)

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 20, 30, 110, 135, 220, 270)
    
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 60, 30, 52, 52, 104, 104, 10, 200)
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10, 2500)
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 60, 200, 100, 75, 200, 150, 10, 1000)

    inimigos.push(inimigo)
    inimigos.push(inimigoGrande)
    inimigos.push(inimigoVoador)

    //somDoJogo.loop()
    frameRate(velocidadeFrame)
}

function keyPressed(){
    if(key === 'ArrowUp') {
        personagem.pula()
        somDoPulo.play()
    }
    if(key === 'ArrowRight') {
        personagem.andaParaFrente()
    }
    if(key === 'ArrowLeft') {
        personagem.andaParaTras()
    }
}

function draw(){ //desenhar o jogo. É chamado a todo momento
    cenario.exibe()
    cenario.move() 

    moedas.forEach(moeda => {
        moeda.exibe()
        moeda.move()
    })

    pontuacao.exibe()
    pontuacao.adicionarPonto(0)
    
    personagem.exibe()
    personagem.aplicaGravidade()

    inimigos.forEach(inimigo => {

        inimigo.exibe()
        inimigo.move()

        if(personagem.estaColidindo(inimigo)){
            
            noLoop()
            somDoJogo.stop()
    
            //tamanho da imagem gameOver (512 x 362)
            loadImage('./assets/imagens/cenario/gameOver.png', img => {
                image(img, width/2 - 256, height/2 - 181);
            }) 
    
            somGameOver.play()
        }
    })

    
}

