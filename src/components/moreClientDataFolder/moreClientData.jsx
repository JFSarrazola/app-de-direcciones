import { useContext } from 'react'
import './moreDataStyle.css'
import { MyContext } from '../../context/myContext'

export const MoreClientData = ({setShowMore}) => {

  const { currentClientData } = useContext(MyContext)

  return (
  <>
  
    <div className='moreDataBackGround'>
      
      <section className="moreDataContainer">

        <dl className='columncontainer'>

          <dt className='moreTittle'> Dirección </dt>
          <dd className='moreInfo'> { currentClientData.directionClient }</dd>
            

          {currentClientData.nameClient?
            <>
            <dt className='moreTittle'> Nombre de cliente</dt>
            <dd className='moreInfo'> { currentClientData.nameClient } </dd>
            </>:null
          }


          {currentClientData.phoneClient||currentClientData.altPhoneClient?
            <>
            <dt className='moreTittle'> Télefono </dt>
            <dd className='moreInfo'> { currentClientData.phoneClient } </dd>
            <dd className='moreInfo'> { currentClientData.altPhoneClient } </dd>
            </>:null
          }


        </dl>


        <dl className='columncontainer'>

          {currentClientData.directionComplementClient?
            <>
            <dt className='moreTittle'> Complementos de dirección  </dt>
            <dd className='moreInfo'> { currentClientData.directionComplementClient } </dd>
            </>:null
          }


          {currentClientData.emailClient?
            <>
            <dt className='moreTittle'> Correo Electronico </dt>
            <dd className='moreInfo'> { currentClientData.emailClient }  </dd>
            </>:null
          }

          {currentClientData.deliveryHourClient?
            <>
            <dt className='moreTittle'> Horario de entrega </dt>
            <dd className='moreInfo'> { currentClientData.deliveryHourClient }</dd>
            </>:null
          }

          {currentClientData.leaveInEntryClient?
            <>
            <dt className='moreTittle'> Dejar en porteria </dt>
            <dd className='moreInfo'> { currentClientData.leaveInEntryClient }</dd>
            </>:null
          }

          {currentClientData.freeInfoClient?
            <>
            <dt className='moreTittle'> Otras especificaciónes </dt>
            <dd className='moreInfo'> { currentClientData.freeInfoClient }</dd>
            </>:null
          }

          <button onClick={()=> setShowMore(false)} className='moreBackButton'> Atras </button>
          
        </dl>

        

      </section>
    </div>

  
  </>
  )
}
