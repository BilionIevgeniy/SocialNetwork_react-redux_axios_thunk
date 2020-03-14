import React from 'react';
import css from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = ({id,name})=>{
    return(
        <div className={`${css.dialog}  ${css.active}`}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )

};

export default DialogItem;