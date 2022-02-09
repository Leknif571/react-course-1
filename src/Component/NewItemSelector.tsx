import BasicModal from './ModalTest';
import BasicModal2 from './ModalTest2';

function NewItemSelector() {
    return(
      <div className='row'>
          <div className='col-md-2'>
            <BasicModal/>
          </div>

          <div className='col-md-2'>
           <BasicModal2/> 
          </div>

          
          
      </div>
    )
  }

  export {NewItemSelector};