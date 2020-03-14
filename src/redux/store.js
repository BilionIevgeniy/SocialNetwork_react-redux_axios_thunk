import navbarReducer from "./navbar-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1,  likeCount: '10',  text: 'First post'},
                {id: 2,  likeCount: '3',  text: 'Second post'},
                {id: 3,  likeCount: '4',  text: 'Third post'},
                {id: 4,  likeCount: '10',  text: 'Firth post'}
            ],
            postText: 'add Text',
        },
        dialogPage: {
            dialogData: [
                {id: 1,name: 'Dima'},
                {id: 2,name: 'Katia'},
                {id: 3,name: 'Oleg'},
                {id: 4,name: 'Serega'},
                {id: 5,name: 'Sveta'},
                {id: 6,name: 'Igor'}
            ],
            messagesData: [
                {id: 1, mes: '1w'},
                {id: 2, mes: '2w'},
                {id: 3, mes: '3w'},
                {id: 4, mes: '4w'},
                {id: 5, mes: '5w'},
                {id: 6, mes: '6w'}
            ],
            messegaText: "add message"
        },
        
    },

    _renderTree() {},

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
window.store = store;
