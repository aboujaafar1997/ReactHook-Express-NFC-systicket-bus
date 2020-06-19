const clientService = require('../services/ClientService');
const clientController = {};

clientController.ajouter = async(req,res) => {
    var resultat = await clientService.ajouter(req.body);
    res.send({resultat});
}

clientController.afficherParId = async(req,res) => {
    var resultat = await clientService.afficherParId(req.body.id);
    res.send(resultat);
}

clientController.afficherTout = async(req,res) => {
    var resultat = await clientService.afficherTout();
    res.send(resultat);
}
module.exports = clientController;