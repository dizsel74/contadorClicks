import React from "react";
import '../estilos/Boton.css'
function Contador({numClicks}){
    return(
        <div className='contador'>
            {numClicks}
        </div>
    );
}

// function Contador(props.numClicks){
//     return(
//         <div className='contador'>
//             {props.numClicks}
//         </div>
//     );
// }

export default Contador;