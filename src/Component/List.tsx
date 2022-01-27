import React, { useState } from 'react';
import {Card} from './Card';
import {ListToExport} from './ModalList'

// const Liste = [{'title':'liste 1', 'id':1}, {'title':'liste 2', 'id':2}, {'title':'liste 3', 'id':3}]

function List() {
    const [ListAdd, setOnList] = useState([{}]);

    const addOnList = () =>{
      setOnList([...ListToExport]);
    }
     
       
    return(
    
      <div>
          
          <div className="row align-items-center">
        {ListAdd.map(function(data:any){
          console.log(data); 
            return(
          <div className='col content-col'>
            <button onClick={()=>addOnList()}>refresh</button>
              <div className='row'>                
                  <h3>{data.title}</h3>
                  <Card id = {data.id}/>
              </div>
          </div>   
        )})}
          {/* <div className='col content-col'>
              <div className='row'>    
                  <h3>Mes premières listes</h3>
                  <Card/>
              </div>
          </div> */}
        </div>
   
      </div>
    )
  }

  export {List};