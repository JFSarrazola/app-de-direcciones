import { useContext } from "react";
import { ClientCardData } from "../cardListFolder/clientCardData"
import './trashedStyle.css';
import { MyContext } from "../../context/myContext";


export const TrashedCards = ( { setShowMore } ) => {

  const { routesTrashed,
          setRoutesTrashed,
          routesList, 
          setRoutesList,
          setCurrentClientData } = useContext(MyContext)    

  const recover = ( clientData )=>{

    setRoutesList([...routesList, clientData])
    
    
    const filterList = routesTrashed.filter((e)=>  e.idClient != clientData.idClient );
 
    setRoutesTrashed(filterList);
    
  }


  return (
      <>

        <button className="emptyTrashButton"
                onClick = { ()=> setRoutesTrashed([]) }> 
                Vaciar papelera </button>
        
        <section>

          { routesTrashed.map( (e)=>
          
            <div key = { e.idClient } className='clientCard'>

              <ClientCardData clientData = { e }
                              setShowMore = { setShowMore }/>

              <button onClick={()=> recover(e) }
                      className="recoveryButton"> 

                RECUPERAR  
              
              </button>

            </div>
          
          ) }

        </section>

      </>
  )  
}
