import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import Button from '../button';
import Row from '../row';

import './app.css';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import ItemDetails, {Record} from '../item-details/';

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

    const {getPlanet, getStarship, getPlanetImg, getStarshipImg} = this.swapiService;

    const starshipDetails = (
      <ItemDetails itemId={10} 
        getData={getStarship}
        getImageUrl={getStarshipImg}>

        <Record field="model" label="Model"/>
        <Record field="length" label="Length"/>
        <Record field="costInCredits" label="Cost"/>

      </ItemDetails>
    )

    const planetDetails = (
      <ItemDetails itemId={2} 
      getData={getPlanet}
      getImageUrl={getPlanetImg}>

      <Record field="diameter" label="Diameter"/>
      <Record field="population" label="Population"/>
      <Record field="rotationPeriod" label="Rotation Period"/>

      </ItemDetails>
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