import { useContext } from 'react'
import { ClientCardData } from '../cardListFolder/clientCardData'
import { MyContext } from '../../context/myContext'


export const CompletedCardsComponent = ( { setShowMore } ) => {
  
  const { routesCompleted,
          setCurrentClientData } = useContext(MyContext);

    return (
        <>

          <section style={{marginTop:'20px'}}>

            { routesCompleted.map( (e)=>
            
              <div key = { e.idClient } className='clientCard'>

                <ClientCardData clientData = { e }
                                setShowMore = { setShowMore }/>

              </div>
            
            ) }

          </section>
          
        </>
    )    
}
