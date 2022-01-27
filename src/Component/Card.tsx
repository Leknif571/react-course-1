import React from 'react';

const nbcard = [{'title':'card1', 'id':3}, {'title':'card2', 'id':1}, {'title':'card3', 'id':2}];

function Card(id:any) {
    return(
      <div>
    {
    nbcard.map((data) => {
  
          if(data.id == id.id){
              console.log(id);
            return(
                <div className="card card-wh">
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <h5 className="card-title"></h5>
                    <p className="card-text">Description</p>
                    <a href="#" className="btn btn-danger">Delete</a>
                </div>
                </div>
                )
            }})}
      </div>
    )
  }

  export {Card};