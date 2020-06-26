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

        for (let i = 0; i < 3; i++){
            const posicao = 150 * i 

            image(
                this.imagem,
                this.x, 
                this.variacaoY - posicao,
                this.largura,
                this.altura
            )
        }
    
    }

    move (delay){
        this.x = this.x - this.velocidade

        if(this.x < -width - delay) {
            this.x = width
        }
    }

    apaga(){
        this.imagem.remove()
    }
}