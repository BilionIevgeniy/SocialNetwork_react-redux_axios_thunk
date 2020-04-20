import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthedUserThCr } from '../../redux/auth-reducer';
import { compose } from 'redux';



class HeaderContainer extends React.Component {
   componentDidMount(){
      this.props.setAuthedUserThCr()
   }
   render(){
      return <Header {...this.props} />
   }
}
let mapStateToProps = (state)=>({
   auth: state.auth
})

let setDispatch ={
   setAuthedUserThCr
}

export default compose(
   connect(mapStateToProps,setDispatch))
   (HeaderContainer)