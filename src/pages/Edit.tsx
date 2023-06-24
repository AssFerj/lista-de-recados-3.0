import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Edit: React.FC = () => {

  const handleEditTask = () => {
    // if(logedUser.id){
    //   const logedUserId = logedUser.id
    //   const editTask: TaskType = {
    //     userId: logedUserId,
    //     description: description
    //   }
    //   // dispatch(editTaskAction(editTask));
    // }
  };

  return (
    <React.Fragment>
      <h1>Editar recado</h1>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Descrição do recado"
            type="text"
            fullWidth
            variant="standard"
          />
          <Button variant='contained' sx={{marginTop: 2}} onClick={handleEditTask}>Editar</Button>

    </React.Fragment>
  );
};

export default Edit;
