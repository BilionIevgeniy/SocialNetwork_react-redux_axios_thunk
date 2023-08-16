import React from 'react'
import { reduxForm, Field } from "redux-form";
import {
	required,
	minLength,
	maxLength,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormControls/FormsControls";

let SendPostForm = () => {
	const minLength2 = minLength(2);
	const maxLength15 = maxLength(15);
	
	
	let SendPostForm = ({ handleSubmit }) => {
	  return (
		<form onSubmit={handleSubmit}>
		  <Field
			className="form-control form-group"
			validate={[required, minLength2, maxLength15]}
			name="post"
			component={Textarea}
			placeholder="Add Post"
		  />
		  <button className="btn btn-primary">Add Post</button>
		</form>
	  );
	};
	
	

	return SendPostForm;
}

export default SendPostForm = reduxForm({
	form: "sendPost",
  })(SendPostForm);
