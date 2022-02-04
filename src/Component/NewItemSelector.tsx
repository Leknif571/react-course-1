import { title } from 'process';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {Card} from './Card';


import {Modal} from './ModalList';

import {ModalBis} from './ModalCard';

function saMarche(){
    alert('ca marche');
}

function NewItemSelector() {
    // const [isOpen,setIsOpen] = useState(false);
    const list = useSelector((store:any) => store.listred)
    return(
      <div>
       {/* <button className='btn btn-success m-2' type="submit"  onClick={() => setIsOpen(true)}>New Liste</button>
       <button className='btn btn-success' type="submit"  onClick={saMarche}>New Card</button> */}

        
          <Modal addList={list}/>
          <ModalBis addCard={list}/>
        
       

      </div>
    )
  }

  export {NewItemSelector};