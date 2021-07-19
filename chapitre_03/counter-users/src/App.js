import React from 'react';
import users from "./users.json";
import UserInfo from "./Components/UserInfo";


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  addFunction = () => {
		if (this.state.count > users.length) {
			this.setState((prevState) => {
				return {
					count: prevState.count + 1,
				};
			});
		}
	};

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
        <h2>{this.state.count}</h2>
        <div>
          <button onClick={this.addFunction}>Increment</button>
          <button onClick={this.substractFunction}>Increment</button>
        </div>

        {users.slice(0, this.state.count).map((user) => {
          return (
              <UserInfo 
                key = {user.id}
                name = {user.name}
                email = {user.email}
              />
          );
        })}
      </div>
    );
  }
}

export default App;
