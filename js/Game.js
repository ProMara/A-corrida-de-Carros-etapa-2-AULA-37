class Game {
  constructor() {}

  lerEstado(){
    database.ref("gameState").on("value", (data)=>{
      gameState = data.val();
    })
  }

  atualizarEstado(state){
    var ref = database.ref("/");
    ref.update({
      gameState:state
    })
  }
 
  start() {
    //criar o objeto player

    //definir a quantidade de jogadores

    form = new Form();
    form.exibir()

    //criar as sprites dos carros
    carro1 = createSprite(width/2-100, height - 100);
    carro1.addImage(carroimg1);
    carro1.scale = 0.07;

    carro2 = createSprite(width/2+100, height - 100);
    carro2.addImage(carroimg2);
    carro2.scale = 0.07;
    
  }

  elementos() {
    form.esconder();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
    this.elementos();

   //chamar a função estática
    image(estrada,0, -height*4.5, width, height*6);
    drawSprites();   
  }
}
