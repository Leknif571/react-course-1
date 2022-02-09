import { Draggable } from 'react-beautiful-dnd';
import { Delete_card_action } from '../Store/FunctionReducers/listReducers';
import { StoreList } from '../Store/store';


interface card{
  id: number,
  title: String,
  description: String,
  pos: number,
  index:number,
  wListId:number
} 
function deleteCard(id:number, idl:number){
  StoreList.dispatch({type:Delete_card_action,index:idl, payload:id})
}
export var Card = (card:card):any =>{
    const idDrag = card.id.toString()+'-'+card.wListId.toString()
    return(
      <Draggable draggableId={idDrag} index={card.index} >
      {(provided)=>(
      <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                <div className="card card-wh">
                <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <h5 className="card-title"></h5>
                    <p className="card-text">{card.description}</p>
                    <button className="btn btn-danger" onClick={()=>deleteCard(card.id,card.wListId)}>Delete</button>
                </div>
                </div>  
      </div> 
      )}
      </Draggable>
    )
}

 