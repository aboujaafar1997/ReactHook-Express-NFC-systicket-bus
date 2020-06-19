const logService = require('../services/LogService');
const logController = {};

logController.ajouter = async(req,res) => {
    var resultat = await logService.ajouter(req.body);
    res.send({resultat});
}

logController.afficherParId = async(req,res) => {
    console.log(req.body);
    var resultat = await logService.afficherParId(req.body.cin);
    res.send(resultat);
}

logController.afficherTout = async(req,res) => {
    var resultat = await logService.afficherTout();
    res.send(resultat);
}
module.exports = logController;