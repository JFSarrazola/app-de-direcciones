import { useContext, useState } from 'react';
import '../filtersFolder/filterBoxStyle.css';
import { MyContext } from '../../context/myContext';



export const FilterBoxComponent = () => {

    const [ showFilters, setShowFilters] = useState(false);  //este estado se encarga de mostrar u ocultar el cuadro con las opciones de filtro : Mayor a Menor y Menor a Mayor


    const { setRoutesList, routesList } = useContext( MyContext );
  
    const sortList = ( condition )=>{
    
        // sortlist se encarga de organizar la lista de rutas, condition = true ( Mayor a Menor ) condition = false ( Menor a Mayor )

        const sortedList = condition ? 
            [...routesList].sort( (a,b)=> b.directionClient.localeCompare(a.directionClient) ) : 
            [...routesList].sort( (a,b)=> a.directionClient.localeCompare(b.directionClient) )

        setRoutesList( sortedList );
        setShowFilters(false)

    } 

  return (
    
    <div className='FilterComponent' onClickCapture={()=> setShowFilters(false)}>

        <button onClick = {()=> setShowFilters(!showFilters)} className='buttonFilter'> Organizar direcciónes </button>

        <section className = { showFilters ? 'filterContainerOn':'filterContainerOff' }>

            <button className='filterOptions' onClick={()=> sortList( true )}> Mayor a Menor </button>
            <button className='filterOptions' onClick={()=> sortList( false )}> Menor a Mayor </button>

        </section>
    </div>

  )
}
