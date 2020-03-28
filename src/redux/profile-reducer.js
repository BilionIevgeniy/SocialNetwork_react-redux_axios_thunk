const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';

let postiD = 5;
let initislState = {
    postData: [
        {id: 1,  likeCount: '10',  text: 'First post'},
        {id: 2,  likeCount: '3',  text: 'Second post'},
        {id: 3,  likeCount: '4',  text: 'Third post'},
        {id: 4,  likeCount: '10',  text: 'Firth post'}
    ],
    postText: 'add Text',
}

const profileReducer = (state = initislState,action)=>{

   switch(action.type){

      case ADD_POST :
        return {
            ...state,
            postData : [...state.postData,{id: postiD++,likeCount: '15',text: state.postText}],
            postText: ''
         };
          
          

      case  UPDATE_TEXT :
        return {
            ...state,
            postText: action.newText
         };
           

          default: 
          return state;

  }

}
export let addPostActionCreator = ()=>({ type : ADD_POST});
export let addTextActionCreator = (text)=>({type:UPDATE_TEXT, newText : text});


export default profileReducer