const carteService = require('../services/CarteService');
const carteController = {};

carteController.ajouter = async(req,res) => {
    var resultat = await carteService.ajouter(req.body);
    res.send({resultat});
}

carteController.afficherParId = async(req,res) => {
    var resultat = await carteService.afficherParId(req.body.id);
    res.send(resultat);
}

carteController.afficherTout = async(req,res) => {
    var resultat = await carteService.afficherTout();
    res.send(resultat);
}
carteController.recharge = async(req,res) => {
    console.log(req.body.id+" "+req.body.somme);
    var resultat = await carteService.recharge(req.body.id,req.body.somme);
    res.send(resultat);
}
carteController.trunsaction = async(req,res) => {
    var resultat = await carteService.trunsaction(req.body.id);
    res.send(resultat);
}
module.exports = carteController;