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
                nivell:1,
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

Peca.prototype.moureAvall = function(posY){
        this.posY--;
        // console.log(posY);
        
};

Peca.prototype.pintar = function(){ 
    var resultat = "<table border='1'>";
    for (var i = 0; i < this.forma.length;i++){ 
        resultat = resultat + "<tr>"
        for (var j = 0; j<this.forma[i].length;j++) { 
            resultat = resultat + "<td>";
            if (this.forma[i][j]==1) { resultat=resultat+"X" }
            else { resultat = resultat + "-" };
            resultat = resultat + "</td>";
        }
        resultat = resultat + "</tr>";
    }
    resultat = resultat + "</table>";
    return resultat
};                      
         
Peca.prototype.rotarHorari = function () {
    var formaNova = new Array();
    for (var i=0;i<this.forma.length;i++) {
        formaNova[i]=new Array();
        for (var j=0;j<this.forma[i].length;j++) {
            formaNova[i][j]=this.forma[this.forma[i].length-1-j][i];
        }
    }
    this.forma = formaNova;
}  


Peca.prototype.rotarAntihorari = function () {
    this.rotarHorari();
    this.rotarHorari();
    this.rotarHorari();

}  



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
    for(var i = 0; i < espaiJoc.length; i++){
        $("#tablero").append("<tr>");
        for(var j = 0; j <espaiJoc[i].length; j++){
            //console.log("sgundoFor");
            $("#tablero").append("<td>"+espaiJoc[i][j]+"</td>");
        }
        $("#tablero").append("</tr>");
    }
    return espaiJoc;

}

function puntuacio(puntuacioJugador){
    $("#puntuacio").append("Puntuacio: " + puntuacioJugador);

}

function puntMax(puntuacioMaximaAconseguida){
    $("#puntMax").append("Puntuacio Maxima: " + puntuacioMaximaAconseguida);

}

function nivell(puntuacioMaximaAconseguida){
    $("#nivell").append("Nivell: " + puntuacioMaximaAconseguida);

}

$(document).ready(function(){
    crearTauler(tetris.espaiJoc);
    puntuacio(tetris.puntuacioJugador);
    puntMax(tetris.puntuacioMaximaAconseguida);
    nivell(tetris.nivell);
//setInterval(movimentAutomatic(),100);
    var pa = GeneraPecaAleatoria();
    var p = new Peca(pa[0],pa[1]);
    //document.write(p.pintar());
    document.getElementById("original").innerHTML = p.pintar();

    //p.rotarHorari();
    //document.getElementById("giradaHora").innerHTML = p.pintar();
    p.rotarAntihorari();
    document.getElementById("giradaAntihora").innerHTML = p.pintar();

    peca = new Peca(GeneraPecaAleatoria()[0],GeneraPecaAleatoria()[1],5,25)
    console.log(peca);
    peca.moureAvall()
    peca.moureAvall()
    peca.moureAvall()
    peca.moureAvall()
    peca.moureAvall()
    peca.moureAvall()


 
});