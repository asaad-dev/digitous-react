import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "./components/Box";
import './styles/global.css';

const tempMin =  -2;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          <p>Heart : {heartMin}</p>
          <p>Temperature : {tempMin}</p>
          <p>Steps : {stepsMin}</p>

          <Box text="Water"  style={{icon : "local_drink"} + {color : "#3A85FF"} + {value : 1.5} + {unit : "L"}}/>{this.props.text}
          <Box text="Steps" />
          <Box text="Heart" />
          <Box text="Temperature" />
          
        </div>
      </div>
    );
  }
}

export default App;