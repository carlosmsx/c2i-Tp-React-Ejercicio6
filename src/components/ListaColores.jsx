import React from 'react';
import ColorCard from './ColorCard';

const ListaColores = (props) => {
    return (
        <div className="containet-fluid">
            <div className="row justify-content-start">
                {
                    props.listaColores.map((item,posicion)=><ColorCard color={item} key={posicion}></ColorCard>)
                }
            </div>
        </div>
    );
};

export default ListaColores;