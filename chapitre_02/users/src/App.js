import React from 'react';
import './App.css';
import users from './users.json'
import UserInfo from './Components/UserInfo';

class App extends React.Component {
  render() {
    return (
      <div>
        	{users.map((user) => (
					<UserInfo name={user.name} email={user.email} />
				))}
      </div>
    );
  }
}

export default App;
