import React from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
   isAuth: state.auth.isAuthed,
 });

export const withAuthRedirect = (Component) =>{
   class RedirectComponent extends React.Component{
      render (){
         if(this.props.isAuth !== 0) return <Redirect to='/login'/>
         return <Component {...this.props}/>
      }
   }  
   
   let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
   return ConnectedAuthRedirectComponent;
}