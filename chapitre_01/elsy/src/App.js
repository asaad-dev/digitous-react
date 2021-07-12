import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "./components/Box";
import './styles/global.css';

const  myCSS = {
  tempMin: -2,
  tempMax: 40,
  heartMin: 80,
  heartMax: 180,
  stepsMin: 0,
  stepsMax: 50000
};

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <h1 className="text-primary">Hello !</h1>

          <p>Heart : {myCSS.heartMin}</p>
          <p>Temperature : {myCSS.tempMin}</p>
          <p>Steps : {myCSS.stepsMin}</p>

          <Box text="Water" action=""/>
          <Box text="Steps" action=""/>
          <Box text="Heart" action=""/>
          <Box text="Temperature" action=""/>
          
        </div>
      </div>
    );
  }
}

export default App;