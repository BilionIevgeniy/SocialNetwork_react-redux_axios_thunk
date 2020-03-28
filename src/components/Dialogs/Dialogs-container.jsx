import Dialogs from "./Dialogs";
import {  addMessActionCreator,updMessActionCreator} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps= (state)=>{
    return {
      dialogState : state.dialogPage,

    }  
  }

let mapDispatchToProps= (dispatch)=>{
    return {
        onChange : (text)=>{
            dispatch(updMessActionCreator(text))
        } ,
        addComment : ()=>{
          dispatch(addMessActionCreator())
        }
    }
  }
  
  
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
