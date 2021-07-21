import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    return (
      <div className="bg-secondary">
        <h2>Form Submitted</h2>
        e.preventDefault();
      </div>
    )
  }
  
  
  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
          <div>
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" value={this.state.value} onChange={this.handleChange} />
          </div>

          <div>
            <label className="form-label">Password</label>
            <input className="form-control" type="password" required />
          </div>

          <div className="my-3 form-check">
            <input type="checkbox" className="form-check-input" value={this.state.value} onChange={this.handleChange} />
            <label for="inputCheck" className="form-check-label">Remember me</label>
          </div>

          <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    )
  }

  render() {
    return (
      <div className="container"> 
      <h2>Login</h2>
          {this.renderForm()}
      </div>
    )
  }
}

export default App;