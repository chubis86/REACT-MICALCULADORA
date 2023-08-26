import React from "react";
import './hojas-de-estilo/BotonLimpiar.css';

export default function BotonLimpiar(props){
    return(
        <>
        <div className="botonlimpiar" onClick={props.limpiar}>
            LIMPIAR
        </div>
        </>
    );
}