class Ecouteur {
    constructor(nom, marque, couleur, autonomie, reductionBruit, ecouteEnvironnement, resistanceEau, id = null){
        this.nom = nom;
        this.marque = marque;
        this.couleur = couleur;
        this.autonomie = autonomie;
        this.reductionBruit = reductionBruit;
        this.ecouteEnvironnement = ecouteEnvironnement;
        this.resistanceEau = resistanceEau;
        this.id = id;
    }
}