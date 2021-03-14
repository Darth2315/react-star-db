import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import Button from '../button';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import {SwapiServiceProvider} from '../swapi-service-context';
import {PeoplePage, PlanetPage, StarshipPage} from '../pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.css';
import { StarshipDetails } from '../sw-pages';

export default class App extends Component {

  state = {
    randomPlanet: true,
    hasError: false,
    swapiService: new SwapiService()
  }

  toggleRandomPlanet = () => {
    this.setState({
      randomPlanet: !this.state.randomPlanet
    })
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

      return {
        swapiService: new Service()
      }
    })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>
    }
    const planet = this.state.randomPlanet ? <RandomPlanet /> : null;

    return (
      <div className='container'>
		<SwapiServiceProvider value={this.state.swapiService}>
			<Router>
				<Header onServiceChange={this.onServiceChange}/>
				{ planet }
				<Button toggleRandomPlanet={this.toggleRandomPlanet}/>

				<Route path="/" exact render={() => <h2>Welcome to Star DB</h2>}/>
				<Route path="/people/:id?" component={PeoplePage}/>
				<Route path="/planets" component={PlanetPage}/>
				<Route path="/starships" exact component={StarshipPage}/>
        <Route path="/starships/:id" 
          render={({match}) => {
              const {id} = match.params;
              return <StarshipDetails itemId={id}/> 
          }}/>

			</Router>
		</SwapiServiceProvider>
      </div>
    );
  }
};