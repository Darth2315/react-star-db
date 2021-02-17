import React, {Component} from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

import './people-page.css';
import SwapiService from '../../services/swapi-service';

export default class PeoplePage extends Component {

    state = {
        selectedPerson: 3
    }

    swapiService = new SwapiService();

    onPersonSelected = (id) => {
        this.setState({
          selectedPerson: id
        })
    }

    render() {

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
                renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`} />
        );

        const personDetails = (
            <ItemDetails itemId={this.state.selectedPerson}
            getData={this.swapiService.getPerson}
            getImageUrl={this.swapiService.getPersonImg}/>
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails} />       
            </ErrorBoundry>  
        )
    }
}