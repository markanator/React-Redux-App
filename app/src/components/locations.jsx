import React from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardHeader
} from 'reactstrap';

import './characterstyles.css';

const LocationCards = ({data}) => {
    return (
        <div className='loc-card'>

            <Card>
                <CardHeader>
                    <CardTitle  ardTitle>{data.name}</CardTitle>
                </CardHeader>
                <CardBody>
                    <CardSubtitle>Type: {data.type}</CardSubtitle>
                    <CardText>Dimension: {data.dimension}</CardText>
                </CardBody>
            </Card>

        </div>
    );
}

export default LocationCards;