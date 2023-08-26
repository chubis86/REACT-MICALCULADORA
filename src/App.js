import './componentes/hojas-de-estilo/App.css';
import logo from './imagenes/logo.png';
import Boton from './componentes/Boton';
import BotonLimpiar from './componentes/BotonLimpiar';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [pantalla, mostrarPantalla] = useState('');

  const darClick = (valor) =>{
    mostrarPantalla(pantalla+valor);
  }

  const obtenerResultado = () =>{
    
        mostrarPantalla(evaluate(pantalla).toString());
     
      
  }

  return (
    <div className="App">
      <img src={logo} className='logo' alt="" />
      <h3 className='titulo'>MI CALCULADORA</h3>
      <div className='contenedor-principal'>
        <div className='pantalla'>
          {pantalla}
        </div>
        <div className="fila">
          <Boton darClick={darClick}>1</Boton>
          <Boton darClick={darClick}>2</Boton>
          <Boton darClick={darClick}>3</Boton>
          <Boton darClick={darClick}>+</Boton>
        </div>
        <div className="fila">
          <Boton darClick={darClick}>4</Boton>
          <Boton darClick={darClick}>5</Boton>
          <Boton darClick={darClick}>6</Boton>
          <Boton darClick={darClick}>-</Boton>
        </div>
        <div className="fila">
          <Boton darClick={darClick}>7</Boton>
          <Boton darClick={darClick}>8</Boton>
          <Boton darClick={darClick}>9</Boton>
          <Boton darClick={darClick}>*</Boton>
        </div>
        <div className="fila">
          <Boton>.</Boton>
          <Boton darClick={darClick}>0</Boton>
          <Boton darClick={obtenerResultado}>=</Boton>
          <Boton darClick={darClick}>/</Boton>
        </div>
        <div className="fila">
          <BotonLimpiar limpiar = { () => mostrarPantalla('')}></BotonLimpiar>
        </div>
      </div>
    </div>
  );
}

export default App;
