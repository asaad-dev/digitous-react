import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Components
import Add from './Components/Add';
import List from './Components/List';
import Pay from './Components/Pay';
import Button from './Components/Button';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      activeTab: 'add',
      items: [],
    };
  }

  render() {
    return (
      <div className="container">
        <button 
          name="Add"
        />
        <button 
          name="List"
        />
        <button 
          name="Pay"
        />
      </div>
    )
  }
}

export default App;
