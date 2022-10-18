import React from 'react';
import '../hojas-de-estilo/Boton.css';
/*Ahora usamos props pero pasamos
los elementos directamente sin necesidad
de props.texto */

function Boton({texto, esBotonClic, manejarClic}){
  return(
    /*Asignamos de modo dinámico el nombre de la clase dependiendo
    si le dio click o no cambiará el nombre*/
    <button
      className={esBotonClic ? 'boton-clic' : 'boton-reiniciar'}
      //Cuando ocura un click, un eventListener
      onClick={manejarClic}>
      {texto}
    </button>
  );
}

export default Boton;