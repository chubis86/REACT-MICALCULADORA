import React from "react";
import './hojas-de-estilo/Boton.css';

export default function Boton(props){
    return(
        <>
            <div className='boton' onClick={()=> props.darClick(props.children)}>
                {props.children}
            </div>
        </>
    );
}