class VueAjouterEcouteur {
    constructor(){
        this.html = document.getElementById("html-vue-ajouter-ecouteur").innerHTML;
        this.ajouterEcouteur = null;
    }

    initialiserAjouterEcouteur(ajouterEcouteur){
        this.ajouterEcouteur = ajouterEcouteur;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        document.getElementById("formulaire-ajouter").addEventListener("submit",evenement =>this.enregistrer(evenement));
    }

    enregistrer(evenement){
        evenement.preventDefault();
    
        let nom = document.getElementById("ecouteur-nom").value;
        let marque = document.getElementById("ecouteur-marque").value;
        let couleur = document.getElementById("ecouteur-couleur").value;
        let autonomie = document.getElementById("ecouteur-autonomie").value;
        let reductionBruit = document.getElementById("ecouteur-reductionBruit").value;
        let ecouteEnvironnement = document.getElementById("ecouteur-ecouteEnvironnement").value;
        let resistanceEau = document.getElementById("ecouteur-resistanceEau").value;
    
        this.ajouterEcouteur(new Ecouteur(nom, marque, couleur, autonomie, reductionBruit, ecouteEnvironnement, resistanceEau, null));
    
      }
    
}