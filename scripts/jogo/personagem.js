
class Personagem extends Animacao{
    constructor (matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

        this.variacaoY = variacaoY

        this.yInicial = height - this.altura - this.variacaoY
        this.y = this.yInicial

        this.xInicial = this.x

        this.gravidade = 7
        this.velocidadeDoPulo = 0
        this.alturaDoPulo = -50
        this.pulos = 0

        this.invencivel = false
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

    tornarInvencivel(){
        this.invencivel = true
        setTimeout(() => {
            this.invencivel = false
        }, 1000)
    }

    estaColidindo(inimigo) {

        if(this.invencivel) {
            return false
        }

        const precisao = .7

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

    passou(inimigo){
        if(this.x > inimigo.x){
            return true
        }
        return false
    }

    // estaColetando(moeda) {
         
    //     const precisao = .7

    //     const colisaoMoeda = collideCircleCircle(
    //         this.x + (this.largura/2), 
    //         this.y + (this.altura/2), 
    //         this.largura * precisao,
    //         moeda.x + (moeda.largura/2), 
    //         moeda.variacaoY + (moeda.altura/2), 
    //         moeda.largura
    //     )
    //     return colisaoMoeda
    // }

}