const ADD_MESS = 'ADD-MESS';

let messiD = 7;

let dialogPage =  {
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
    ]
}

export const dialogsReducer = (state = dialogPage,action)=>{
   switch(action.type){

      case ADD_MESS :
          return {
            ...state,
            messagesData : [...state.messagesData, { id: messiD++, mes: action.text}]
          };

          default: 
          return state;
  }
}
export let addMessageActionCreator = (text)=>({type:ADD_MESS, text});


export default dialogsReducer