import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

//Creamos una plantilla - Componente funcional
export function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        /*Hacemos que se pase la imagen dinamicamente, ponemos comillas 
        invertidas para poner ${props.imagen} que solo cambiará esa parte
        dinamicamente*/
        src={require(`../imagenes/testimonio_${props.imagen}.png`)}
        alt='Foto de Emma' />
      <div className='contenedor-texto-testimonio'> 
        <p className='nombre-testimonio'>
          <strong /*en negrita*/>{props.nombre}</strong> in {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} in <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>
          "{props.testimonio}"
        </p>
      </div>
    </div>  
  );   
}

//Tenemos que exportar el componente para que  puedan importarlo
//Exportación por defecto => unico componente que se exportará
//export default Testimonio;

//Exportación nombrada => varios componentes pero se especifíca