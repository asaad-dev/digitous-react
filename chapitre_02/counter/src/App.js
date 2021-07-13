import React from 'react'
import './App.css';
import Counter from './Components/Counter'

class App extends React.Component {

  render() {
    return (
      <div className="">
       <h1>Counter</h1> 

       <Counter />      
      </div>
    );
  }
}

export default App;
