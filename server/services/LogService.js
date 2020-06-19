const db = require('../database/database');
const logService = {};

logService.ajouter = (log) => {
    return new Promise((reslove,reject) => {
        var {cinCheuffeur,carte_id,totale,date}=log;
        console.log("-----");
        console.log(log);
        db.query(`INSERT INTO log VALUES('${cinCheuffeur}',${carte_id},${totale},'${date}')`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = `ajout D'log ${cinCheuffeur} reuessit`;
            reslove(res);
        });
    })
}

logService.afficherParId = (cin) => {
    return new Promise((reslove,reject) => {
        db.query("SELECT * FROM log WHERE cin='"+cin+"'",(err,result) => {
            let res = {};
            if(err) res.error = err;
            res = result;
            reslove(res);
        });
    });
}
logService.afficherTout = () => {
    return new Promise((reslove,reject) => {
        db.query("SELECT * FROM log",(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = result;
            reslove(res);
        });
    });
}

module.exports = logService;