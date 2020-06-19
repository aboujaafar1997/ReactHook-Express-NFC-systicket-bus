const chauffeurService = require('../services/CheuffeurService');
const chauffeurController = {};

chauffeurController.ajouter = async (req, res) => {
    var resultat = await chauffeurService.ajouter(req.body);
    res.send({ resultat });
}

chauffeurController.afficherParId = async (req, res) => {
    var resultat = await chauffeurService.afficherParId(req.body.cin);
    res.send(resultat);
}

chauffeurController.afficherTout = async (req, res) => {
    var resultat = await chauffeurService.afficherTout();
    res.send(resultat);
}

chauffeurController.login = async (req, res) => {
    var resultat = await chauffeurService.login(req.body.cin, req.body.password);
    if (resultat.length > 0)
        res.send(resultat[0]);
    else
        res.send({ err: "erreur" });
}
module.exports = chauffeurController;