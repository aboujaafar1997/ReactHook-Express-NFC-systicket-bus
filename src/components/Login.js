import React, { useRef } from 'react'

export default function Login(props) {
    const cin = useRef("");
    const password = useRef("");
    return (
        <div className="container text-center mt-5 login">
            <h1>Connectez-vous !</h1>
            <h4>Bienvenue </h4>
            <div className="mt-5">
                <div className="form-group row ">
                    <label htmlFor="staticEmail" className="offset-2 col-sm-2 col-3 col-form-label ">CIN</label>
                    <div className="col-sm-5 col-5 ">
                        <input ref={cin} type="text" className="form-control" id="staticEmail" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword" className=" offset-2 col-sm-2 col-3 col-form-label">Mot de passe</label>
                    <div className="col-sm-5 col-5">
                        <input ref={password} type="password" className="form-control" id="inputPassword" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary offset-1 mb-2" onClick={() => { props.dispatch({ cin: cin.current.value, password: password.current.value }) }}>Connectez-vous!</button>
            </div>
        </div>
    )
}
