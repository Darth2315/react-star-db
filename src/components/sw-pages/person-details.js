import React from 'react';
import ItemDetails, {Record} from '../item-details';
import {withSwapiService} from '../hoc';

const PersonDetails = ({itemId, swapiService}) => {
    const {getPerson, getPersonImg} = swapiService;
    return (
        <ItemDetails itemId={itemId} 
            getData={getPerson}
            getImageUrl={getPersonImg}>

            <Record field="name" label="Name"/>
            <Record field="birthYear" label="Birth Year"/>
            <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
    )
}

export default withSwapiService(PersonDetails);