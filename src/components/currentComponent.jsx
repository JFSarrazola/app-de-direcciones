import { useState } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";

import { MyProvider } from '../context/myProvider';
import { NavBar } from './navBarFolder/navBar';
import { CardListComponent } from './cardListFolder/cardListComponent';
import { NewCardComponent } from './createCardFolder/newCardComponent';
import { CompletedCardsComponent } from './completedCardsFolder/completedCardsComponent';
import { TrashedCards } from './cardsTrashedFolder/trashedCards';
import { MoreClientData } from './moreClientDataFolder/moreClientData';

import '../styles/homeStyle.css'


//CADA COMPONENTE USA ESTADOS USADOS POR UN PROVIDER, MIRAR ESTOS ESTADOS EN "context/myProvider.jsx"

export const CurrentComponent = () => {
  
  const [ showMore, setShowMore ] = useState( false ); //este estado varia entre true y false para crear o "eliminar" el componente MoreClientData

  return (
    <MyProvider>

      <NavBar/>

      
      <Routes>

        <Route path = "home" element = { 

          <CardListComponent setShowMore={ setShowMore }/> }>

        </Route>



        <Route path = "newRoute" element = { 

          <NewCardComponent/> }>

        </Route>



        <Route path = "completed" element = { 

          <CompletedCardsComponent  setShowMore = { setShowMore }/> }>

        </Route>



        <Route path = "trash" element = { 

          <TrashedCards setShowMore = { setShowMore }/> }>

        </Route>


        <Route path = "*" element = { <Navigate to = "home" ></Navigate> }></Route>

      </Routes>

      { showMore ? <MoreClientData setShowMore = { setShowMore }/>:null}

                                     
    </MyProvider>
     
  )
}
