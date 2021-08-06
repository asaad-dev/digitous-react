import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Views
import Home from './views/Home';
import Film from './views/Film';
// Movies data
import movies from './movies.json';

class App extends React.Component {
  
  render() {
      return (
          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={(props) => 
                <Home {...props} movies={movies} />} 
              />
              <Route path="/:id" render={(props) => 
                <Film {...props} movies={movies} />}
              />

              {/* <Route path="*" component={NotFound} /> */}
            </Switch>
          </BrowserRouter>
      )
    }
}

export default App;
