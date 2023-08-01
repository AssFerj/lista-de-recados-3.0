import React, { useEffect, useMemo, useState } from 'react';
import ListTasks from '../components/ListTasks';
import { useDispatch, useSelector } from 'react-redux';
import { createTaskAction, listTaskAction } from '../store/modules/tasksSlice';
import { Button, Grid, TextField, Typography, alpha } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import { theme } from '../config/Theme/Theme';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const [description, setDescription] = useState('');
  const state = useSelector((state: RootState) => state.tasksReducer);
  const logedUser = useSelector((state: RootState)=> state.logedUserReducer); 
  
  useEffect(() => {
    const isUserLoged = !!logedUser.id;
    
    if(!isUserLoged){
      navigate('/');
      return;
    }
    if(logedUser.id){
      dispatch(listTaskAction({id: logedUser.id}));
    }
  }, [dispatch, logedUser, navigate]);


  const listTasks = useMemo(() => {
    
    if(state){
      return (<ListTasks data={state ?? []} />)
    }
      return (<Typography>Nenhum recado cadastrado</Typography>)
  },[state]);

  const handleCreateTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(logedUser){
      const taskToCreate = {
        userId: logedUser.id,
        description
      }   
      dispatch(createTaskAction(taskToCreate));
    }
    navigate('/');
    return;
  };

  return (
    <React.Fragment>
      <h1>Recados 3.0</h1>
      <Grid container spacing={2} width={'100%'} mb={2} pl={2} component={'form'}>
        <Grid item xl={8}>
          <TextField type='text' fullWidth label='Descrição do recado' sx={{
            borderRadius: 1,
            borderColor: `${theme.palette.secondary.main}`,
            background: `${theme.palette.primary.contrastText}`,
            '&:Mui-focused': {
              boxShadow: `${alpha(theme.palette.secondary.light, 0.25)} 0 0 0 0.2rem`,
              borderColor: theme.palette.secondary.light,
            }
          }}
          value={description}
          onChange={e => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xl={4}>
          <Button type='button' variant='contained' fullWidth sx={{
            height: '100%',
            background: `${theme.palette.secondary.dark}`,
            "&:hover":{
              background: `${theme.palette.primary.dark}`,
              color: `${theme.palette.primary.contrastText}`
            }
          }}
          onClick={()=>handleCreateTask}
          >Cadastrar</Button>
        </Grid>
      </Grid>
      {listTasks}
    </React.Fragment>
  );
};

export default Home;
