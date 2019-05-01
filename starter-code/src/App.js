import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import countriesJSON from "./countries.json";
import { Route, NavLink, Link, Redirect } from "react-router-dom";
import CountryDetail from './components/CountryDetail';


class App extends Component {

  state = {
    countries: countriesJSON
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link exact to="/" className="navbar-brand">
              WikiCountries
            </Link>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
              <div className="list-group">
                {
                  this.state.countries.map(country => (
                    <NavLink to={`/${country.cca3}`} className="list-group-item list-group-item-action" key={country.cca3} country={country}>
                      {country.name.common}
                    </NavLink>
                  ))
                }
              </div>
            </div>
            <div className="col-7">
              <Route path="/:id" component={CountryDetail} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
