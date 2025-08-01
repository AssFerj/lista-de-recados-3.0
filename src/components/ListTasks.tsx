import React, { useEffect } from 'react';
import TaskType from '../types/TaskType';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';

import { deleteTaskAction } from '../store/modules/tasksSlice';

export interface ListTasksProps {
  data: TaskType[];
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const ListTasks: React.FC<ListTasksProps> = ({ data }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const logedUser = useAppSelector((state) => state.logedUserReducer); 
    // const state = useAppSelector((state: RootState) => state.tasksReducer);
    
    
    useEffect(() => {
      if(!logedUser.id){
        navigate('/');
        return;
      }
    }, [logedUser.id, navigate]);

    const handleEdit = (taskId?: string) => {
      navigate(`/editar/${taskId}`);
    };

    const handleDelete = (taskToDelId: string) => {
      if(taskToDelId && logedUser.id){
        dispatch(deleteTaskAction({
          userId: logedUser.id,
          id: taskToDelId
        }));
      }
    };


  return (
    <React.Fragment>

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Descrição do Recado</StyledTableCell>
                <StyledTableCell align="right">Ações</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
              {data.map(task => (
                <StyledTableRow key={task.id}>
                <StyledTableCell component="th" scope="row">
                    {task.description}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton onClick={()=>handleEdit(task.id)}>
                    <EditIcon/>
                  </IconButton>
                  <IconButton onClick={()=>task.id && handleDelete(task.id)}>
                    <DeleteIcon/>
                  </IconButton>
                </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
        </Table>
        </TableContainer>
    </React.Fragment>
  );
};

export default ListTasks;
