import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FilmInfo from './views/FilmInfo';
import Data from './data.json';

class App extends React.Component {
  
  render() {
      return (
          <BrowserRouter>
            <Switch>
              <>
                {Data.map(film => {
                  return (
                    <h2>{film.title}</h2>
                  )
                })}
              </>
            
              <Route exact path="/filmInfo" component={FilmInfo} />
              {/* <Route path="*" component={NotFound} /> */}
            </Switch>
          </BrowserRouter>
      )
    }
}

export default App;
