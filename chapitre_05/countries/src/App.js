import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Components
import Button from './Components/Button'
import Card from './Components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      capital: '',
      flag: '',
      populations: '',
      region: '',
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/name/france")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          countryName: data,
          countryCapital: data.capital,
          countryFlag: data.flag,
          countryPopulations: data.populations,
          countryRegion: data.region,
        });
      });
  }

  getCountry(country) {
    fetch("https://restcountries.eu/rest/v2/name/france")
    .then((res) => res.json())
    .then((country) => {
      this.setState({country: country});
    })
  }

  render() {
    return (
      <div>
        <h1>Country selector</h1>

        <button 
          name="France"
          onChange={this.country}
        />

        <button 
          name="Brazil"
          onChange={this.country}
        />

        <button 
          name="Croatia"
          onChange={this.country}
        />

        {/* {this.state.countryName.map((name) => (
          <p key={name.id}>{name.name}</p>
        ))} */}
      </div>
    )
  }
}

export default App;
