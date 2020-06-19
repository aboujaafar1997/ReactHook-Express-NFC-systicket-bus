const db = require('../database/database');
const carteService = {};

carteService.ajouter = (carte) => {
    return new Promise((reslove,reject) => {
        var {id,solde,date}=carte;
        db.query(`INSERT INTO carte VALUES(${id},${solde},'${date}')`,(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = `ajout D'carte ${nom} reuessit`;
            reslove(res);
        });
    })
}

carteService.afficherParId = (id) => {
    return new Promise((reslove,reject) => {
        db.query("SELECT * FROM carte c, client e WHERE c.id=e.id_card and id="+id,(err,result) => {
            if(err) res.error = err;
            if(result.length>0)
            reslove(result);
            else
            reslove([]);
        });
    });
}
carteService.afficherTout = () => {
    return new Promise((reslove,reject) => {
        db.query("SELECT * FROM carte",(err,result) => {
            let res = {};
            if(err) res.error = err;
            res.message = result;
            reslove(res);
        });
    });
}
carteService.trunsaction = (id) => {
    return new Promise((reslove,reject) => {
        db.query("SELECT solde FROM carte where id="+id,(err,result) => {
            let res = {};
            let totale=+result[0].solde-4
            if(err) res.error = err;
            db.query("UPDATE carte set solde="+totale+" where id="+id,(err,result) => {
                if(err) res.error = err;
                reslove(res);
            });
            reslove({ message: "okey" });
        });
    });
}
carteService.recharge = (id,somme) => {
    console.log(somme+' '+id);
    return new Promise((reslove,reject) => {
        db.query("SELECT solde FROM carte where id="+id,(err,result) => {
            let res = {};
            let totale=+somme+result[0].solde
            console.log(result[0].solde);
            if(err) res.error = err;
            db.query("UPDATE carte set solde="+totale+" where id="+id,(err,result) => {
                if(err) res.error = err;
                reslove(res);
            });
              reslove({ message: "okey" });
        });
    });
    
}

module.exports = carteService;