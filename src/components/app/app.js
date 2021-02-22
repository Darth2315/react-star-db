import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import Button from '../button';

import './app.css';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import {SwapiServiceProvider} from '../swapi-service-context';

import {
  PersonList,
  StarshipList,
  PlanetList,
  PersonDetails,
  StarshipDetails,
  PlanetDetails
} from '../sw-pages';

export default class App extends Component {

  state = {
    randomPlanet: true,
    hasError: false
  }

  swapiService = new SwapiService();

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

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>
    }
    const planet = this.state.randomPlanet ? <RandomPlanet /> : null;
    // const {id} = this.swapiService.getPerson;

    return (
      <div className='container'>
        <SwapiServiceProvider value={this.swapiService}>
          <Header />
          { planet }
          <Button toggleRandomPlanet={this.toggleRandomPlanet}/>

          <PersonDetails itemId={11}/>
          <PlanetDetails itemId={3}/>
          <StarshipDetails itemId={22}/>

          <PersonList/>
          <PlanetList/>
          <StarshipList/>
        </SwapiServiceProvider>
      </div>
    );
  }
};