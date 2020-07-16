import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PageCards from './page-cargs/Page_Cards';
import PageAdd from './page-add/Page_Add';
import PageUpdate from './page-update/Page_Update';
import PageSingIn from './page-login/Page_Sing_In';
import LoginForm from './page-login/Page_Login';
import Welcome from './page-welcome/Welcome';
import * as firebase from 'firebase';


function App() {

  const db = firebase.database();
  console.log(db)

  return (
    <Router>
      <div className="App"> 

        <Switch>
          <Route exact path="/">
            <Welcome/>
          </Route>
          <Route path="/singIn">
            <PageSingIn/>
          </Route>
          <Route path="/login">
            <LoginForm/>
          </Route>
          <Route path="/products">
            <PageCards/>
          </Route>
          <Route path="/add">
            <PageAdd/>
          </Route>
          <Route path="/update/:id">
            <PageUpdate/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
