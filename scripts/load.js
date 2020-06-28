function preload() { //antes do jogo começar
    //imagemCenario = loadImage('./assets/imagens/cenario/floresta.png')

    imagemCenario1 = loadImage('./assets/novoCenario/1.png')
    imagemCenario2 = loadImage('./assets/novoCenario/2.png')
    imagemCenario3 = loadImage('./assets/novoCenario/3.png')
    imagemCenario4 = loadImage('./assets/novoCenario/4.png')
    imagemCenario5 = loadImage('./assets/novoCenario/5.png')
    imagemCenario6 = loadImage('./assets/novoCenario/6.png')
    imagemCenario7 = loadImage('./assets/novoCenario/7.png')

    imagemSegundaFase1 = loadImage('./assets/segundaFase/layer01_ground.png')
    imagemSegundaFase2 = loadImage('./assets/segundaFase/layer02_cake.png')
    imagemSegundaFase3 = loadImage('./assets/segundaFase/layer03_trees.png')
    imagemSegundaFase4 = loadImage('./assets/segundaFase/layer04_clouds.png')
    imagemSegundaFase5 = loadImage('./assets/segundaFase/layer05_rocks.png')
    imagemSegundaFase6 = loadImage('./assets/segundaFase/layer06_sky.png')

    imagemPersonagem = loadImage('./assets/imagens/personagem/correndo.png')

    imagemInimigo = loadImage('./assets/imagens/inimigos/gotinha.png')
    imagemInimigoGrande = loadImage('./assets/imagens/inimigos/troll.png')
    imagemInimigoVoador = loadImage('./assets/imagens/inimigos/gotinha-voadora.png')

    imagemMoeda = loadImage('./assets/imagens/cenario/moeda.png')
    imagemVida = loadImage('./assets/imagens/assets/coracao.png')

    imagemTelaInicial = loadImage('./assets/imagens/assets/telaInicial.png')
    fonteTelaInicial = loadFont('./assets/imagens/assets/fonteTelaInicial.otf')

    fita = loadJSON('./fita/fita.json')
    
    somDoJogo = loadSound('./assets/sons/music.mp3')
    somDoPulo = loadSound('./assets/sons/somPulo.mp3')
    somGameOver = loadSound('./assets/sons/gameOver.wav')
    somPowerUp = loadSound('./assets/sons/somPowerUp.wav')
}