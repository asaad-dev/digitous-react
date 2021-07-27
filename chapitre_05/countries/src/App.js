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
  this.getCountry("france")
}

getCountry(country) { 
  const url = "https://restcountries.eu/rest/v2/name/france" + country

  fetch(url)
  .then(response => response.json())
  .then(data => {
    this.setState({
      name: data.name,
      capital: data.capital,
      flag: data.flag,
      popluation: data.popluation,
      region: data.region,
    })
  })
}

render() {
  return (
    <div className="container">
      <div className="row">
        <div className="offset-4 col-4">
          <h1 className="text-center">Countries</h1>
        </div>
      </div>

      <div className="row m-5">
        <div className="offset-3 col-2 text-center">
          <Button onClick={() => this.getCountry("france")}>France</Button>
          <Button onClick={() => this.getCountry("brazil")}>Brazil</Button>
          <Button onClick={() => this.getCountry("croatia")}>Croatia</Button>
        </div>
      </div>

      <Card 
        name={name}
        capital={capital}
        flag={flag}
        population={population}
        region={region}
      />
    </div>
  )
}
 
}

export default App;
