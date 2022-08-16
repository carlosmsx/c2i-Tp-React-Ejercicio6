import React from "react";
import {Card} from 'react-bootstrap'

const ColorCard = (props) => {
    return (
        <div className="col-12 col-sm-6 col-md-3 px-2 pb-3">
            <Card>
                <Card.Header className="d-flex justify-content-evenly">
                    <div className="colorCardClass"></div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{props.color.nombre}</Card.Title>
                    <Card.Text>{props.color.valor}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ColorCard;
