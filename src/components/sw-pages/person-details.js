import React from 'react';
import ItemDetails, {Record} from '../item-details';
import {withSwapiService} from '../hoc';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="name" label="Name"/>
            <Record field="birthYear" label="Birth Year"/>
            <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImg
    }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails);