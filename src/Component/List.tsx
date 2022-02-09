import { connect } from 'react-redux';
import React from 'react';
import {Card} from './Card';
import { useSelector } from 'react-redux';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';


interface card{
  id: number,
  title: String,
  description: String,
  pos: number
}

interface Props {
  id: number,
  title: String,
  card: Array<card>;
}


export const List = (list:Props) => {
  // let card = useSelector((store:any) => store.cardred)
  console.log(list.card);
  
    return(
    
      <Droppable droppableId={list.id.toString()}>
        {(provided)=>(
          <div className='content-col' {...provided.droppableProps} ref={provided.innerRef}>                     
              <h3>{list.title}</h3>
                  {list.card.map(     
                    ({id, title, description, pos}:card, index:number) => 
                        <Card id={id} title={title} description={description} pos={pos} index={index} wListId={list.id}/>                
                  )} 
                  {provided.placeholder}
          </div>
          )}
      </Droppable> 
  
    )
  }

  interface StateProps{
    id:number,
    title:string,
    card: Array<card>;
  }

  const mapStateToProps = (state:any):StateProps => ({
    id: state.list.id,
    title: state.list.title,
    card: state.list.card
  });


export default connect(mapStateToProps)(List);