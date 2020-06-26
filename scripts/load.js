function preload() { //antes do jogo começar
    imagemCenario = loadImage('./assets/imagens/cenario/floresta.png')
    imagemPersonagem = loadImage('./assets/imagens/personagem/correndo.png')
    imagemInimigo = loadImage('./assets/imagens/inimigos/gotinha.png')
    imagemInimigoGrande = loadImage('./assets/imagens/inimigos/troll.png')
    imagemInimigoVoador = loadImage('./assets/imagens/inimigos/gotinha-voadora.png')
    imagemMoeda = loadImage('./assets/imagens/cenario/moeda.png')
    imagemVida = loadImage('./assets/imagens/assets/coracao.png')
    imagemTelaInicial = loadImage('./assets/imagens/assets/telaInicial.png')
    fonteTelaInicial = loadFont('./assets/imagens/assets/fonteTelaInicial.otf')

    fita = loadJSON('./fita/fita.json')
    
    somDoJogo = loadSound('./assets/sons/trilha_jogo.mp3')
    somDoPulo = loadSound('./assets/sons/somPulo.mp3')
    somGameOver = loadSound('./assets/sons/gameOver.wav')
}