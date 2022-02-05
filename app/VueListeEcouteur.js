class VueListeEcouteur {
    constructor() {
        this.html = document.getElementById("html-vue-liste-ecouteur").innerHTML;
        this.listeEcouteurDonnee = null;
    }

    initialiserListeEcouteur(listeEcouteurDonnee){
        this.listeEcouteurDonnee = listeEcouteurDonnee;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        let listeEcouteur = document.getElementById("liste-ecouteur");
        const listeEcouteurItemHTML = listeEcouteur.innerHTML;
        let listeEcouteurHTMLRemplacement = "";

        for(var numeroEcouteur in this.listeEcouteurDonnee){
            let listeEcouteurItemHTMLRemplacement = listeEcouteurItemHTML;
            listeEcouteurItemHTMLRemplacement = listeEcouteurItemHTMLRemplacement.replace("{Ecouteur.id}",this.listeEcouteurDonnee[numeroEcouteur].id);
            listeEcouteurItemHTMLRemplacement = listeEcouteurItemHTMLRemplacement.replace("{Ecouteur.marque}",this.listeEcouteurDonnee[numeroEcouteur].marque);
            listeEcouteurItemHTMLRemplacement = listeEcouteurItemHTMLRemplacement.replace("{Ecouteur.nom}",this.listeEcouteurDonnee[numeroEcouteur].nom);
            listeEcouteurHTMLRemplacement += listeEcouteurItemHTMLRemplacement;
        }
      
        listeEcouteur.innerHTML = listeEcouteurHTMLRemplacement;
    }
}