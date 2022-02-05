class Application {
    constructor(window, vueListeEcouteur, ecouteurDAO){
        this.window = window;

        this.vueListeEcouteur = vueListeEcouteur;
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
    
          this.ecouteurDAO.chercher(idEcouteur, (ecouteur) => this.afficherNouveauCadeau(ecouteur));
        }
    }
}