const ADD_MESS = 'ADD-MESS';
const UPD_MESS = 'UPD-MESS';
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
    ],
    messegaText: "add message"
}

export const dialogsReducer = (state= dialogPage,action)=>{

   switch(action.type){

      case  UPD_MESS :
          state.messegaText = action.newText;
          break;

      case ADD_MESS :
          
          let newMess = {
              id: messiD++,
              mes: state.messegaText
          };
          state.messagesData.push(newMess);
          state.messegaText='';
          ++messiD;
          return state;
      


          default: 
          return state;
  }
}
export let addMessActionCreator = ()=>({type:ADD_MESS});
export let updMessActionCreator = (text)=>({type:UPD_MESS, newText : text});

export default dialogsReducer