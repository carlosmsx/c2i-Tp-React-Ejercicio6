import React, {useState} from "react";
import './formulario.css';
import { Form, Button } from 'react-bootstrap';
import ListaColores from "./ListaColores";

const Formulario = () => {
    const defaultColor = {nombre:'blanco', valor:'#ffffff'};

    const colorNombre = ['blanco','negro','rojo','azul','amarillo','verde','celeste','violeta','gris','naranja'];
    const colorRGB = ['#ffffff', '#000000', '#ff0000', '#0000ff', '#ffff00', '#00ff00', '#00ffff', '#8000ff', '#808080', '#ff8000'];

    const [colorIngresado, setColorIngresado] = useState(defaultColor);
    const [isDisabled, setIsDisabled] = useState(true);
    const [listaColores, setListaColores] = useState([]);

    const colorChange = (e)=>{
        let color = e.target.value;
        let posicion = colorNombre.indexOf(color);
        
        if (posicion !== -1)
        {
            setColorIngresado({nombre: color, valor: colorRGB[posicion]});
            setIsDisabled(false);
        }
        else
        {
            setIsDisabled(true);
        }
    }

    const colorSubmit = (e)=>
    {
        e.preventDefault();
        setListaColores([...listaColores, colorIngresado]);
        console.log(listaColores);
    }

    return (
        <div className="container-fluid pt-4 row">
            <div style={{backgroundColor: colorIngresado.valor}} className="muestraClass col-4"></div>
            <Form className="pb-5 col-8" onSubmit={colorSubmit}>
                <Form.Group className="mb-3" controlId="formColor">
                    <Form.Label>Ingrese un color</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="ingrese un color"
                        onChange={(e) => colorChange(e)}
                    />
                </Form.Group>
                <Button disabled={isDisabled} variant="primary" type="submit">
                    Agregar
                </Button>
            </Form>
            <hr/>
            <ListaColores listaColores={listaColores}/>
        </div>
    );
};

export default Formulario;
