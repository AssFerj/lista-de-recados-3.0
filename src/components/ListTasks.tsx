import React, { useEffect, useState } from 'react';
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
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { editTasks } from '../services/api.service';

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
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const ListTasks: React.FC<ListTasksProps> = ({ data }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logedUser = useSelector((state: RootState)=> state.logedUserReducer); 
    console.log(logedUser);
    
    // Validação do loged user id
    useEffect(() => {
      if(!logedUser.id){
        navigate('/');
        return;
      }
    }, [logedUser.id, navigate]);
    
    const [open, setOpen] = useState(false);
    const [description, setDescription] = useState('');

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    const handleEditTask = (userId: string, taskId: string) => {
      const editTask = {
        userId,
        taskId,
        description
      }
      if(logedUser.id){
        dispatch(editTasks(editTask));
      }
      navigate(`/home`);
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
                  <IconButton onClick={handleClickOpen}>
                    <EditIcon/>
                  </IconButton>
                  <IconButton>
                    <DeleteIcon/>
                  </IconButton>
                  <>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Editar Recado</DialogTitle>
                    <DialogContent>
                      {/* <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                      </DialogContentText> */}
                      <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Nova Descrição"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={task.description}
                        onChange={(e)=>setDescription(e.target.value)}
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button type='submit' onSubmit={()=>handleEditTask(logedUser.id, task.id)}>Editar</Button>
                    </DialogActions>
                  </Dialog>
                  </>
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
