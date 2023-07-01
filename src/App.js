
import './App.css';
import Botones from './componentes/Botones';
import logotipo from './images/city.svg';
import Contador from './componentes/Contador';
import { useState } from 'react';
function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () =>{
   return setNumClicks (numClicks+1);
  };

  const reiniciarContador = () =>{
    return setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img className='logo' src={logotipo} alt='Logotipo city'
        />
      </div>
     
      <div className='contenedor-contador'>
       <Contador numClicks={numClicks}/>

        <Botones
          texto={'Turno'}
          esBotonDeClick={true}
          manejadorBoton={manejarClick} 
          />
        <Botones
          texto={'Borrar'}
          esBotonDeClick={false} 
          manejadorBoton={reiniciarContador} 
          />
      </div>
    </div>
  );
}

export default App; 
