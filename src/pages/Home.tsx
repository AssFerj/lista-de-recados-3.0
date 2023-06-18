import React, { useEffect, useMemo } from 'react';
import ListTasks from '../components/ListTasks';
import { useDispatch, useSelector } from 'react-redux';
import { listTaskAction } from '../store/modules/tasksSlice';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
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

  return (
    <React.Fragment>
      <h1>Recados 3.0</h1>
      {listTasks}
    </React.Fragment>
  );
};

export default Home;
