class Application {
    constructor(window, vueListeEcouteur, vueEcouteur, ecouteurDAO){
        this.window = window;

        this.vueListeEcouteur = vueListeEcouteur;
        this.vueEcouteur = vueEcouteur;
        this.ecouteurDAO = ecouteurDAO;


        this.window.addEventListener("hashchange", () =>this.naviguer());
        this.naviguer();
    }

    naviguer(){
        let hash = window.location.hash;
    
        if(!hash){
    
          this.ecouteurDAO.lister((listeEcouteur) => this.afficherNouvelleListeEcouteur(listeEcouteur));
    
        }else{
    
          let navigation = hash.match(/^#ecouteur\/([0-9]+)/);
          let idEcouteur = navigation[1];
    
          this.ecouteurDAO.chercher(idEcouteur, (ecouteur) => this.afficherNouveauEcouteur(ecouteur));
        }
    }

    afficherNouvelleListeEcouteur(listeEcouteur){

        console.log(listeEcouteur);
        this.vueListeEcouteur.initialiserListeEcouteur(listeEcouteur);
        this.vueListeEcouteur.afficher();
    }

    afficherNouveauEcouteur(ecouteur){
        console.log(ecouteur);
        this.vueEcouteur.initialiserEcouteur(ecouteur);
        this.vueEcouteur.afficher();
    }

    afficherListeEcouteur(){
        this.window.location.hash = "#";
    }
}

new Application(window, new VueListeEcouteur(), new VueEcouteur(), new EcouteurDAO());