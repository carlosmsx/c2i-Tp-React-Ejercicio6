import React from "react";
import {Button, Card} from 'react-bootstrap'
import './colorcard.css';

const ColorCard = (props) => {
    return (
        <div className="col-6 col-sm-4 col-md-3 pb-3">
            <Card>
                <Card.Header className="text-left">
                    <Card.Title>{props.color.nombre}</Card.Title>
                </Card.Header>
                <Card.Body className="d-flex justify-content-center">
                    <div className="colorCardClass" style={{backgroundColor: props.color.codigo}}></div>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-end">
                    <Button>Borrar</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default ColorCard;
