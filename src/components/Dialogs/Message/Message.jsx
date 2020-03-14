import React from 'react';
import css from './Message.module.css'



const Message = ({mes}) =>{
    return(
        <div className={css.message}>
            {mes}
        </div>
    )
};

export default Message;