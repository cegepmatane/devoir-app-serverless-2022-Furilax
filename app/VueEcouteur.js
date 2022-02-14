class VueEcouteur {
    constructor(){
        this.html = document.getElementById("html-vue-ecouteur").innerHTML;
        this.ecouteur = null;
    }

    initialiserEcouteur(ecouteur){
        this.ecouteur = ecouteur;
    }
    
    afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("ecouteur-nom").innerHTML = this.ecouteur.nom;
    document.getElementById("ecouteur-marque").innerHTML = this.ecouteur.marque;
    document.getElementById("ecouteur-couleur").innerHTML = this.ecouteur.couleur;
    document.getElementById("ecouteur-autonomie").innerHTML = this.ecouteur.autonomie;
    document.getElementById("ecouteur-reductionBruit").innerHTML = this.ecouteur.reductionBruit;
    document.getElementById("ecouteur-ecouteEnvironnement").innerHTML = this.ecouteur.ecouteEnvironnement;
    document.getElementById("ecouteur-resistanceEau").innerHTML = this.ecouteur.resistanceEau;
    }
}