import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk"
import { reducer as formReducer } from 'redux-form'


//create like state in store
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    navbarPage: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});


let store = createStore(reducers,applyMiddleware(thunkMiddleWare));

window.store = store;


export default store;