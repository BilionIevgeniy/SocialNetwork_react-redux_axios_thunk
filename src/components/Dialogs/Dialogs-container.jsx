
import Dialogs from "./Dialogs";
import { addMessageActionCreator } from "../../store/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    dialogState: state.dialogPage
  };
};

let setDispatch = {
  addMessageActionCreator
};



export default compose(
    connect(mapStateToProps,setDispatch),
    withAuthRedirect
  )(Dialogs)
    