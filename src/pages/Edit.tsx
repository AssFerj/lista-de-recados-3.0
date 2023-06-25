import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Edit: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const state = useSelector((state: RootState) => state.tasksReducer);
  const logedUser = useSelector((state: RootState)=> state.logedUserReducer); 
  const taskToEdit = state.map(task =>task.id === params.id);
  console.log(taskToEdit);
  
  
  useEffect(() => {
    const isUserLoged = !!logedUser.id;
    
    if(!isUserLoged){
      navigate('/');
      return;
    }
  }, [logedUser, navigate]);
  
  
  const handleEditTask = () => {
    if(params.id){
      const findTask = state.find(task => task.id === params.id);
      // console.log(findTask);
    }

    //   const logedUserId = logedUser.id
    //   const editTask: TaskType = {
    //     userId: logedUserId,
    //     description: description
    //   }
    //   // dispatch(editTaskAction(editTask));

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
            value={params.description}
          />
          <Button variant='contained' sx={{marginTop: 2}} onClick={handleEditTask}>Editar</Button>

    </React.Fragment>
  );
};

export default Edit;
