import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import Button from '../button';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';

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
    return (
      <div className='container'>
        <Header />
        { planet }
        <Button toggleRandomPlanet={this.toggleRandomPlanet}/>
        <PeoplePage/>

        <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected}
                    getData={this.swapiService.getAllStarships}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson}/>
            </div>
          </div>

          <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected}
                    getData={this.swapiService.getAllPlanets}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson}/>
            </div>
          </div>
      </div>
    );
  }
};