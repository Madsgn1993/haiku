
//Liste


// var pour mettre de l'espace entre mes éléments 
/*var espace = (" "); */

//Concatenation des élements qui se trouve dans mes listes. [] => précise l'index précis


/*var phrase1 = com_masculin[5]+ espace + verbes[0] + espace + adjectifs[3];
console.log(phrase1);

var phrase2 = com_masculin[4]+ espace + verbes[6] + espace + adjectifs[2];
console.log(phrase2);

var phrase3 = com_masculin[2]+ espace + verbes[3] + espace + adjectifs[4];


console.log(phrase3);*/


//Retourne la longueur du tableau 


/*console.log(com_masculin.length);*/


var btn_mot = document.getElementById('btn_mot'); 
var p_mot = document.getElementById('p_mot');
//var com_masculin  = ["La fusée", "La météore", "L'espace", "L'astraunote", "L'alien", "Predator", "La planète", "La Station-spaciale"];




btn_mot.addEventListener('click', function motRandom(com_masculin){

    var com_masculin  = ["La fusée", "La météore", "L'espace", "L'astraunote", "L'alien", "Predator", "La planète", "La Station-spaciale"];
    let motRandom = Math.floor(Math.random()*com_masculin.length);
    
    //console.log(motRandom)
    let mot = com_masculin[motRandom];
    //console.log(mot)

    p_mot.innerHTML += mot;

});


//----------------------------------------------
    

    /*btn_mot.addEventListener('click', function(){

    var com_masculin  = ["La fusée", "La météore", "L'espace", "L'astraunote", "L'alien", "Predator", "La planète", "La Station-spaciale"];

    var mot_random = Math.floor(Math.random()*com_masculin.length); 

    var mot_Commun = com_masculin[mot_random]
    p_mot.innerHTML=mot_Commun;
    
})*/ 

   /* console.log(mot_Commun)*/
//-----------------------------------------------------------------------------------------
    var p_verbe = document.getElementById('p_verbe');

    var btn_verbe = document.getElementById('btn_verbe')

    btn_verbe.addEventListener('click', function(){

    var verbes = ["est", "mange", "explose","a", "conduit", "s'écrase", "grille"]; 
   

    var verbe_random = Math.floor(Math.random()*verbes.length);

    var verbe = verbes[verbe_random]; 
    p_verbe.innerHTML=verbe;

})

   /* console.log(verbe)*/

//----------------------------------------------------------------------------------------

    var p_adjectif = document.getElementById('p_adjectif');

    var btn_adj = document.getElementById('btn_adj');

    btn_adj.addEventListener('click', function(){

    var adjectifs = ["grand", "salé", "loufoque", "crustillant", "alcoolisé", "effrayant"]; 

    var adj_random = Math.floor(Math.random()*adjectifs.length); 
    
    var adjectif = adjectifs[adj_random]; 

    p_adjectif.innerHTML=adjectif; 

})

   /* console.log(adjectif)*/
