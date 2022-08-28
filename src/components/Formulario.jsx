import React, { useState, useEffect } from "react";
import "./formulario.css";
import { Form, Button } from "react-bootstrap";
import ListaColores from "./ListaColores";

const Formulario = () => {
    //cargo la lista de colores desde el localstorage al momento del montaje
    const storedList = JSON.parse(localStorage.getItem("keyTp6ColorList")) || [];

    const [listaColores, setListaColores] = useState(storedList);
    const [colorIngresado, setColorIngresado] = useState("");
    const [colorSeleccionado, setColorSeleccionado] = useState("#000000");
    const [invalidColor, setInvalidColor] = useState(true);

    const colorSubmit = (e) => {
        e.preventDefault();
        //borro el formulario y deshabilito el botón agregar
        setColorIngresado('');
        setInvalidColor(true);
        //agrego el nuevo elemento
        let nuevo = {};
        nuevo.nombre = colorIngresado;
        nuevo.codigo = colorSeleccionado;
        setListaColores([...listaColores, nuevo]);
    };

    useEffect(()=>{
    },[]);

    useEffect(()=>{
        //cada vez que la lista de colores se actualiza, guardo la nueva lista en el localstorage
        localStorage.setItem("keyTp6ColorList", JSON.stringify(listaColores));
    },[listaColores]);

    const changeColorIngresado = (e) => {
        setColorIngresado(e.target.value);
        setInvalidColor(e.target.value.length<4);
    }

    const borrarColor=(color) => {
        const nuevaLista=listaColores.filter((item)=>{
            return item.codigo !== color.codigo;
        })
        setListaColores(nuevaLista);
    }

    return (
        <div className="container-fluid pt-4">
            <Form className="pb-5" onSubmit={colorSubmit}>
                <div className="row">
                    <Form.Group className="col-12 col-sm-3 col-lg-2 d-flex justify-content-center">
                        <Form.Control
                            value={colorSeleccionado}
                            className="muestraClass"
                            type="color"
                            onChange={(e) => setColorSeleccionado(e.target.value)}
                        />
                    </Form.Group>
                    <div className="col-12 col-sm-9 col-lg-10">
                        <Form.Group className="mb-3" controlId="formColor">
                            <Form.Label>Ingrese un color</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="ingrese un color"
                                value={colorIngresado}
                                onChange={(e) => changeColorIngresado(e)}
                            />
                        </Form.Group>
                        <Button className="col-12 col-sm-3" variant="primary" type="submit" disabled={invalidColor}>
                            Agregar
                        </Button>
                    </div>
                </div>
            </Form>
            <hr />
            <ListaColores listaColores={listaColores} borrarColor={borrarColor}/>
        </div>
    );
};

export default Formulario;
