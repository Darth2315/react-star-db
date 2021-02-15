import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import Button from '../button';

import './app.css';

export default class App extends Component {

  state = {
    randomPlanet: true
  }

  toggleRandomPlanet = () => {
    this.setState({
      randomPlanet: !this.state.randomPlanet
    })
  }

  render() {
    const planet = this.state.randomPlanet ? <RandomPlanet /> : null;
    return (
      <div className='container'>
        <Header />
        { planet }
        <Button toggleRandomPlanet={this.toggleRandomPlanet}/>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList />
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
        </div>
      </div>
    );
  }
};