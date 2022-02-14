class EcouteurDAO {

    lister(action){
        fetch("https://0m089giwdd.execute-api.us-east-1.amazonaws.com/default/lister", {mode:'cors'})
        .then(response => response.json())
        .then(data =>
           {
                console.log(data);
                let listeEcouteur = [];
                for(let position in data){
                    let ecouteur = new Ecouteur(data[position].nom,
                                                data[position].marque,
                                                data[position].couleur,
                                                data[position].autonomie,
                                                data[position].reductionBruit,
                                                data[position].ecouteEnvironnement,
                                                data[position].resistanceEau,
                                                data[position].id);

                    console.log(ecouteur);
                    listeEcouteur.push(ecouteur);
                }
                action(listeEcouteur);

           });
    }
    
    chercher(id, action){
        fetch("https://g8avul0bkg.execute-api.us-east-1.amazonaws.com/default/recherche-ecouteur-par-id" + '?id=' + id , {mode:'cors'})
          .then(response => response.json())
          .then(data =>
            {
              console.log(data);
              let ecouteur = new Ecouteur(data.nom,
                                        data.marque,
                                        data.couleur,
                                        data.autonomie,
                                        data.reductionBruit,
                                        data.ecouteEnvironnement,
                                        data.resistanceEau,
                                        data.id);
              action(ecouteur);
            });
    }

    ajouter(ecouteur, action){
        fetch("https://paycix3r5g.execute-api.us-east-1.amazonaws.com/default/ajouter-ecouteur",
          {
            method: 'POST',
            headers: {
              'Content-Type':'application/x-www-form-urlencoded'
            },
            body: "ecouteurjson=" + JSON.stringify(ecouteur),
            mode:'cors',
          })
          .then(response => response.text())
          .then(data =>
            {
              console.log('Détail:', data);
              action();
            });
    }
}