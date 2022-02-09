// const Card = [{id:0, title:'card1', description:"description1",pos:1 },{id:1, title:'card1', description:"description1",pos:1 }]
const Liste = [{title:'Liste 1', card:[], id:0}];


export const Add_list_action = "Add_list_action";
export const Add_card_action = "Add_card_action";
export const Delete_list_action = "Delete_list_action";
export const Delete_card_action = "Delete_card_action";
export const Move = "Move";


interface Card{
    id: number,
    title: String,
    description: String,
    pos: number,
}
interface list{
    title:String,
    card: Array<Card>,
    id: number,
}


export function ListReducer(state:Array<list> = Liste, action:any){

    switch(action.type){
        case Add_list_action:
   
            return [...state,{...action.payload, id:(state.length-1)+1,} ]

        case Delete_list_action:
            return [...state,{...action.payload, id:state.length+1,} ]

        case Move:
            let newArrayM = state.slice();
            let id = 0;
            let cardMem = newArrayM[action.source].card.filter((element:Card) => element.id == action.idCard);
            newArrayM[action.source].card = newArrayM[action.source].card.filter((element:Card) => element.id != action.idCard);
            // newArrayM[action.destination].card.map((e:list)=>{
            //     id++;
            //     e.id = id;
            // } )
            // cardMem[0].id = newArrayM[action.destination].card.length;
            newArrayM[action.destination].card = [...newArrayM[action.destination].card, cardMem[0]];
            
            return newArrayM;
    
        case Add_card_action:   

        let newArray = state.slice()
        newArray[action.index].card.splice(0, 0, action.payload)
        return newArray

        case Delete_card_action:   
        let newArrayD = state.slice();
        newArrayD[action.index].card = newArrayD[action.index].card.filter((element:Card) => element.id !== action.payload);
        // newArrayD[action.index].card.slice(0,action.payload).concat(newArrayD[action.index].card.slice(action.payload+1))
        // newArrayD[action.index].card.splice(action.payload);
        return newArrayD


        default:
            return state
        } 
}
