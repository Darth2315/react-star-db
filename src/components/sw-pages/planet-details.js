import React from 'react';
import ItemDetails, {Record} from '../item-details';
import {SwapiServiceConsumer} from '../swapi-service-context';

const PlanetDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPlanet, getPlanetImg}) => {
                    return (
                        <ItemDetails itemId={itemId} 
                            getData={getPlanet}
                            getImageUrl={getPlanetImg}>

                            <Record field="diameter" label="Diameter"/>
                            <Record field="population" label="Population"/>
                            <Record field="rotationPeriod" label="Rotation Period"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
}

export default PlanetDetails;