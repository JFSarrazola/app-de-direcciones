import { useContext } from 'react';
import './directionListStyles/clientCardOptionsStyle.css'
import { MyContext } from '../../context/myContext';


export const ClientCardOptions = ({ clientData }) => {

  
  const { setRoutesList, 
          routesList,
          routesCompleted,
          setRoutesCompleted, 
          routesTrashed,
          setRoutesTrashed} = useContext(MyContext);
          

  const deleteCard = ()=>{

    setRoutesTrashed([ ...routesTrashed, clientData ]);

    const filterList = routesList.filter((e)=>  e.idClient != clientData.idClient );
 
    setRoutesList(filterList);

    console.log('ruta eliminada')  // AGREGAR AQUÍ ESTILO FONDO ROJO

  };

  const addCompletedCard = ()=>{

    setRoutesCompleted([ ...routesCompleted, clientData ]);

    const filterList = routesList.filter((e)=>  e.idClient != clientData.idClient );
 
    setRoutesList(filterList);
    
    console.log('ruta completada')  // AGREGAR AQUÍ ESTILO FONDO VERDE

  };


  return (

    <>
        <div className='cardOptionsButtons'>

            <button className = 'CompleteButton' onClick={ ()=> addCompletedCard() }> COMPLETADO </button>
            <button className = 'DeleteButton' onClick={ ()=> deleteCard()  }> Eliminar </button>

        </div>
    
    </>

  )
}
