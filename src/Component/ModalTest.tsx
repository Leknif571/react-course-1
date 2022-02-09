import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, InputLabel } from "@mui/material";
import { Add_list_action } from '../Store/FunctionReducers/listReducers';
import { StoreList } from '../Store/store';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title,setTitle] = useState('');

  
function test(title:string){
    StoreList.dispatch({type:Add_list_action,payload:{title:title, card:[]}})
    console.log('etape suivante...');
    console.log(Add_list_action); 
    handleClose();
  }
  return (
      
    <div>
      <Button onClick={handleOpen} variant="contained" color={"success"} fullWidth>New list</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ajouter une liste
          </Typography>

          <InputLabel id="modal-modal-titleCard">Titre de la liste:</InputLabel>

          <TextField
            id="filled-basic"
            label="Titre"
            variant="filled"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />

          <Button variant="outlined" color="success"  onClick= {() => test(title)}>
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
