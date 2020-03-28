import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";



//create like state in store
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    navbarPage: navbarReducer,
    usersPage: usersReducer,
});


let store = createStore(reducers);

window.store = store;


export default store;