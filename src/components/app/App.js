import React from 'react';
import { Route} from "react-router-dom";

import css from './App.module.css';
import HeaderComponent from '../header/HeaderContainer';
import Nav from '../Nav/Nav';
import DialogsContainer from '../Dialogs/Dialogs-container';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import News from '../News/News';
import ProfileContainer from '../profile/ProfileContainer';
import UsersContainer from '../Users/Users-container';


const App = () => {
   
    return (
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
                  </div>
                </div>
            </div>
          </div>     
    )
};

export default App;
