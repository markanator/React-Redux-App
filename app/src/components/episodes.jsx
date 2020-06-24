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

const EpiCard = ({data}) => {
    return (
        <div className='loc-card'>

            <Card>
                <CardHeader>
                    <CardTitle  ardTitle>{data.name}</CardTitle>
                </CardHeader>
                <CardBody>
                    <CardSubtitle>Aired on: {data.air_date}</CardSubtitle>
                    <CardText>Episode: {data.episode}</CardText>
                </CardBody>
            </Card>

        </div>
    );
}

export default EpiCard;