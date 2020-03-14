import React from 'react';
import css from './Header.module.css'

const Header = () => {
   return  (
   <header className={`${css.header} `}>
      <img className={`rounded-circle`} src="https://aer.eu/wp-content/uploads/2017/06/twitter-logo-4.png" alt=""/>
   </header>)
}
export default Header;