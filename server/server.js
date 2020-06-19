const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

var multer  = require('multer');

var upload = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
          cb(null, 'uploads/');
      },
      filename: (req, file, cb) => {
          const newFilename = Date.now() + '-'+ file.originalname;
          cb(null, newFilename);
      },
    })
  });
var cpUpload = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'fichier', maxCount: 1 }])

/*
* Middlewares
*/
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads',express.static(__dirname + '/uploads'));

const cheuffeurController = require('./controllers/CheuffeurController');
const carteController = require('./controllers/CarteController');
const clientController = require('./controllers/ClientController');
const logController = require('./controllers/LogController');

////************************Chauffeur************************ */
app.post('/cheuffeur/ajouter',cheuffeurController.ajouter);
app.post('/cheuffeur/afficherTout',cheuffeurController.afficherTout);
app.post('/cheuffeur/afficherParId',cheuffeurController.afficherParId);
app.post('/cheuffeur/login',cheuffeurController.login);

////************************Carte************************ */
app.post('/carte/ajouter',carteController.ajouter);
app.post('/carte/afficherTout',carteController.afficherTout);
app.post('/carte/afficherParId',carteController.afficherParId);
app.post('/carte/recharge',carteController.recharge);
app.post('/carte/trunsaction',carteController.trunsaction);


////************************Client************************ */
app.post('/client/ajouter',clientController.ajouter);
app.post('/client/afficherTout',clientController.afficherTout);
app.post('/client/afficherParId',clientController.afficherParId);


////************************Log************************ */
app.post('/log/ajouter',logController.ajouter);
app.post('/log/afficherTout',logController.afficherTout);
app.post('/log/afficherParId',logController.afficherParId);

app.listen(5000,()=>{
    console.log("demarrer sur le port 5000");
});