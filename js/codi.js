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
                pecaVigent: new Array(),
                seguentPeca: new Array(),
                contadorPeca: 0,
                intervalTemps:1000,
                nivell:1,
                //iniciar joc
                inicialitzarJoc: function(){
                    var cont = 0;
                    this.intervalSet = null;
                    var piezaAlea = GeneraPecaAleatoria();
                    pecaVigent = new Peca(piezaAlea[0],piezaAlea[1],0,3);
                    piezaAlea = GeneraPecaAleatoria();
                    intervalSet = setInterval(function(){tetris.movimentAutomatic(pecaVigent)},this.intervalTemps);
                    this.pintarPiezaTablero(pecaVigent)
                    crearTauler(tetris.espaiJoc);
                },
                // seguent peça en sortir de forma aleatoria
                seguentpeca: function(){
                    var piezaAlea = GeneraPecaAleatoria();
                    pecaVigent = new Peca(piezaAlea[0], piezaAlea[1], 1, 3);
                },
                //moviment automatic del joc
                movimentAutomatic: function(pecaVigent){
                    //pecaVigent.moureAvall()
                    var posValida = pecaVigent.posicioValida();
                    if(posValida==true){
                        pecaVigent.posX = pecaVigent.posX;
                        pecaVigent.posX++;
                    }else{
                       tetris.seguentpeca();
                    }
                    keyPress()
                    // console.log(pecaVigent)
                    netejarTauler(this.espaiJoc);
                    this.pintarPiezaTablero(pecaVigent);
                    crearTauler(tetris.espaiJoc);

                },
                pintarPiezaTablero: function(){
                    
                    console.log(pecaVigent.forma);
                    for(var i = 0; i < pecaVigent.forma.length; i++ ){
                        for(var j = 0 ;j < pecaVigent.forma[i].length;j++ ){
                            if(pecaVigent.forma[i][j] == 1){
                                
                                if(pecaVigent.posicioValida() == false){
                                    this.espaiJoc[pecaVigent.posX+i][pecaVigent.posY+j] = 1;
                                    //pecaVigent= pecaCaiguda
                                    //pecaVigent = null;
                                    
                                }else{
                                    if(pecaVigent != null){
                                        this.espaiJoc[pecaVigent.posX+i][pecaVigent.posY+j] = "X";
                                    }
                                }
                            }
                        }
                    }
                    crearTauler(tetris.espaiJoc);
                    console.log(pecaVigent)
                    console.log(this.espaiJoc);                          
                }
}
var Peca = function(forma,color,posX,posY){
    this.forma = forma;
    this.color = color;
    this.posX = posX;
    this.posY = posY;

}
Peca.prototype.moureEsquerra = function(){
    if(this.posY>=0){
        this.posY--;
        console.log("esto es la posicion" +this.posY)
    }
};


Peca.prototype.moureDreta = function(){
 
    
    if(this.posY<=8){
        this.posY++;
        console.log("esto es la posicion" + this.posY)
    }
};

Peca.prototype.moureAvall = function(posY){
    while(posX>0){
        this.posX++;
    }
        // console.log(posY);
        
};

Peca.prototype.posicioValida = function(posX,posY){
    var altura = 0;
    var trobat = false;
    console.log(tetris.espaiJoc);
    var posNext = posX+1

    for(var i2 = 0; i2 < pecaVigent.forma.length;i2++){
        trobat = false;
        for(var j2 = 0; j2 < pecaVigent.forma[i2].length;j2++){
            if (pecaVigent.forma[i2][j2] == 1){
                trobat = true;
            }
        }
        if(trobat == true){
            altura ++;
        }
    }

    for(var i = 0; i < pecaVigent.forma.length; i++ ){
        
        console.log();
        

        for(var j = 0 ;j < pecaVigent.forma[i].length;j++ ){
            // console.log("espai de joc"+tetris.espaiJoc[i][j])
            if(pecaVigent.forma[i][j] == 1){
               
                console.log(this.posX+i)


                if((this.posX+i == 24)){

                    console.log("false1");
                    
                    return false;
                }
                if((this.posY+j<0)||(this.posY+j>10)){
                    console.log("false2");
                    return false;
                }
                console.log(altura)
                for(var p = 0; p < tetris.espaiJoc.length; p++){
                    for(var k = 0; k < tetris.espaiJoc[p].length; k++){ 
                        if((tetris.espaiJoc[p][k] == 1)&&(this.posX+altura == p)){
                            console.log("false3")
                            return false;
                        }
                        
                    }
                }
            }
        }
        
        console.log("true");
        
    }
    // console.log("altura "+altura);
        return true;
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

function keyPress(){
    $("body").keydown(function(e) {
        if(e.keyCode == 37) { // esquerra
            pecaVigent.moureEsquerra();
            e.stopPropagation();
        }
        if(e.keyCode == 39) { // dreta
            pecaVigent.moureDreta();
            e.stopPropagation();
        }
    });
};

function GeneraPecaAleatoria(){ 
    var peces = [
        [[[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]],"groc"],
        [[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],"lila"],
        [[[0,1,1,0],[1,1,0,0],[0,0,0,0],[0,0,0,0]],"verd"],
        [[[0,1,1,0],[0,0,1,1],[0,0,0,0],[0,0,0,0]],"roig"],
        [[[0,1,0,0],[0,1,0,0],[0,1,1,0],[0,0,0,0]],"blau"],
        [[[0,1,1,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]],"taronga"],
        [[[1,1,1,0],[0,1,0,0],[0,0,0,0],[0,0,0,0]],"morat"] ]
  var numeroAleatori = Math.round(Math.random()*6);                      
  return peces[numeroAleatori];     
}
//funcio per a crear el tauler
function crearTauler(espaiJoc){
    //console.log(espaiJoc);
    $( "#tablero" ).empty();
    for(var i = 0; i < espaiJoc.length; i++){
        $("#tablero").append("<tr>");
        for(var j = 0; j <espaiJoc[i].length; j++){
            //console.log("sgundoFor");
            $("#tablero").append("<td>"+espaiJoc[i][j]+"</td>");
        }
        $("#tablero").append("</tr>");
    }

}
//funció que neteja el tauler per a que no deixi rastre les peçes
function netejarTauler(espaiJoc){
    for(var i = 0; i < espaiJoc.length; i++ ){              
        for(var j = 0 ;j < espaiJoc.length;j++ ){
                if(espaiJoc[i][j] == "X"){
                espaiJoc[i][j] = 0; 
            }  
        }
    }
}

function insertarpeca(peca){
    console.log(peca.forma.length);
    
    for(var i = 0; i < peca.forma.length; i++ ){
        for(var j = 0 ;j < peca.forma[i].length;j++ ){
            if(peca.forma[i][j]==1){
                this.espaiJoc[peca.posX+i][peca.posY+j] = 1;
            }
        }
    }
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
    
    puntuacio(tetris.puntuacioJugador);
    puntMax(tetris.puntuacioMaximaAconseguida);
    nivell(tetris.nivell);
   
    var pa = GeneraPecaAleatoria();
    var p = new Peca(pa[0],pa[1]);
    //document.write(p.pintar());
    document.getElementById("original").innerHTML = p.pintar();
    
    //p.rotarHorari();
    //document.getElementById("giradaHora").innerHTML = p.pintar();
    p.rotarAntihorari();
    document.getElementById("giradaAntihora").innerHTML = p.pintar();
    
    // peca = new Peca(GeneraPecaAleatoria()[0],GeneraPecaAleatoria()[1],5,25)
    //console.log(peca);
    // peca.moureAvall();
    
    tetris.inicialitzarJoc();
    //crearTauler(tetris.espaiJoc);
  
});