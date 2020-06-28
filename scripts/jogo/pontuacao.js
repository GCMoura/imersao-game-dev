class Pontuacao {
    constructor(){
        this.pontos = 0
    }

    exibe(){
        textAlign(RIGHT)
        fill('#fff')
        textSize(50)
        text(parseInt(this.pontos), width - 40, 60)
    }

    adicionarPonto(vida){
        this.pontos = this.pontos + 10
        if(this.pontos % 100 == 0){
            vida.ganhaVida()
            somPowerUp.play()
            return this.pontos
        }
        return this.pontos
    }
}