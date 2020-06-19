import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { Nav } from './PrivateRoute/NavRoute';

const host = "http://localhost:5000"
function App() {
  const [state, setstate] = useState({ isLogin: false, user: { nom: "", prenom: "", cin: "" } });
  useEffect(() => {
    if (sessionStorage.getItem("login") !== null) {
      console.log("is ready...");
      setstate(JSON.parse(sessionStorage.getItem("login")));
    }
  }, [])
  var login = async ({ cin, password }) => {
    let options = { method: "POST", headers: { "charset": "utf-8", 'Content-Type': 'application/json', 'Authorization': 'bearer ' + sessionStorage.getItem('token') }, body: JSON.stringify({ cin, password }) };
    let response = await fetch(host + "/cheuffeur/login", options);
    let resultat = await response.json();
    sessionStorage.setItem("login", JSON.stringify({ isLogin: true, user: resultat }));
    setstate({ isLogin: true, user: resultat });
  }
  const set = (data) => {
    setstate(data);
  }
  return (
    <Router>
      {/* <Nav setstate={set} islogin={state.isLogin} iscompnentLogin={false} nom={state.user.nom} component={Navbar} /> */}
      <Route
        render={props => {
          return <Navbar {...props} setstate={set} islogin={state.isLogin} iscompnentLogin={false} nom={state.user.nom} />
        }} />
      <Switch>
        <PrivateRoute cinCheuffeur={state.user.cin} host={host} iscompnentLogin={false} islogin={state.isLogin} exact path="/" component={Home} />
        <PrivateRoute iscompnentLogin={true} islogin={state.isLogin} exact path="/login" component={() => <Login dispatch={login} />} />
        <PrivateRoute cinCheuffeur={state.user.cin} host={host} iscompnentLogin={false} islogin={state.isLogin} exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}


export default App;
