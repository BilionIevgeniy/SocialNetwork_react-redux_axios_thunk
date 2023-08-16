import React from 'react';
import css from './LoginPage.module.css';
import {
	required,
	minLength,
	maxLength,
  } from "../../utils/validators/validators";
import {Input} from '../common/FormControls/FormsControls';
import { Field } from 'redux-form';

const minLength2 = minLength(2);
const maxLength15 = maxLength(15);

let LoginForm = (props) => {
	const { handleSubmit } = props;
	const {error} = props;
	console.log('error',error);
	return (
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

      {error 
      ? 
      <div className={css.formSunmmaryError}>
            {error}
      </div>
      : null }
      
      <div>
        <button className="btn btn-primary">Login</button>{" "}
      </div>
    </form>
	);
};

export default LoginForm;
