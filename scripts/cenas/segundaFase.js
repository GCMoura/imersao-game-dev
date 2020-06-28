class SegundaFase {
    constructor() {
        this.indice = 0
        //this.moedaAtual = 0
        this.mapa = fita.mapa
    }

    setup() {
        //cenario = new Cenario(imagemCenario, velocidadeCenario)

        segundaFase2 = new Cenario(imagemSegundaFase6, 0.7)
        segundaFase3 = new Cenario(imagemSegundaFase5, 1)
        segundaFase4 = new Cenario(imagemSegundaFase4, 1.5)
        segundaFase5 = new Cenario(imagemSegundaFase3, 2)
        segundaFase6 = new Cenario(imagemSegundaFase2, 2.5)
        segundaFase7 = new Cenario(imagemSegundaFase1, 3)
        
        pontuacao = new Pontuacao()

        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 20, 107, 110, 135, 220, 270)
        
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 60, 110, 52, 52, 104, 104, 10)
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 50, 200, 200, 400, 400, 10)
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 60, 200, 100, 75, 200, 150, 10)

        inimigos.push(inimigo)
        inimigos.push(inimigoGrande)
        inimigos.push(inimigoVoador)

        //moeda = new Moeda(imagemMoeda, width - 60, height - 100, 55, 53, 5)

        vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial)
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
        // cenario.exibe()
        // cenario.move() 

        
        segundaFase2.exibe()
        segundaFase2.move()
        segundaFase3.exibe()
        segundaFase3.move()
        segundaFase4.exibe()
        segundaFase4.move()
        segundaFase5.exibe()
        segundaFase5.move()
        segundaFase6.exibe()
        segundaFase6.move()
        segundaFase7.exibe()
        segundaFase7.move()
        

        vida.exibe()

        pontuacao.exibe()
        
        personagem.exibe()
        personagem.aplicaGravidade()

        const linhaAtual = this.mapa[this.indice]
        const inimigo = inimigos[linhaAtual.inimigo]  
        const inimigoVisivel = inimigo.x < -inimigo.largura

        inimigo.velocidade = linhaAtual.velocidade

        inimigo.exibe()
        inimigo.move()

        if(inimigoVisivel) {
            pontuacaoFlag = 0
            this.indice++
            inimigo.reaparecer()
            if(this.indice > this.mapa.length - 1){
                this.indice = 0
            }
        }

        if(personagem.estaColidindo(inimigo)){
            pontuacaoFlag++
            vida.perdeVida()
            personagem.tornarInvencivel()

            if(vida.vidas === 0) {
                vida.perdeVida()
                
                somDoJogo.stop()
    
                loadImage('./assets/imagens/cenario/gameOver.png', img => {
                    image(img, width/2 - 256, height/2 - 181);
                }) 
                somGameOver.play()
                noLoop()
            }
        } 
    
        if(personagem.passou(inimigo)){
            pontuacaoFlag++
            if(pontuacaoFlag === 1){
                pontuacao.adicionarPonto(vida)
            }
        }
        

        // if(!personagem.estaColidindo(inimigo) && inimigoVisivel && !vida.perdeVida()){
        //     console.log('aqui')
        // }

        // moeda.exibe()
        // delayMoeda = Math.floor(Math.random() * (2000 - 100 + 1) + 100)
        // moeda.move(delayMoeda)

    //     const moeda = moedas[this.moedaAtual]
    //     const moedaInvisivel = moeda.x < -moeda.largura

    //     if(moedaInvisivel) {
    //         this.moedaAtual++
    //         pontuacaoMoeda = 0
            
            
    //         if(this.moedaAtual > moedas.length - 1){
    //             this.moedaAtual = 0
    //             if(moedas[this.moedaAtual] === ''){
    //                 this.moedaAtual++
    //             }
    //         }
    //         moeda.velocidade = parseInt(random(10, 20))
    //     }

    //     if(personagem.estaColetando(moeda)) {
    //         pontuacaoMoeda++
    //         if(pontuacaoMoeda === 1) {
    //             pontuacao.adicionarPonto()
    //             moedas.splice(this.moedaAtual, 1)
    //             console.log('this.moedaAtual', this.moedaAtual)
    //             console.log(moedas.length)
    //         }
    //     }
     }
}