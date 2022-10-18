import './App.css';
import Boton from './componentes/Boton';
import freeCodeCampLogo from './imagenes/freecodecamp.png';
import Contador from './componentes/Contador';
import {useState} from 'react'; //Hook para estados

function App() {

  const [numClics, setNumClics] = useState(0);

  //función flecha se asigna a una constante en este caso "manejarClic"
  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className ='App'>
      <div className ='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
         <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/> 
      </div>
    </div>
  );
}

export default App;
