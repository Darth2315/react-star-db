import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import Button from '../button';

import './app.css';

export default class App extends Component {

  state = {
    randomPlanet: true,
    selectedPerson: 3
  }

  toggleRandomPlanet = () => {
    this.setState({
      randomPlanet: !this.state.randomPlanet
    })
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
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
            <ItemList onItemSelected={this.onPersonSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson}/>
          </div>
        </div>
      </div>
    );
  }
};