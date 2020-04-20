import navbarReducer from "./navbar-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        
    },

    _renderTree:  {},

    subscribe(observer){
        this._renderTree = observer;
    },
    
    getState(){
        return this._state
    },


    dispatch(action){
        this._state.dialogPage = dialogsReducer(this._state.dialogPage,action);
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        navbarReducer();
        
        this._renderTree(this);
        
    }
   
};



export default store;

