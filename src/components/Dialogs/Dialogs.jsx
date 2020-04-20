import React from "react";
import css from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { reduxForm, Field } from "redux-form";
import { required, minLength, maxLength } from "../../utils/validators/validators";
import { Textarea } from "../common/FormControls/FormsControls";

const Dialogs = (props) => {
  const { dialogData, messagesData } = props.dialogState;

  const newMessage = messagesData.map((item) => (
    <Message mes={item.mes} key={item.id} />
  ));
  const newDialog = dialogData.map((item) => (
    <DialogItem name={item.name} id={item.id} key={item.id} />
  ));

  const minLength2 = minLength(2);
  const maxLength15 = maxLength(15);

  const DialogsForm = (props) => {
    const { handleSubmit } = props;
    return (
      <form  onSubmit={handleSubmit}>
        <Field
        className="form-control form-group"
          validate={[required, minLength2,maxLength15]}
          name={"dialogs"}
          component={Textarea}
          ref={props.comentRef}
          placeholder="add massage"
          
        />
        <button className={`btn btn-primary`}>Add comment</button>
      </form>
    );
  };

  const DialogsReduxForm = reduxForm({
    // a unique identifier for this form
    form: "dialogs",
  })(DialogsForm);

  const submitDialogs = (data) => {
    console.log(data.dialogs);
    props.addMessActionCreator(data.dialogs);
  };

  return (
    <div className={` d-flex `}>
      <div className={`col-4 ${css.dialogs}`}>{newDialog}</div>

      <div className={"col-8"}>
        <div className={css.messages}>{newMessage}</div>
        <DialogsReduxForm onSubmit={submitDialogs} />
      </div>
    </div>
  );
};
export default Dialogs;
