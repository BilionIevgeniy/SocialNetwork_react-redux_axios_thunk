import Dialogs from "./Dialogs";
import {  addMessActionCreator,updMessActionCreator} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps= (state)=>{
    return {
      dialogState : state.dialogPage,

    }  
  }

let setDispatch={
    updMessActionCreator,
    addMessActionCreator
  }
  
  
const DialogsContainer = connect(mapStateToProps,setDispatch)(Dialogs);

export default DialogsContainer;
