import React from 'react'
import Dialogs from "./Dialogs";
import {
  addMessActionCreator,
  updMessActionCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    dialogState: state.dialogPage
  };
};

let setDispatch = {
  updMessActionCreator,
  addMessActionCreator,
};



export default compose(
    connect(mapStateToProps,setDispatch),
    withAuthRedirect
  )(Dialogs)
    