import { addListener, title } from "process";
import React, { useState } from "react";
import { List } from "./List";


export let ListToExport:any = [0]



    function addList():any{

    // let newList:string = document.getElementById('listAdd')?.textContent || 'null';
    // console.log('test');
    // console.log(newList);
    // useState<String>{
    //     Liste.push({'title':newList , 'id':Liste.length+1});
    // }
    
    // console.log(Liste);

    // setIsOpen(false);

}
//export const Liste = [{'title':'liste 2', 'id':1}, {'title':'liste 3', 'id':2}, {'title':'liste 4', 'id':3}]

const Modal = () => {


    const [Liste, setOnList] = useState([{}]);
    const [Name, setName] = useState(null);
    
    function getName(val:any){
        setName(val.target.value);
        console.warn(val.target.value)
        
    }
        const addOnList = ():any => {
            setOnList([...Liste, {'title':Name, 'id':Liste.length+1}])
            ListToExport = [...Liste]
        }
    // const [theArray, setTheArray] = useState([]);
    // const addEntryClick = () => {
    //     setTheArray([...theArray, `Entry ${theArray.length}`]);
    // };
    // return [
    //     <input type="button" onClick={addEntryClick} value="Add" />,
    //     <div>{theArray.map(entry =>
    //       <div>{entry}</div>
    //     )}
    //     </div>
    // ];
    
    // const [name,addList] = useState([{title:'liste 2', id:1}, {title:'liste 3', id:2}, {title:'liste 4', id:3}]);
    

  return (
      <div>
                    <h1 className="heading">Nom de la liste</h1>
                    <input type="text" id="listAdd" onChange={getName} />
                    <button className="btn btn-success" onClick={()=>addOnList()}>Valider</button>
     </div>
  );
};

export default Modal;