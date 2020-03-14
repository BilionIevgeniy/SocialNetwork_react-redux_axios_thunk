import React from 'react';
import { Route} from "react-router-dom";

import css from './App.module.css';
import Header from '../header/Header';
import Nav from '../nav/Nav';
import Dialogs from '../Dialogs/Dialogs';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import News from '../News/News';
import Profile from '../profile/Profile';


const App = (props) => {
   
    return (
          <div className={`${css.wrapColor} d-flex align-items-stretch`}>
            <div className={`container`}>
              <div className={css.app_wrapper}>
                <Header/>
                <Nav/>
                <div className={`${css.content_wrapper}`}>
                  <Route path='/dialogs' render={()=> <Dialogs  state={props.store.getState()} dispatch = {props.store.dispatch.bind(props.store)}/>}/>
                  <Route path='/profile' render={()=> <Profile state={props.store.getState()} dispatch = {props.store.dispatch.bind(props.store)}   />}/>
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
