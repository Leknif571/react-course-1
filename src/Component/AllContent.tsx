import { List } from './List';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NewItemSelector } from './NewItemSelector';
import { useSelector } from 'react-redux';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { Move } from '../Store/FunctionReducers/listReducers';
import { StoreList } from '../Store/store';


const dragEnd = (result: DropResult) =>{
   const {source, destination} = result

  if (result.reason === "DROP") {
    if (!result.destination) {
      return;
    }
  }

  console.log(result.draggableId.split('-')[0]);
  console.log(typeof(source.droppableId));
  console.log(destination?.droppableId);

  StoreList.dispatch({type:Move, source: parseInt(source.droppableId), destination: destination?.droppableId, idCard: result.draggableId.split('-')[0] })


}

function AllContent() {
  const list = useSelector((store:any) => store.listred)
  console.log(list);
    return(
      <DragDropContext onDragEnd={dragEnd}>
      <div>
        <div className='app-component '>
          <div className='text-center'>
           <h1 className='title'>To-Do</h1>
          </div>
          <NewItemSelector/>
        <div >
         <div className="overf">
          {list.map(
            ({id, title, card}:any) =>
            <List id={id} title={title} card={card}/>
          )}

          

          </div>
        </div>
        </div>
      </div>
     </DragDropContext>
      
    )
  }

  export default AllContent;