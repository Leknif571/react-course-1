import { addListener, title } from "process";
import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { List } from "./List";
import { StoreList } from '../Store/store';
import { ListReducer } from "../Store/FunctionReducers/listReducers";
import { Add_list_action } from '../Store/FunctionReducers/listReducers';
import { connect } from "react-redux";
import { stat } from "fs";


export let ListToExport:any = [0]


interface Props{
    addList: typeof action.addList;
}

//export const Liste = [{'title':'liste 2', 'id':1}, {'title':'liste 3', 'id':2}, {'title':'liste 4', 'id':3}]
const action = {
    addList: () => Add_list_action,
}


// const mapDispatchToProps = (dispatch: any):DispatchProps => ({
    
//     ...bindActionCreators({
//         ...action,
//     }, dispatch)
//   });


function test(state:string){
  StoreList.dispatch({type:Add_list_action,payload:{title:state, card:[]}})
  console.log('etape suivante...');
  console.log(Add_list_action);


}


export const Modal = (props:Props) => {
  const [state,setState] = useState('');
  return (
    <div>
        <h1 className="heading">Nom de la liste</h1>
        <input type="text" id="listAdd" value={state} onChange={(e) => setState(e.target.value)}/>
        <button className="btn btn-success" onClick= {() => test(state)}>Valider</button>
    </div>
  );
};

// export default connect(mapDispatchToProps)(Modal);