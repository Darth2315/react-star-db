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
			<Header onServiceChange={this.onServiceChange}/>
			{ planet }
			<Button toggleRandomPlanet={this.toggleRandomPlanet}/>
			<PeoplePage/>
			<PlanetPage/>
			<StarshipPage/>
		</SwapiServiceProvider>
      </div>
    );
  }
};