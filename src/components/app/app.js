import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import Button from '../button';
import Row from '../row';

import './app.css';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import ItemDetails from '../item-details';

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

    const {getPlanet, getStarship, getPersonImg, getPlanetImg, getStarshipImg} = this.swapiService;

    const starshipDetails = (
      <ItemDetails itemId={11} 
        getData={getStarship}
        getImageUrl={getStarshipImg}/>
    )

    const planetDetails = (
      <ItemDetails itemId={5} 
      getData={getPlanet}
      getImageUrl={getPlanetImg}/>
    )

    return (
      <div className='container'>
        <Header />
        { planet }
        <Button toggleRandomPlanet={this.toggleRandomPlanet}/>
        <PeoplePage/>
        <Row left={starshipDetails} right={planetDetails}/>
      </div>
    );
  }
};