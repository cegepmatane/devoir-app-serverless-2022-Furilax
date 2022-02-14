class EcouteurDAO {

    lister(action){
        fetch("https://utkwzwj35m.execute-api.us-east-1.amazonaws.com/default/lister-ecouteur", {mode:'cors'})
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
}