import { stat } from "fs";

const Card = [{id:1, title:'card1', description:"description1",pos:1 },{id:1, title:'card1', description:"description1",pos:1 }]
const Liste = [{title:'liste 2', card:Card, id:1}];


export const Add_list_action = "Add_list_action";
export const Add_card_action = "Add_card_action";
export const Delete_list_action = "Delete_list_action";
export const Delete_card_action = "Delete_card_action";

export function ListReducer(state:Array<any> = Liste, action:any){

    switch(action.type){
        case Add_list_action:
            return [...state,{...action.payload, id:state.length+1,} ]

        case Delete_list_action:
            return [...state,{...action.payload, id:state.length+1,} ]

        case Add_card_action:             
           return{ ...state,
                [0]: {
                    ...state[0].card,
               card :{...state[0].card[{...action.payload}]}
             }}
        default:
            return state
        } 
}