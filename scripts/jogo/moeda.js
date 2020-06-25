class Moeda {
    constructor(imagem, x, variacaoY, largura, altura, velocidade){
        this.imagem = imagem
        this.x = x
        this.variacaoY = variacaoY
        this.velocidade = velocidade
        this.largura = largura
        this.altura = altura
    }

    exibe(){
        
        image(
            this.imagem,
            this.x, 
            this.variacaoY,
            this.largura,
            this.altura
        )
        this.move()
    }

    move (delay){
        this.x = this.x - this.velocidade

        if(this.x < -width - delay) {
            this.x = width
        }
    }
}