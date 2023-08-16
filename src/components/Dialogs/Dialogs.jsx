import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import DialogsForm from './DialogsForm';

const Dialogs = (props) => {
	const {dialogData, messagesData} = props.dialogState;
	const newMessage = messagesData.map((item) => <Message mes={item.mes} key={item.id} />);
	const newDialog = dialogData.map((item) => (
		<DialogItem name={item.name} id={item.id} key={item.id} />
	));

	const submitDialogs = (data) => {
		props.addMessageActionCreator(data.dialogs);
	};

	return (
		<div className={` d-flex `}>
			<div className={`col-4 ${css.dialogs}`}>{newDialog}</div>

			<div className={'col-8'}>
				<div className={css.messages}>{newMessage}</div>
				<DialogsForm onSubmit={submitDialogs} />
			</div>
		</div>
	);
};

export default Dialogs;
