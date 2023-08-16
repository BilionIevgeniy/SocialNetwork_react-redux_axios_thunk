import React from 'react'
import {reduxForm, Field} from 'redux-form';
import {required, minLength, maxLength} from '../../utils/validators/validators';
import {Textarea} from '../common/FormControls/FormsControls';


const minLength2 = minLength(2);
const maxLength15 = maxLength(15);

let DialogsForm = (props) => {
	const {handleSubmit} = props;
	return (
		<form onSubmit={handleSubmit}>
			<Field
				className="form-control form-group"
				validate={[required, minLength2, maxLength15]}
				name={'dialogs'}
				component={Textarea}
				ref={props.comentRef}
				placeholder="add massage"
			/>
			<button className={`btn btn-primary`}>Add comment</button>
		</form>
	);
};

export default DialogsForm = reduxForm({
	// a unique identifier for this form
	form: 'dialogs',
})(DialogsForm);