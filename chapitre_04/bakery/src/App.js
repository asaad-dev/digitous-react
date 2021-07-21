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

  selectAdd = (e) => {
		this.setState((prevState) => {
			return this.activeTab({
				...prevState,
				items: e.target.value,
			});
		});
	};

  selectList = (e) => {
    this.setState((prevState) => {
      return this.activeTab({
        ...prevState,
        items: e.target.value,
      })
    })
  }

  selectPay = (e) => {
    this.setState((prevState) => {
      return this.activeTab({
        ...prevState,
        items: e.target.value,     
      })
    })
  }


  render() {
    return (
      <div className="container">
        <button 
          name="add"
          value={this.state.items}
          onChange={this.selectAdd}
        />

        <button 
          name="list"
          value={this.state.items}
          onChange={this.selectList}
        />

        <button 
          name="pay"
          value={this.state.items}
          onChange={this.selectPay}
        />
      </div>
    )
  }
}

export default App;
