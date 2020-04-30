import React from 'react';
import css from './Header.module.css'
import { NavLink } from 'react-router-dom';


const Header = (props) => {
   const logOut = ()=>{
      props.logOutThCr()
   }
   return  (
   <header className={`${css.header} `}>
      <img className={`rounded-circle`} src="https://aer.eu/wp-content/uploads/2017/06/twitter-logo-4.png" alt=""/>
      <div className={css.headerButton}>
         {props.auth.isAuthed   
         ? 
         <button onClick={logOut} className={`btn btn-primary`}>Log Out</button>  
         : 
         <NavLink to='/login'><button className={`btn btn-primary`}> Log In </button></NavLink>}
      </div>
   </header>)
}

export default Header;