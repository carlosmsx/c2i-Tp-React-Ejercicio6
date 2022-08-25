import React, { useState } from "react";
import "./formulario.css";
import { Form, Button } from "react-bootstrap";
import ListaColores from "./ListaColores";

const Formulario = () => {
    const [colorIngresado, setColorIngresado] = useState("");
    const [colorSeleccionado, setColorSeleccionado] = useState("#000000");
    const [listaColores, setListaColores] = useState([]);

    const colorSubmit = (e) => {
        e.preventDefault();
        let nuevo = {};
        nuevo.nombre = colorIngresado;
        nuevo.codigo = colorSeleccionado;
        console.log(nuevo);
        setListaColores([...listaColores, nuevo]);
    };

    return (
        <div className="container-fluid pt-4">
            <Form className="pb-5" onSubmit={colorSubmit}>
                <div className="row">
                    <Form.Group className="col-12 col-sm-3 col-md-2">
                        <Form.Control
                            value={colorSeleccionado}
                            className="muestraClass"
                            type="color"
                            onChange={(e) => setColorSeleccionado(e.target.value)}
                        />
                    </Form.Group>
                    <div className="col-12 col-sm-9 col-md-10">
                        <Form.Group className="mb-3" controlId="formColor">
                            <Form.Label>Ingrese un color</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="ingrese un color"
                                value={colorIngresado}
                                onChange={(e) => setColorIngresado(e.target.value)}
                            />
                        </Form.Group>
                        <Button className="col-6 col-sm-3" variant="primary" type="submit">
                            Agregar
                        </Button>
                    </div>
                </div>
            </Form>
            <hr />
            <ListaColores listaColores={listaColores} />
        </div>
    );
};

export default Formulario;
