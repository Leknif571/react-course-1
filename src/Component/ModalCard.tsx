import React, { useState } from "react";
import { bindActionCreators } from "redux";

import { StoreList } from '../Store/store';
import { ListReducer } from "../Store/FunctionReducers/listReducers";
import { Add_card_action } from '../Store/FunctionReducers/listReducers';
import { connect } from "react-redux";



export let ListToExport:any = [0]


interface Props{
    addCard: typeof action.addCard;
}

//export const Liste = [{'title':'liste 2', 'id':1}, {'title':'liste 3', 'id':2}, {'title':'liste 4', 'id':3}]
const action = {
    addCard: () => Add_card_action,
}


// const mapStateProps = (dispatch: any):StatePorps => ({
    
//     ...bindActionCreators({
//         ...action,
//     }, dispatch)
//   });


function test(state:string){
  StoreList.dispatch({type:Add_card_action, payload:{ id:1, title:state, description:"test", pos:1 }})
  console.log('etape suivante...');
  console.log(Add_card_action);
}


export const ModalBis = (props:Props) => {
  const [state,setState] = useState('');
  return (
    <div>
        <h1 className="heading">Nom de la card</h1>
        <input type="text" id="listCard" value={state} onChange={(e) => setState(e.target.value)}/>
        <button className="btn btn-success" onClick= {() => test(state)}>Valider</button>
    </div>
  );
};

// export default connect(mapDispatchToProps)(Modal);