import React, { Component } from 'react'
import { NavLink, Link, Redirect } from "react-router-dom";
import countriesJSON from "../countries.json";


export default class CountryDetail extends Component {

  state = {
    countries: countriesJSON
  }

  render() {
    const paramId = this.props.match.params.id
    const found = this.state.countries.find(country => country.cca3 === paramId);

    return (
      <div>
        <h1>{found.name.common}</h1>
              <table className="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td style={{ width: "30%" }}>Capital</td>
                    <td>{found.capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>{found.area} km
                    <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                        {
                          found.borders.map(borderLand => (
                            <NavLink to={`/${borderLand}`}  key={borderLand}>
                              <li>{borderLand}</li>
                            </NavLink>
                          ))
                        }
                        {/* <li><a href="/AND">Andorra</a></li> */}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
      </div>
    )
  }
}
