import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, InputLabel, FormControl, Select, MenuItem, cardMediaClasses } from "@mui/material";
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


export default function BasicModal2() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const list = useSelector((store:any) => store.listred)

  const [wList, setList] = React.useState('');
  // const [wListId, setListId] = React.useState('');

  const handleChange = (event:any) => {
    setList(event.target.value);
    console.log(event.target.value);
  };

  


  function test2(title:string, description:string, wlist:number){
    
    StoreList.dispatch({type:Add_card_action, index:wlist, payload:{ id:(list[wlist].card.length-1)+1, title:title, description:description, pos:1 }})

    // console.log(Add_card_action);
    console.log(wlist);
    console.log(typeof(wlist));
   
    handleClose();
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
          <InputLabel id="demo-simple-select-filled-label">Liste</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={wList}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>Séléctionner une liste</em>
            </MenuItem>
            { list.map(
              ({id, title}:any) =>
              <MenuItem value={id}>{title}</MenuItem>
              ) }
            

          </Select>
        </FormControl>

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
