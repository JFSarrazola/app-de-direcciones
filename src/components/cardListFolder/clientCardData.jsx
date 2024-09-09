import { useContext } from 'react';
import './directionListStyles/clientCardDataStyle.css'
import { MyContext } from '../../context/myContext';


export const ClientCardData = ({ clientData,setShowMore }) => {

  //  LAS ETIQUETAS QUE MUESTRAN EL TELÉFONO Y EL NOMBRE SON OPCIONALES POR ESO PRIMERO SE VERIFICA SI LAS PROPIEDADES
  // phoneClient o name SON UNDEFINED EN EL OBJETO clientData, DE SERLO NO SE DIBUJAN

  const { setCurrentClientData } = useContext( MyContext )

  const onClickShowAndSetData  = ()=>{

    setCurrentClientData(clientData)
    setShowMore(true)

  };

  return (
    <>
        <div className='clientCardContainer'>

            <h2> <span  className="cardTittle">
              Dirección: </span> { clientData.directionClient } 
            </h2>



            {clientData.phoneClient ? 

            <h3> <span  className="cardTittle"> 
              Teléfono: </span> { clientData.phoneClient } 
            </h3> 
            
            : null

            }


            
            {clientData.nameClient ? 

            <h3> <span  className="cardTittle"> 
              Cliente: </span> { clientData.nameClient } 
            </h3> 
            
            : null

            }

            <button onClick = { () => onClickShowAndSetData() } className="cardShowMoreButton"> Más información... </button> 

        </div>

    </>
  )
}
