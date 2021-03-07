import React from 'react';
import ItemDetails, {Record} from '../item-details';
import {withSwapiService} from '../hoc';

const PlanetDetails = (props) => {

    return (
            <ItemDetails {...props}>
                <Record field="diameter" label="Diameter"/>
                <Record field="population" label="Population"/>
                <Record field="rotationPeriod" label="Rotation Period"/>
            </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImg
    }
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails);