let cenario;
let imagemCenario;
let velocidadeCenario = 3
let velocidadeFrame = 40

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
    [0, 409],
    [104, 409],
    [208, 409],
    [312, 409],
    [0, 503],
    [104, 503],
    [208, 503],
    [312, 503],
    [0, 609],
    [104, 609],
    [208, 609],
    [312, 609],
  ]

let somDoJogo;
let somDoPulo;
let somGameOver;

function preload() { //antes do jogo começar
    imagemCenario = loadImage('./assets/imagens/cenario/floresta.png')
    imagemPersonagem = loadImage('./assets/imagens/personagem/correndo.png')
    imagemInimigo = loadImage('./assets/imagens/inimigos/gotinha.png')
    somDoJogo = loadSound('./assets/sons/trilha_jogo.mp3')
    somDoPulo = loadSound('./assets/sons/somPulo.mp3')
    somGameOver = loadSound('./assets/sons/gameOver.wav')
}

function setup() { //setup inicial do jogo. É chamado uma vez no inicio
    createCanvas(windowWidth, windowHeight)
    cenario = new Cenario(imagemCenario, velocidadeCenario)
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 20, 110, 135, 220, 270)
    inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 60, 52, 52, 104, 104)

    somDoJogo.loop()
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
    
    personagem.exibe()
    personagem.aplicaGravidade()

    inimigo.exibe()
    inimigo.move()

    if(personagem.estaColidindo(inimigo)){
        //mensagem.exibeMensagem()
        noLoop()
        somDoJogo.stop()

        //tamanho da imagem gameOver (512 x 362)
        loadImage('./assets/imagens/cenario/gameOver.png', img => {
            image(img, width/2 - 256, height/2 - 181);
        }) 

        somGameOver.play()
        
    }
}

