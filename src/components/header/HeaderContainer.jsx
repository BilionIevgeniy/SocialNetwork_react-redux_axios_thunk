import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthedUserThCr } from '../../redux/auth-reducer';



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

export default connect(mapStateToProps,setDispatch)(HeaderContainer);