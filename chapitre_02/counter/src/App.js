import React from 'react'
import './App.css';
import Counter from './Components/Counter'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 10,
    };

    this.addFunction = this.addFunction.bind(this);
		//this.substractFunction = this.substractFunction.bind(this);
  }

  	// "Ancienne" version
	addFunction() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1,
			};
		});
	}

	// Version un peu plus moderne
	substractFunction = () => {
		if (this.state.count > 0) {
			this.setState((prevState) => {
				return {
					count: prevState.count - 1,
				};
			});
		}
	};

  render() {
    return (
      <div>
        <Counter
			count={this.state.count}
          	addFunction={this.addFunction}
          	substractFunction={this.substractFunction}
		/>          
      </div>
    );
  }
}

export default App;
