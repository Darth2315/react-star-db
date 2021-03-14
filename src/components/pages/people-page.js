import React from 'react';
import Row from '../row';
import {withRouter} from 'react-router-dom';
import {
    PersonList,
    PersonDetails
  } from '../sw-pages';

const PeoplePage = ({match, history}) => {

    const {id} = match.params;
    return (
        <Row 
            left={<PersonList 
                onItemSelected={(itemId) => history.push(itemId)}/>}
            right={<PersonDetails itemId={id}/>}/>
    )
}

export default withRouter(PeoplePage);