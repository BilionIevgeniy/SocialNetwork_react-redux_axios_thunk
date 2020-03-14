import React ,{createRef} from 'react';
import css from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessActionCreator,updMessActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    const{dialogData, messagesData,messegaText}= props.state.dialogPage;
    let comentRef = createRef();
    

    let newMessage = messagesData.map((item)=> <Message mes={item.mes} key={item.id}/>);
    let newDialog = dialogData.map((item)=><DialogItem name={item.name} id={item.id} key={item.id}/>);

    let onChange = (e)=>{
        let text = e.target.value;
        props.dispatch(updMessActionCreator(text))
    }

    let addComment = ()=>{
        props.dispatch(addMessActionCreator())
    };

    return (
        <div className={` d-flex `}>

            <div className={`col-4 ${css.dialogs}`}>
                {newDialog}
            </div>

            <div className={'col-8'}>
                <div className={css.messages}>
                    {newMessage}
                </div>
                <textarea onChange={onChange} ref={comentRef} value={messegaText} />
                <button onClick={addComment} className={`btn btn-primary`}>Add comment</button>
            </div>

        </div>
    )
};
export default Dialogs;