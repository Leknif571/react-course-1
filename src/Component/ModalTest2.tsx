import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, InputLabel, FormControl, Select, MenuItem, FormHelperText, ClickAwayListenerProps } from "@mui/material";
import { Add_card_action } from '../Store/FunctionReducers/listReducers';
import { StoreList } from '../Store/store';
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4
};

interface list {
  id: number,
  title: String,
}

interface randomObject{
  length: number;
  startsWithLowerCase: boolean,
  includeNumbers: boolean,
  includeUpperCase: boolean

}

function strRandom(o:randomObject) {
  var a = 10,
      b = 'abcdefghijklmnopqrstuvwxyz',
      c = '',
      d = 0,
      e = ''+b;
  if (o) {
    if (o.startsWithLowerCase) {
      c = b[Math.floor(Math.random() * b.length)];
      d = 1;
    }
    if (o.length) {
      a = o.length;
    }
    if (o.includeUpperCase) {
      e += b.toUpperCase();
    }
    if (o.includeNumbers) {
      e += '1234567890';
    }
  }
  for (; d < a; d++) {
    c += e[Math.floor(Math.random() * e.length)];
  }
  return c;
}


export default function BasicModal2() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const list = useSelector((store:any) => store.listred)
  const [wList, setList] = React.useState('');
  const [err,setError] = useState(false);



//  let err = true;
  const handleChange = (event:any) => {
    console.log(event.type)
    // if(!event.target.value){
      setList(event.target.value);
    // }else(event)
    
    // console.log(event.target.value.toString()=='');
  };

  
 

  function test2(title:string, description:string, wlist:number){
    
    let addId = strRandom({
      includeUpperCase: true,
      includeNumbers: true,
      length: 10,
      startsWithLowerCase: true
    });

    console.log(wlist);
    if(wlist == -1){
      console.log('choisir une liste est obligatoire');
      setError(true);
      console.log(err);
      
    }else{
         setError(false);
         StoreList.dispatch({type:Add_card_action, index:wlist, payload:{ id:addId, title:title, description:description, pos:1 }})
         handleClose();
         
  }
    

    // console.log(Add_card_action);
    // console.log(wlist);
    // console.log(typeof(wlist));
   
    
  }

  return (
      
    <div>
      <Button onClick={handleOpen} variant="contained" color={"success"} fullWidth>New card</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >

          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ajouter une tâche
          </Typography>

          <InputLabel id="modal-modal-titleCard">Titre de la tâche:</InputLabel>

          <TextField
            id="filled-basic"
            label="Titre"
            variant="filled"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />

          <InputLabel id="modal-modal-description">
            Description de la tâche:
          </InputLabel>

          <TextField
            id="filled-multiline-static"
            label="Description"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="filled"
            fullWidth
          />

          <InputLabel>Dans quelle liste ? :</InputLabel>
          
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >

        <FormControl variant="filled" fullWidth>
          <InputLabel id="demo-simple-select-filled-label">Séléctionner une liste</InputLabel>
          <Select
            error={err}
            labelId="demo-simple-select-filled-label"
            id={"demo-simple-select-filled-error"}
            value={wList}
            onChange={handleChange}
          >
            <MenuItem value={'-1'}>
              <em>Séléctionner une liste</em>
            </MenuItem>
            { list.map(
              ({id, title}:list) =>
              <MenuItem value={id}>{title}</MenuItem>
              ) }
          </Select>
        </FormControl>
        {err && <FormHelperText error>Ce champs est requis !</FormHelperText>}
          </Box>

          <Button variant="outlined" color="success"  onClick= {() => test2(title, description, parseInt(wList))}>
            Valider
          </Button>
          <Button variant="outlined" color="error"  onClick= {() =>handleClose()}>
            Annuler
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
