import React, { useState } from 'react';
import {Card} from './Card';

import Modal from './ModalList';


function sayHello(){
    alert("Weash bien ou bien ");
}
function sayEaster(){
    alert('ca marche continue');
}

function NewItemSelector() {
    const [isOpen,setIsOpen] = useState(false);
    return(
      <div>
       <button className='btn btn-success m-2' type="submit"  onClick={() => setIsOpen(true)}>New Liste</button>
       <button className='btn btn-success' type="submit"  onClick={sayEaster}>New Card</button>

       {isOpen && <Modal/>}
      </div>
    )
  }

  export {NewItemSelector};