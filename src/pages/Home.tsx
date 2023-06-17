import React, { useEffect } from 'react';
import ListTasks from '../components/ListTasks';
import { useDispatch, useSelector } from 'react-redux';
import { listTaskAction } from '../store/modules/tasksSlice';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const state = useSelector((state: any) => state.tasksReducer);
  const logedUser = useSelector((state: any)=> state.logedUserReducer);
  
  useEffect(() => {
    const isUserLoged = !!logedUser.id;
    
    if(!isUserLoged){
      navigate('/');
      return;
    }
    dispatch(listTaskAction({id: logedUser.id}));
  }, []);

  const listTasks = () => {
    if(!logedUser.tasks){
      return (<Typography>Nenhum recado cadastrado</Typography>)
    }else{
      return (<ListTasks data={state.data ?? []} />)
    }
  };
  return (
    <React.Fragment>
      <h1>Recados 3.0</h1>
      {listTasks()}
    </React.Fragment>
  );
};

export default Home;
