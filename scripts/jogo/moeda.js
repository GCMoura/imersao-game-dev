class Moeda {
    constructor(imagem, velocidade, delay){
        this.imagem = imagem
        this.x = width - 60
        this.posicoes = [height - 100, height - 250, height - 400]
        this.index
        this.velocidade = velocidade
        this.delay = delay
        this.index = Math.floor(Math.random() * this.posicoes.length)
    }

    exibe(){
        
        image(
            this.imagem,
            this.x, 
            this.posicoes[this.index],
            55, 53
        )
        this.move()
    }

    move (){
        this.x = this.x - this.velocidade

        if(this.x < -width - this.delay) {
            this.x = width
        }
    }
}