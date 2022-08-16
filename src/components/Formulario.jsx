import React, {useState} from "react";
import './formulario.css';
import { Form, Button } from 'react-bootstrap';
// import { SketchPicker } from 'react-color'
import ListaColores from "./ListaColores";

const Formulario = () => {

    const colorNombre = ['blanco','negro','rojo','azul','amarillo','verde','celeste','violeta','gris','naranja'];
    const colorRGB = ['#ffffff', '#000000', '#ff0000', '#0000ff', '#ffff00', '#00ff00', '#00ffff', '#8000ff', '#808080', '#ff8000'];

    const [colorIngresado, setColorIngresado] = useState(0);

    const colorChange = (e)=>{
        let color = e.target.value;
        let posicion = colorNombre.indexOf(color);
        
        if (posicion !== -1)
        {

        }
    }

    return (
        <div className="container-fluid pt-4 row">
            <div className="muestraClass col-4"></div>
            <Form className="pb-5 col-8">
                <Form.Group className="mb-3" controlId="formColor">
                    {/* <SketchPicker/> */}
                    <Form.Label>Ingrese un color</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="ingrese un color"
                        onChange={(e) => colorChange(e)}
                        // value={tarea.nombre}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Agregar
                </Button>
            </Form>
            <hr/>
            <ListaColores/>
        </div>
    );
};

export default Formulario;
