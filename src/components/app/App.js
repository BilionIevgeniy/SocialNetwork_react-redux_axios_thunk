import React from 'react';
import { Route, withRouter} from "react-router-dom";

import css from './App.module.css';
import HeaderComponent from '../Header/HeaderContainer';
import Nav from '../Nav/Nav';
import DialogsContainer from '../Dialogs/Dialogs-container';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import News from '../News/News';
import ProfileContainer from '../Profile/ProfileContainer';
import UsersContainer from '../Users/Users-container';
import LoginPage from '../LoginPage/LoginPage';

import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from '../common/Preloader/Preloader';
import { initializeAppThCr } from '../../redux/app-reducer';



class App  extends React.Component {
    componentDidMount(){
      this.props.initializeAppThCr()
    }

    render(){
      return (this.props.initialized === true ? (
        <div className={`${css.wrapColor} d-flex align-items-stretch`}>
          <div className={`container`}>
            <HeaderComponent/>
            <div className={css.app_wrapper}>
              <Nav/>
              <div className={`${css.content_wrapper}`}>
                
                <Route path='/dialogs' render={()=> <DialogsContainer/>}/>
                <Route path='/profile/:userId?' render={()=>   <ProfileContainer/>}/>
                <Route path='/users' render={()=> <UsersContainer/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/login' component={LoginPage}/>
                <Route exact path='/' component={ProfileContainer}/>
              </div>
            </div>
          </div>
        </div>
      ) :
       (<Preloader/>) )
    }
      
       
    
};

const mapStateToProps =(state)=>{
  return{
    initialized : state.app.initialized
  }
}



export default compose(
  connect(mapStateToProps,{initializeAppThCr}),
  withRouter)(App)



