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

 handleChangeTab = (e) => {
   this.setState((prevState) => {
     return {
       ...prevState,
       activeTab: e.target.name.toLowerCase(),
     };
   });
 };

 handleAddItem = (productName, price) => {
   this.setState((prevState) => {
     return {
       ...prevState,
       items: [
         ...prevState.items,
         {
           productName: productName, 
           price: price,
          }
       ],
     };
   });
 }

 // Render functions 
 renderTab = () => {
   switch (this.state.activeTab) {
    case "add":
       return <Add addItem={this.handleAddItem}/>;
    case "list":
      return <List items={this.state.items} />;
    case "pay":
      return <Pay items={this.state.items} />;
    default: 
      return <p>505 not found</p>;
   }
 };

  render() {
    return (
        <div className="container">
          <div className="row">
            <Button onClick={this.handleCahngeTab}>Add</Button>
            <Button onClick={this.handleChangeTab}>List</Button>
            <Button onClick={this.handleChangeTab}>Pay</Button>
          </div>

          <div className="row">
            {this.renderTab()}
          </div>
        </div>
    )
  }
}

export default App;
