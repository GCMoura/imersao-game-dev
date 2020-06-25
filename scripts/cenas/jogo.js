class Jogo {
    constructor() {
        this.inimigoAtual = 0
    }

    setup() {
        cenario = new Cenario(imagemCenario, velocidadeCenario)
        pontuacao = new Pontuacao()

        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 20, 30, 110, 135, 220, 270)
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 60, 30, 52, 52, 104, 104, 10, 100)
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10, 100)
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 60, 200, 100, 75, 200, 150, 10, 100)

        inimigos.push(inimigo)
        inimigos.push(inimigoGrande)
        inimigos.push(inimigoVoador)

        // const moedaAlto = new Moeda(imagemMoeda, width -60, height - 400, 55, 53, 5)
        // const moedaMedio =new Moeda(imagemMoeda, width -60, height - 250, 55, 53, 6)
        // const moedaBaixo = new Moeda(imagemMoeda, width -60, height - 100, 55, 53,  8)

        // moedas.push(moedaAlto)
        // moedas.push(moedaMedio)
        // moedas.push(moedaBaixo)

    }

    keyPressed(key){
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

    draw() {
    cenario.exibe()
    cenario.move() 

    pontuacao.exibe()
    
    personagem.exibe()
    personagem.aplicaGravidade()

    const inimigo = inimigos[this.inimigoAtual]  
    const inimigoVisivel = inimigo.x < -inimigo.largura

    inimigo.exibe()
    inimigo.move()

    if(inimigoVisivel) {
        this.inimigoAtual++
        if(this.inimigoAtual > inimigos.length){
            this.inimigoAtual = 0
        }
        inimigo.velocidade = parseInt(random(10, 25))
    }

    if(personagem.estaColidindo(inimigo)){
        noLoop()
        somDoJogo.stop()
        //tamanho da imagem gameOver (512 x 362)
        loadImage('./assets/imagens/cenario/gameOver.png', img => {
            image(img, width/2 - 256, height/2 - 181);
        }) 
        //somGameOver.play()
    }
    //falta acertar a pontuação

    // moedas.forEach(moeda => {
    //     moeda.exibe()

    //     delayMoeda = Math.floor(Math.random() * (2000 - 100 + 1) + 100)

    //     moeda.move(delayMoeda)

    //     if(personagem.estaColetando(moeda)) {
    //         pontuacaoMoeda = true                   
    //     }

    //     if(pontuacaoMoeda == true) {
    //         pontuacao.adicionarPonto(pontuacaoMoeda)
    //         pontuacaoMoeda = false
    //     }
    // })
    }
}