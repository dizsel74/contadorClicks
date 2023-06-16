import React from "react";
import '../estilos/Boton.css';

/*desestructurado sintax*/
function Botones({ texto, esBotonDeClick, manejadorBoton }){ 
  return(
    <button 
        className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar' }
        onClick={manejadorBoton}>
      {texto}
    </button>
  );
}


// function Botones(props){
//   return(
//     <button 
//       className={props.esBotonDeClick ? 'boton-click' : 'boton-reiniciar'}
//       onClick={props.manejadorBoton}>
//       {props.texto}
//     </button>
//   );
// }

export default Botones;