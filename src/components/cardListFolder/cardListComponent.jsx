import { ClientCardData } from './clientCardData';
import { ClientCardOptions } from './clientCardOptions';
import { FilterBoxComponent } from '../filtersFolder/FilterBoxComponent';


import './directionListStyles/clientCardContainerStyle.css';
import { useContext } from 'react';
import { MyContext } from '../../context/myContext';


//Este componente se encarga de dibujar una lista con las direcciónes que el usuario ingresa
//ClientCardData muestra los datos que se ingresaron, ClientCardOptions contiene dos botones con los que se puede interactuar con cada carta
//FilterBoxComponent se encarga de crear un componente el cual manipula el orden de la lista de direcciónes (mayor a menor | menor a mayor)



export const CardListComponent = ({ setShowMore }) => {


  const { routesList } = useContext(MyContext);

  return (
    <>

      <FilterBoxComponent />

      <section className = 'cardsListContainer'>

        { routesList.map( (e)=>
        
      
          <div key = { e.idClient } className='clientCard'>

            <ClientCardData clientData = { e }
                            setShowMore = { setShowMore }/>

            <ClientCardOptions  clientData = { e } />
          </div>
        )}

      </section>
    </>
   
  )
}
