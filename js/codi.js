$(document).ready(function(){
    crearTauler(tetris.espaiJoc);
//setInterval(movimentAutomatic(),100);
});

var tetris = {
    pecesQueVanSorgint : new Array(),
    espaiJoc:   [
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0]
                ],
                puntuacioJugador:0,
                puntuacioMaximaAconseguida:0,
                pecaVigent:0,
                seguentPeca:0,
                contadorPeca: new Array(),
                intervalTemps:0,
                //iniciar juego
                inicialitzarJoc: function(){


                },
                // siguiente pieza en salir de forma aleatoria
                seguentpeca: function(){
                    GeneraPecaAleatoria();
                },
                //movimiento automatico del juego
                movimentAutomatic: function(){
                   
                }
}
var Peca = function(forma,color,posX,posY){
    this.forma = forma;
    this.color = color;
    this.posX = posX;
    this.posY = posY;

}
Peca.prototype.moureEsquerra = function(){
    if(this.posX>0 && this.posX<14){
        this.posX--;
        return true;
    }else{
        return false;
    }
};

Peca.prototype.moureDreta = function(){
    if(this.posX>0 && this.posX<14){
        this.posX++;
        return true;
    }else{
        return false;
    }
};

function GeneraPecaAleatoria(){ 
    var peces = [
        [[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],"groc"],
        [[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],"lila"],
        [[[0,0,0,0],[0,1,1,0],[1,1,0,0],[0,0,0,0]],"verd"],
        [[[0,0,0,0],[0,1,1,0],[0,0,1,1],[0,0,0,0]],"roig"],
        [[[0,1,0,0],[0,1,0,0],[0,1,1,0],[0,0,0,0]],"blau"],
        [[[0,1,1,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]],"taronga"],
        [[[0,0,0,0],[1,1,1,0],[0,1,0,0],[0,0,0,0]],"morat"] ]
  var numeroAleatori = Math.round(Math.random()*6);                      
  return peces[numeroAleatori];     
}
function crearTauler(espaiJoc){
    console.log(espaiJoc);
    console.log(espaiJoc.length);
    for(var i = 0; i < espaiJoc.length; i++){
        console.log("primerFor");
        
        $("#tablero").append("<tr>");
        for(var j = 0; j <espaiJoc[i].length; j++){
            //console.log("sgundoFor");
            $("#tablero").append("<td>"+espaiJoc[i][j]+"</td>");
        }
        $("#tablero").append("</tr>");
    }
    return espaiJoc;

}

