import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';


import { theme } from '../config/Theme/Theme';
import { Typography, alpha } from '@mui/material';

const Edit: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  
  const [newDescription, setNewDescription] = useState('');
  const state = useSelector((state: RootState) => state.tasksReducer);
  const logedUser = useSelector((state: RootState)=> state.logedUserReducer); 
  const taskToEdit = state.find(task =>task.id === params.id);
  
  // console.log(logedUser);
  
  useEffect(() => {
    const isUserLoged = !!logedUser.id;
    
    if(!isUserLoged){
      navigate('/');
      return;
    }
  }, [logedUser, navigate]);
  
  const handleSetDescription = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewDescription(e.currentTarget.value);
  };

  const handleEditTask = () => {
    if(params.id){
      
      // dispatch(editTaskAction(taskEdit));
      navigate('/home');
      return;
    }
  };

  return (
    <React.Fragment>
      <h1>Editar recado</h1>
      <Typography variant='body1'>{taskToEdit?.description}</Typography>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Digite a nova descrição"
        type={"text"}
        fullWidth
        variant="outlined"
        sx={{
          borderRadius: 1,
          color: theme.palette.secondary.contrastText,
          borderColor: `${theme.palette.secondary.main}`,
          background: `${theme.palette.primary.contrastText}`,
          '&:Mui-focused': {
            boxShadow: `${alpha(theme.palette.secondary.light, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.secondary.light,
          }
        }}
        value={newDescription}
        onChange={e => handleSetDescription(e)}
      />
      <Button variant='contained' fullWidth sx={{
        marginTop: 2,
        background: `${theme.palette.secondary.dark}`,
        "&:hover":{
          background: `${theme.palette.primary.dark}`,
          color: `${theme.palette.primary.contrastText}`
        }
      }} onClick={handleEditTask}>Editar</Button>

    </React.Fragment>
  );
};

export default Edit;
