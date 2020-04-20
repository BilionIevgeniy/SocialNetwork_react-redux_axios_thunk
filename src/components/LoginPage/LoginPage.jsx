import React from "react";
import { connect } from "react-redux";

import { reduxForm, Field } from "redux-form";
import {
  required,
  minLength,
  maxLength,
} from "../../utils/validators/validators";
import { Input } from "../common/FormControls/FormsControls";
import { logInUserThCr } from "../../redux/auth-reducer";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { Redirect } from "react-router-dom";

const minLength2 = minLength(2);
const maxLength15 = maxLength(15);

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    // отменяем действие сабмита
    <form onSubmit={handleSubmit}>
      <div>
        <div className="form-group">
          <Field
            className="form-control"
            validate={[required, minLength2]}
            type="text"
            name={"login"}
            component={Input}
            placeholder={"Email"}
          />
        </div>

        <div className="form-group">
          <Field
            validate={[required, minLength2, maxLength15]}
            type="password"
            name={"password"}
            component={Input}
            className="form-control"
            placeholder={"Password"}
          />
        </div>

        <div className="form-group">
          <div style={{ display: "inline-block", marginRight: "10px" }}>
            <Field
              className="form-check-label"
              type="checkbox"
              name={"rememberMe"}
              component={Input}
              id="exampleCheck1"
            />
          </div>

          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember Me
          </label>
        </div>
      </div>

      <div>
        <button className="btn btn-primary">Login</button>{" "}
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  // a unique identifier for this form
  form: "login",
})(LoginForm);

const LoginPage = (props) => {

  const onSubmit = ({ login, password, rememberMe }) => {
    props.logInUserThCr(login, password, rememberMe);
  };

  return (
    <>
      {props.isAuth === true ? (
        <Redirect to="/profile" />
      ) : (
        <>
          <h1>Login</h1>
          <LoginReduxForm onSubmit={onSubmit} />
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

export default connect(mapState, { logInUserThCr })(LoginPage);
