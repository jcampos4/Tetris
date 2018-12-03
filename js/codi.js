var tetris = {
    pecesQueVanSorgint : new Array()
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

function GeneraPecaAleatoria()
{ var peces = [
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

console.log(GeneraPecaAleatoria());
console.log(GeneraPecaAleatoria());
console.log(GeneraPecaAleatoria());
console.log(GeneraPecaAleatoria());
console.log(GeneraPecaAleatoria());
console.log(GeneraPecaAleatoria());