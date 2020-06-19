const db = require('../database/database');
const cheuffeurService = {};

cheuffeurService.ajouter = (admin) => {
    return new Promise((reslove, reject) => {
        var { nom, prenom, password, cin } = admin;
        db.query(`INSERT INTO chauffeur VALUES('${cin}','${nom}','${prenom}','${password}')`, (err, result) => {
            let res = {};
            if (err) res.error = err;
            res.message = `ajout D'chauffeur ${nom} reuessit`;
            reslove(res);
        });
    })
}

cheuffeurService.afficherParId = (cin) => {
    return new Promise((reslove, reject) => {
        db.query("SELECT * FROM chauffeur WHERE cin='" + cin + "'", (err, result) => {
            let res = {};
            if (err) res.error = err;
            res = result[0];
            reslove(res);
        });
    });
}
cheuffeurService.afficherTout = () => {
    return new Promise((reslove, reject) => {
        db.query("SELECT * FROM chauffeur", (err, result) => {
            let res = {};
            if (err) res.error = err;
            res.message = result;
            reslove(res);
        });
    });
}
cheuffeurService.login = (cin, password) => {
    return new Promise((reslove, reject) => {

        db.query("SELECT * FROM chauffeur where cin='" + cin + "' and password='" + password + "'", (err, result) => {
            let res = {};
            if (err) res.error = err;
            if (result.length >= 1)
                res = result;
            else
                res = []
            reslove(res);
        });
    });
}

module.exports = cheuffeurService;