class Application {
    constructor(window, vueListeEcouteur, vueEcouteur, vueAjouterEcouteur, ecouteurDAO){
        this.window = window;

        this.vueListeEcouteur = vueListeEcouteur;
        this.vueEcouteur = vueEcouteur;
        this.vueAjouterEcouteur = vueAjouterEcouteur;
        this.vueAjouterEcouteur.initialiserAjouterEcouteur(ecouteur =>this.ajouterEcouteur(ecouteur));
        this.ecouteurDAO = ecouteurDAO;


        this.window.addEventListener("hashchange", () =>this.naviguer());
        this.naviguer();
    }

    naviguer(){
        let hash = window.location.hash;
    
        if(!hash){
    
          this.ecouteurDAO.lister((listeEcouteur) => this.afficherNouvelleListeEcouteur(listeEcouteur));
    
        }else if(hash.match(/^#ajouter-ecouteur/)){

            this.vueAjouterEcouteur.afficher();
        
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

    ajouterEcouteur(ecouteur){
        this.ecouteurDAO.ajouter(ecouteur, () => this.afficherListeEcouteur());
    }

    afficherListeEcouteur(){
        this.window.location.hash = "#";
    }
}

new Application(window, new VueListeEcouteur(), new VueEcouteur(), new VueAjouterEcouteur(), new EcouteurDAO());