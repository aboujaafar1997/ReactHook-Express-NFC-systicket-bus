const db = require('../database/database');
const clientService = {};

clientService.ajouter = (client) => {
    return new Promise((reslove,reject) => {
        var {nom,prenom,cin,id_card,image}=client;
        db.query(`INSERT INTO client VALUES('${cin}','${nom}','${prenom}','${id_card}','${image}')`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = `ajout D'client ${nom} reuessit`;
            reslove(res);
        });
    })
}

clientService.afficherParId = (id) => {
    return new Promise((reslove,reject) => {
        db.query("SELECT * FROM client WHERE id_card="+id,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res = result[0];
            reslove(res);
        });
    });
}
clientService.afficherTout = () => {
    return new Promise((reslove,reject) => {
        db.query("SELECT * FROM client",(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = result;
            reslove(res);
        });
    });
}

module.exports = clientService;