import React from 'react';
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
                  <IconButton>
                    <EditIcon/>
                  </IconButton>
                  <IconButton>
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
