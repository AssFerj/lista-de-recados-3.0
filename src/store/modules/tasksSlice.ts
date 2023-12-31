import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createTask, deleteTasks, editTasks, listTasks } from '../../services/api.service';
import Task from '../../types/TaskType';
import TaskType from '../../types/TaskType';

export interface ListTaskProps {
  id: string;
}

export interface EditTaskProps {
  userId: string;
  taskId: string;
}
export interface DeleteTaskProps {
  userId: string;
  taskId: string;
}

export const createTaskAction = createAsyncThunk('tasks/create', async (props: TaskType) => {
  const result = await createTask(props);
  return result;
});

export const listTaskAction = createAsyncThunk('tasks/list', async (props: ListTaskProps) => {
  const result = await listTasks(props.id);
  return result;
});

export const editTaskAction = createAsyncThunk('tasks/edit', async (props: EditTaskProps) => {
  const result = await editTasks(props);
  return result;
});

export const deleteTaskAction = createAsyncThunk('tasks/delete', async (props: DeleteTaskProps) => {
  const result = await deleteTasks(props);
  return result;
});

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [] as Task[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listTaskAction.pending, () => {
      console.log('List Task started');
    })
    builder.addCase(listTaskAction.fulfilled, (_, action) => {
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