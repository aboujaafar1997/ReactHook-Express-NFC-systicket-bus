import React from 'react'
import { useState, useEffect, useRef } from 'react';

export default function Home(props) {
    const nfc = useRef("");
    const solde = useRef(0);

    const [log, setlog] = useState([]);
    const [totale, settotale] = useState(0);
    const [carte, setcarte] = useState({ nom: "", prenom: "", cin: "", solde: 0, id: "", image: "man.png" });
    const getLog = async () => {
        let options = { method: "POST", headers: { "charset": "utf-8", 'Content-Type': 'application/json' }, body: JSON.stringify({ cin: props.cinCheuffeur }) };
        let response = await fetch(props.host + "/log/afficherParId", options);
        let resultat = await response.json();
        setlog(resultat);

    }
    const logs = log.map((data) => {

        return (
            <>
                {data.totale > 0 ? <div key={data.carte_id} className="alert alert-success" role="alert">Date:{data.date} Recharge {data.totale} DH pour la Carte {data.carte_id}</div> : <div className="alert alert-danger" role="alert"> Ticket {data.totale} DH  de Carte {data.carte_id}</div>}
            </>
        );
    });
    let first = 0;
    const getticket = async (resultat) => {
        try {
            if (+resultat.solde - 4 > 0) {
                let options = { method: "POST", headers: { "charset": "utf-8", 'Content-Type': 'application/json' }, body: JSON.stringify({ id: resultat.id }) };
                let response = await fetch(props.host + "/carte/trunsaction", options);
                let resultat0 = await response.json();
                addlog("-4", resultat.id);
                setcarte({ ...resultat, solde: +resultat.solde - 4 });
            } else if (first === 0) {
                return;
            } else {
                alert("solde insuffisante")
            }
        } catch (error) {
            alert("Erreur de serveur" + error);
        }

    };
    let card = "";
    const getcard = async (cardid) => {
        try {
            let options = { method: "POST", headers: { "charset": "utf-8", 'Content-Type': 'application/json' }, body: JSON.stringify({ id: cardid }) };
            card = "";
            let response = await fetch(props.host + "/carte/afficherParId", options);
            let resultat = await response.json();
            if (resultat.length > 0) {
                getticket(resultat[0]);
                setcarte(resultat[0]);
            }
            else
                alert("carte non valide !!")
        }
        catch (err) {
            card = "";
            alert(err.message);
        }
    }
    window.onkeyup = (async (event) => {
        if (Number.isInteger(+String.fromCharCode(event.keyCode)))
            card = card + String.fromCharCode(event.keyCode);
        if (event.keyCode === 13) {
            getcard(card);
        }
    });

    const recharge = async () => {
        try {
            if (+solde.current.value > 0) {
                let options = { method: "POST", headers: { "charset": "utf-8", 'Content-Type': 'application/json' }, body: JSON.stringify({ id: carte.id, somme: solde.current.value }) };
                card = "";
                let response = await fetch(props.host + "/carte/recharge", options);
                let resultat = await response.json();
                setcarte({ ...carte, solde: +carte.solde + +solde.current.value });
                addlog(solde.current.value, carte.id);
                solde.current.value = 0;
                getLog();
            } else {
                alert("Erreur de solde");
            }
        } catch (error) {
            card = "";
            console.log("Erreur de serveur" + error);
        }
    }
    const addlog = async (sommelog, id) => {
        try {
            let options = { method: "POST", headers: { "charset": "utf-8", 'Content-Type': 'application/json' }, body: JSON.stringify({ cinCheuffeur: props.cinCheuffeur, carte_id: id, totale: sommelog, date: new Date() }) };
            let response = await fetch(props.host + "/log/ajouter", options);
            let resultat = await response.json();
        } catch (error) {

        }
    }
    useEffect(() => {
        getLog();
    }, [carte]);
    useEffect(() => {
        let s = 0;
        if (log.length > 0) {
            for (let i = 0; i < log.length; i++) {
                s += Math.abs(+log[i].totale);
            }
            settotale(s);
            var element = document.getElementById("123");
            element.scrollTo(0,999999);
        }
    }, [log]);
    return (
        <React.Fragment>
            <h6 className="float-right mr-5">Totale:{totale} DH</h6>
            <div className="row container">
                <div className="col-7">
                    <h4>Machine</h4>
                    <div className="alert alert-dark mt-3 p-5" role="alert">
                        <button type="button" className="btn btn-outline-dark float-right" onClick={() => { setcarte({ nom: "", prenom: "", cin: "", solde: 0, id: "", image: "man.png" }) }}>Vidé</button>
                        <div className="row">
                            <div className="col-6">
                                <img src={carte.image} alt="image" width="160px" height="160px" />
                            </div>
                            <div className="col-4">
                                <h6 className="ofsset-2">solde : {carte.solde}DH</h6>

                                <h6>Recharge<input type="number" ref={solde} className="form-control mt-2 float-rightmt-2" /></h6>
                                <button type="button" className="btn btn-outline-primary" onClick={() => { recharge() }}>Recharger</button>
                            </div>
                        </div>
                        <hr />
                        <div> Nom <input className="float-right form-control col-12" disabled value={carte.nom} /></div><br />
                        <div> prenom <input className="float-right form-control col-12" disabled value={carte.prenom} /></div><br />
                        <div> cin <input className="float-right form-control col-12" disabled value={carte.cin} /></div><br />
                        <div> carte <input className="float-right form-control col-12" disabled value={carte.id} /></div><br />
                    </div>
                </div>
                <div className="col-5">
                    <h4>Historique</h4>
                    <br />
                    <div id="123" className="bar">
                        {logs}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
