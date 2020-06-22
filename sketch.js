let cenario;
let imagemCenario;
let velocidadeCenario = 3
let velocidadeFrame = 40

let personagem;
let imagemPersonagem;

let somDoJogo;

function preload() { //antes do jogo começar
    imagemCenario = loadImage('./assets/imagens/cenario/floresta.png')
    imagemPersonagem = loadImage('./assets/imagens/personagem/correndo.png')
    somDoJogo = loadSound('./assets/sons/trilha_jogo.mp3')
}

function setup() { //setup inicial do jogo. É chamado uma vez no inicio
    createCanvas(windowWidth, windowHeight)
    cenario = new Cenario(imagemCenario, velocidadeCenario)
    personagem = new Personagem(imagemPersonagem)
    somDoJogo.loop()
    frameRate(velocidadeFrame)
}

function draw(){ //desenhar o jogo. É chamado a todo momento
    cenario.exibe()
    cenario.move()  
    personagem.exibe()
}

