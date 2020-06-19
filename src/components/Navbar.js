import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    console.log(props);
    return (
        <>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <span className="navbar-brand"><i className="fa fa-bus fa-lg"> ALSA</i></span>
                <form className="form-inline">
                    <i className="fa fa-user fa-lg"> <span className="mr-5">{props.islogin ? props.nom : ""}</span></i>
                    <button onClick={props.islogin ?
                        (e) => {
                            e.preventDefault();
                            sessionStorage.removeItem("login");
                            props.setstate({ isLogin: false, user: { nom: "", prenom: "", cin: "" } })
                            props.history.push('/login')
                        } :
                        ""}
                        className={props.islogin ? "btn btn-outline-danger" : "btn btn-outline-success my-2 my-sm-0"} >{props.islogin ? "Déconnecté" : "Connectez-vous"}</button>
                </form>
            </nav>
        </>
    )
}
