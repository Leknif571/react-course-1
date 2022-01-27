import React from 'react';
import { List } from './List';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NewItemSelector } from './NewItemSelector';


function AllContent() {
    return(
      <div>
        <div className='app-component'>
        <NewItemSelector/>
        <h1 className='text-center title'>TODO</h1>
        <List/>
        </div>
      </div>
      
    )
  }

  export default AllContent;