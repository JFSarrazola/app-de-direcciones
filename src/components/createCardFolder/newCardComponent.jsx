import { useContext, useState } from 'react';
import './newCardStyle.css';
import { MyContext } from '../../context/myContext';

export const NewCardComponent = (  ) => {

    const { setRoutesList, routesList } = useContext(MyContext)

    const [ inputsClient, setInputsClient ] = useState({}); //este estado crea un objeto temporal y sus propiedades cambian dependiendo del input con el cual se interactue

    const [ directionaAbbrevi, setDirectionaAbbrevi ] = useState('CRR'); //estado usado en un placeholder y para crear una propiedad que hace parte del objeto que pasara a routeList

    const [showMoreOptions, setShowMoreOptions] = useState( false ); //estado encargado de mostrar u ocultar los inputs adicionales
    
    
    const onChangeClientData =  ( { target } )=>{

        switch(target.id){

            case 'direcType' : setInputsClient({...inputsClient, direcType : target.value});break;

            case 'num' : setInputsClient({...inputsClient, num : target.value });break;

            case 'optionalData': setInputsClient({...inputsClient, directionComplementClient : target.value  }) ;break;

            case 'phone' : setInputsClient({...inputsClient, phoneClient : target.value});break;

            case 'clientname' : setInputsClient({...inputsClient, clientName : target.value});break;

            case 'otherPhone' : setInputsClient({...inputsClient, altPhoneClient : target.value});break;

            case 'hour' : setInputsClient({...inputsClient, deliveryHourClient : target.value});break;

            case 'leaveInEntry' : setInputsClient({...inputsClient, leaveInEntryClient : target.value});break;

            case 'freeText' : setInputsClient({...inputsClient, freeInfoClient : target.value });break;

            case 'email' : setInputsClient({...inputsClient, emailClient : target.value });break

        }


    };

    const cleanInputs = ()=>{

        document.querySelector('#direcType').value = '';

        document.querySelector('#num').value = '';

        document.querySelector('#phone').value = '';
        
        document.querySelector('#clientname').value = '';

        document.querySelector('#optionalData').value = '';

        document.querySelector('#email').value = '';

        inputsClient.altPhoneClient && (document.querySelector('#otherPhone').value = '');

        inputsClient.deliveryHourClient && (document.querySelector('#hour').value = '');

        inputsClient.leaveInEntryClient && (document.querySelector('#leaveInEntry').value = '');

        inputsClient.freeInfoClient && (document.querySelector('#freeText').value = '');
       
        // los ultimos 4 elementos usan una condicional ya que pueden o no existir dependiendo de si el usuario los creo al dar click en " Más opciones... "
    };

    const onSubmitAddClient = ( e )=>{

        e.preventDefault();

        const generateId = Math.floor(Math.random()*1000);

    
        setRoutesList([...routesList,{

            //la propiedad directionClient concatena las propiedades direcType y num del estado inputClient
            //la propiedad num antes de concatenarse verifica si comienza con el simbolo #, si no lo tiene lo agrega

            directionClient: `${directionaAbbrevi} ${ inputsClient.direcType} ${!inputsClient.num.startsWith('#')? '#'+ inputsClient.num :
                                inputsClient.num}`,
            nameClient: inputsClient.clientName,
            phoneClient: inputsClient.phoneClient,
            altPhoneClient: inputsClient.altPhoneClient,
            deliveryHourClient: inputsClient.deliveryHourClient,
            leaveInEntryClient: inputsClient.leaveInEntryClient,
            freeInfoClient: inputsClient.freeInfoClient,
            directionComplementClient : inputsClient.directionComplementClient,
            emailClient: inputsClient.emailClient,
            idClient:  generateId,

        } ])

        cleanInputs()
        setInputsClient({})

    };

  return (
    <>
        <form onSubmit = { (e)=> onSubmitAddClient(e)} className='formContainer'  id='formu'>

            <section className='directionInputs'>

                <label htmlFor = 'options' />

                <select id ='options' onChange = { (e)=> setDirectionaAbbrevi(e.target.value) }>

                    <option value='CRR'> Carrera </option>
                    <option value='CLL'> Calle </option>
                    <option value='CQ'> Circular </option>
                    <option value='DG'> Diagonal </option>
                    <option value='TV'> Transversal </option>

                </select>

                <input  type='text' 
                        placeholder = { directionaAbbrevi } 
                        onChange = { onChangeClientData } 
                        id='direcType' 
                        required/>

                <input  type='text' 
                        placeholder='Numero' 
                        onChange = { onChangeClientData } 
                        id='num' 
                        required/> 

                <input  type='text' 
                        placeholder='Int, Ap, Piso etc... (OPCIONAL)' 
                        onChange={ onChangeClientData } 
                        id='optionalData'/>

            </section>


            <section className='moreOptionsContainer'>

                <input  type='text' 
                        placeholder='Teléfono del cliente (OPCIONAL)' 
                        onChange = { onChangeClientData } 
                        id='phone' />

                <input  type='text' 
                        placeholder='Nombre del cliente (OPCIONAL)' 
                        onChange = { onChangeClientData } 
                        id='clientname'/>

                <input  type='text'  
                        placeholder='Correo electronico del cliente (OPCIONAL)'
                        onChange = { onChangeClientData } 
                        id='email'/> 

                {showMoreOptions?   <input type='text'  
                                        placeholder='Télefono secundario (OPCIONAL)' 
                                        className= { 'moreOptions'}
                                        onChange = { onChangeClientData }
                                        id = 'otherPhone'/>
                                    :null }

                {showMoreOptions?   <input type='text'  
                                        placeholder='Horario de entrega (OPCIONAL)' 
                                        className= { 'moreOptions'}                                        
                                        onChange = { onChangeClientData }
                                        id = 'hour'/>
                                    :null }

                {showMoreOptions?   <input type='text'  
                                        placeholder='Dejar en porteria?  si/no(OPCIONAL)' 
                                        className= { 'moreOptions'}                                        
                                        onChange = { onChangeClientData }
                                        id = 'leaveInEntry'/>
                                    :null }

            </section>

            {showMoreOptions?   <textarea   className='freeWrite' 
                                            placeholder='Escriba aquí otros detalles que quiera especificar (OPCIONAL)'
                                            onChange = { onChangeClientData }
                                            id = 'freeText'/>
                                :null }
                                            
        </form>
        
        <button onClick={()=> setShowMoreOptions(!showMoreOptions)} className='moreOptionsButton'> Más opciones... </button>

        <div className='buttonContainer'>
            <button className='addNewRouteButton' type='submit' form='formu'> Agregar </button>
        </div>
    </>
  )
}
