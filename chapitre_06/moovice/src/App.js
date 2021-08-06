import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Views 
import Home from './views/Home';
import Weekly from './views/Weekly';
import WeeklyBattle from './views/WeeklyBattle';
import Popular from './views/Popular';
import PopularBattle from './views/PopularBattle';
import Favorites from './views/Favorites';
import Navbar from './views/Navbar';
// Components
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
       <BrowserRouter>
         <Switch>
          <Route exact path="/" component={Navbar} />
           <Route path="/" component={Home} />
           <Route path="/weekly" component={Weekly} />
           <Route path="/weekly-battle" component={WeeklyBattle} />
           {/* <Route path="/popular" component={Popular} /> */}
           <Route path="/popular" render={(props) => <Card />} />
           <Route path="/popular-battle" component={PopularBattle} />
           <Route path="/favorites" component={Favorites} />
         </Switch>
       </BrowserRouter>
    );
  }
}

export default App;
