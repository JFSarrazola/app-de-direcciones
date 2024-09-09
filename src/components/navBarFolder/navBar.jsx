import { NavLink, useLocation } from 'react-router-dom'

import './navBarStyle.css';

import navbarDeco_List from '../../data/images/navbarDeco_List.jpg';
import navbarDeco_complete from '../../data/images/navbarDeco_complete.jpg';
import navbarDeco_add from '../../data/images/navbarDeco_add.jpg';
import navbarDeco_Trash from '../../data/images/navbarDeco_Trash.jpg';

import { useEffect, useState } from 'react';



export const NavBar = () => {

  const [navImgHander, setNavImgHander] = useState(); 

  //este estado decide que imagen del navBar se debe renderizar, para decidir cual imagen cargar se utiliza "&&" para verificar
  //si la venta esta activa o no 

  const myLocation = useLocation();
  
  useEffect(() => { 

    switch(myLocation.pathname){

      case '/home' : setNavImgHander(navbarDeco_List);break;
      case '/newRoute' : setNavImgHander(navbarDeco_add);break;
      case '/completed' : setNavImgHander(navbarDeco_complete);break;
      case '/trash' : setNavImgHander(navbarDeco_Trash);break;

    }
    
  }, [myLocation.pathname])
  
  
  return (
    <>
      <div className='navBarContainer'>

        <div className = 'myNavBar'>

          <NavLink  className = { ({isActive})=> {
                                  return `navLink ${ isActive ? 'myRoutesOn':'myRoutesOff'}`}} 

                    to='/home'> Mis rutas </NavLink>

          <NavLink  className = { ({isActive})=> {
                                  return `navLink ${ isActive ? 'newRouteOn':'newRouteOff'}`}} 
                                  
                    to='/newRoute'> Agregar nueva ruta </NavLink>

          <NavLink  className = { ({isActive})=> {
                                  return `navLink ${ isActive ? 'completedRouteOn':'completedRouteOff'}`}} 

                    to='/completed'> Rutas completadas </NavLink>

          <NavLink  className = { ({isActive})=> {
                                  return `navLink ${ isActive ? 'trashRoutesOn':'trashRoutesOff'}`}} 

                    to='/trash'> Papelera </NavLink>

        </div>

        <img src = { navImgHander } alt='imagen de navbar' className='imageNavBar'/>

      </div>
    </>


  )
}
