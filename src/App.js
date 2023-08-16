import React from "react";
import { Route, withRouter } from "react-router-dom";

import css from "./App.module.css";
import HeaderComponent from "./components/header/HeaderContainer";
import Nav from "./components/nav/Nav";
import DialogsContainer from "./components/Dialogs/Dialogs-container";
import Music from "./components/music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import ProfileContainer from "./components/profile/ProfileContainer";
import UsersContainer from "./components/Users/Users-container";
import LoginPage from "./components/login/LoginPage";

import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import { initializeAppThank } from "./store/app-reducer";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeAppThank();
  }

  render() {
    return this.props.initialized === true ? (
      <div className={`${css.wrapColor} d-flex align-items-stretch`}>
        <div className={`container`}>
          <HeaderComponent />
          <div className={css.app_wrapper}>
            <Nav />
            <div className={`${css.content_wrapper}`}>
              <Route path="/dialogs" render={() => <DialogsContainer />} />
              <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/news" component={News} />
              <Route path="/music" component={Music} />
              <Route path="/settings" component={Settings} />
              <Route path="/login" component={LoginPage} />
              <Route exact path="/" component={ProfileContainer} />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <Preloader />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default compose(
  connect(mapStateToProps, { initializeAppThank }),
  withRouter
)(App);
