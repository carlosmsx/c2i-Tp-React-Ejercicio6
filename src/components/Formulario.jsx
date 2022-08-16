import React from "react";
import './formulario.css';
import { Form, Button } from 'react-bootstrap';

const Formulario = () => {
    return (
        <div className="container-fluid pt-4 row">
            <div className="muestraClass col-4"></div>
            <Form className="col-8">
                <Form.Group className="mb-3" controlId="formColor">
                    <Form.Label>Ingrese un color</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="ingrese un color"
                        // onChange={(e) => setTarea({ nombre: e.target.value.trimStart(), descripcion: tarea.descripcion })}
                        // value={tarea.nombre}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Agregar
                </Button>
            </Form>
        </div>
    );
};

export default Formulario;
