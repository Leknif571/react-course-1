import React from 'react';
import { connect } from 'react-redux';



interface card{
  id: number,
  title: String,
  description: String,
  pos: number
} 

function dragStartHandler():void{

}

export const Card = (card:card) =>{
    return(
       
      <div draggable="true" onDragStart={()=>dragStartHandler()}>
                <div className="card card-wh">
                <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <h5 className="card-title"></h5>
                    <p className="card-text">Description</p>
                    <a href="#" className="btn btn-danger">Delete</a>
                </div>
                </div>  
      </div> 
    )
  }


  interface StateProps{
    card: Array<card>
  }

  const mapStateToProps = (state: any):StateProps => ({
    card: state.list.card
  });


export default connect(mapStateToProps)(Card);

 