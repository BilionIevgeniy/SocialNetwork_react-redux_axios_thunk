// @flow
import  React from 'react';
import css from './Preloader.module.css'
import preloader from '../../../assets/images/Infinity-1s-200px.svg'

 const Preloader =  ()=>{
   
    return(
      <div className={css.img_wrapper}>
        <img className={css.preloader} src={preloader} alt='preloader'/>
      </div>
    )
 }

 export default Preloader;