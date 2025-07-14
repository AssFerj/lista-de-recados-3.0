import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createTask, deleteTask, editTask, getTasks } from '../../services/api.service';
import Task from '../../types/TaskType';
import TaskType from '../../types/TaskType';
import UserType from '../../types/UserType';

export interface ListTaskProps {
  id: string;
}

interface DeleteTaskProps {
  userId: string;
  id: string;
}

export const createTaskAction = createAsyncThunk('tasks/create', async (task: TaskType) => {
  const result = await createTask(task);
  return result;
});

export const getTasksAction = createAsyncThunk('tasks/list', async (user: UserType) => {
  const result = await getTasks(user);
  return result;
});

export const editTaskAction = createAsyncThunk('tasks/edit', async (task: TaskType) => {
  const result = await editTask(task);
  return result;
});

export const deleteTaskAction = createAsyncThunk('tasks/delete', async (props: DeleteTaskProps) => {
  const result = await deleteTask(props as TaskType);
  return result;
});

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [] as Task[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTasksAction.pending, () => {
      console.log('List Task started');
    })
    builder.addCase(getTasksAction.fulfilled, (_, action) => {
      console.log('List Task ended');
      return action.payload.data ?? [];
    })
    builder.addCase(editTaskAction.pending, () => {
      console.log('Edit Task started');
    })
    builder.addCase(editTaskAction.fulfilled, (_, action) => {
      console.log('Edit Task ended');
      return action.payload.data;
    })
    builder.addCase(deleteTaskAction.pending, () => {
      console.log('Delete Task started');
    })
    builder.addCase(deleteTaskAction.fulfilled, (_, action) => {
      console.log('Delete Task ended');
      return action.payload.data ?? [];
    })
  }
})

export default tasksSlice.reducer;