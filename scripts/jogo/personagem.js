
class Personagem extends Animacao{
    constructor (matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

        this.variacaoY = variacaoY

        this.yInicial = height - this.altura - 30
        this.y = this.yInicial

        this.xInicial = this.x

        this.gravidade = 7
        this.velocidadeDoPulo = 0
        this.alturaDoPulo = -50
        this.pulos = 0
    }

    pula() {
        if(this.pulos < 2) {
            this.velocidadeDoPulo = this.alturaDoPulo
            this.pulos++
        }
        
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadeDoPulo
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

        if(this.y > this.yInicial) {
            this.y = this.yInicial
            this.pulos = 0
        }
    }

    andaParaFrente(){
        if(this.x < windowWidth - 100) {
            this.x = this.x + 20
        }
    }

    andaParaTras(){
        if(this.x > this.xInicial) {
            this.x = this.x - 20
        }
    }

    estaColidindo(inimigo) {

        const precisao = .7

        // circle(this.x + (this.largura/2) , 
        // this.y + (this.altura/2), 
        // this.largura * precisao)

        // circle(inimigo.x + (inimigo.largura/2), 
        // inimigo.y + (inimigo.altura/2), 
        // inimigo.largura * precisao)

        const colisao = collideCircleCircle(
            this.x + (this.largura/2), 
            this.y + (this.altura/2), 
            this.largura * precisao,
            inimigo.x + (inimigo.largura/2), 
            inimigo.y + (inimigo.altura/2), 
            inimigo.largura * precisao
        )

        return colisao
    }

}