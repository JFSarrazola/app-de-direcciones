
import { MyContext } from './myContext'
import { useState } from 'react';


export const MyProvider = ( {children} ) => {

    const [ routesList , setRoutesList ] = useState([]); // routeList se refiere a la lista de rutas(direcciónes) que el usuario crea, estas direcciónes pueden tener más datos como telefono,nombre, correo etc

    const [ routesCompleted, setRoutesCompleted ] = useState([]); // este estado contiene las direcciónes que el usuario marcó como completadas

    const [ routesTrashed, setRoutesTrashed ] = useState([]); // este estado contiene las direcciónes que el usuario elimino, sirve como papelera

    const [ currentClientData, setCurrentClientData ] = useState({}); //este estado se refiere a una unica dirección la cual se define con una interacción especifica del usuario ( dar click a un boton para mostrar más info sobre esa dirección )

    const [ showMore, setShowMore ] = useState( false ); //este estado varia entre true y false para crear el componente que mostará la info adicional que da currentClientData 



    return (
        
        <MyContext.Provider  value = {{ routesList , setRoutesList,  routesCompleted, setRoutesCompleted,
                                        routesTrashed, setRoutesTrashed , currentClientData, setCurrentClientData,
                                        showMore, setShowMore          
        }}>

            { children }

        </MyContext.Provider>

    )
}
