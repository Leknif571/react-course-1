import React from 'react';
import { List } from './List';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NewItemSelector } from './NewItemSelector';
import { useSelector } from 'react-redux';
import { StoreList } from '../Store/store';


function AllContent() {
  const list = useSelector((store:any) => store.listred)
  console.log(list);
    return(
      <div>
        <div className='app-component '>
        <NewItemSelector/>
        <h1 className='text-center title'>TODO</h1>
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
     
      
    )
  }

  export default AllContent;