import React, { useEffect } from 'react';
import ListTasks from '../components/ListTasks';
import { useDispatch, useSelector } from 'react-redux';
import { listTaskAction } from '../store/modules/tasksSlice';
import { RootState } from '../store';
import { Typography } from '@mui/material';
import LogedUserType from '../types/LogedUserType';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const state = useSelector((state: any) => state.tasksReducer);
  // console.log(state);
  const logedUser = useSelector((state: any)=> state.logedUserReducer);
  // console.log(logedUser);
  
  
  useEffect(() => {
    const isUserLoged = !!logedUser.id;
    // console.log(isUserLoged);
    
    if(!isUserLoged){
      navigate('/');
      return;
    }
    dispatch(listTaskAction({id: logedUser.id}));
  }, []);

  const listTasks = () => {
    if(!state.ok){
      return (<Typography>Nenhum recado cadastrado</Typography>)
    }else{
      return (<ListTasks data={state.data ?? []} />)
    }
  };
  return (
    <React.Fragment>
      <h1>Home</h1>
      {listTasks()}
      {/*<ListTasks data={state.data ?? []} /> */}
    </React.Fragment>
  );
};

export default Home;
