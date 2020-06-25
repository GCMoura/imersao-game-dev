function setup() { //setup inicial do jogo. É chamado uma vez no inicio
    createCanvas(windowWidth, windowHeight)

    jogo = new Jogo()
    jogo.setup()

    telaInicial = new TelaInicial()
    botaoGerenciador = new BotaoGerenciador('Start', width / 2, height / 2)

    cenas = {
        jogo,
        telaInicial
    }
    
    //somDoJogo.loop()
    frameRate(velocidadeFrame)
}

function keyPressed(){
    jogo.keyPressed(key)
}

function draw(){ //desenhar o jogo. É chamado a todo momento
    cenas[cenaAtual].draw()
}

