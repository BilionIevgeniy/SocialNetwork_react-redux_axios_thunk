import React from "react";
import { connect } from "react-redux";
import { logInUserThank } from "../../store/auth-reducer";
import { Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";


const LoginPage = (props) => {
  const onSubmit = ({ login, password, rememberMe }) => {
    props.logInUserThank(login, password, rememberMe);
  };

  return (
    <>
      {props.isAuth === true ? (
        <Redirect to="/profile" />
      ) : (
        <>
          <h1>Login</h1>
          <LoginForm onSubmit={onSubmit} />
        </>
      )}
    </>
  );
};

const mapState = (state) => {
  return {
    isAuth: state.auth.isAuthed,
  };
};

export default connect(mapState, { logInUserThank })(LoginPage);
