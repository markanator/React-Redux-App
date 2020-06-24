import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';

import './characterstyles.css';

const CharacterCards = (props) => {
    if(props.loading){
        return <h2>Loading...</h2>;
    }
    return (
        <div className='CharacterCard'>

            <Card>
                <CardImg top width="1%" src={props.url} alt="Card image cap"/>
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle>Origin: {props.originL}</CardSubtitle>
                    <CardText>Status: {props.status}</CardText>
                </CardBody>
            </Card>

        </div>
    );
}

export default CharacterCards;