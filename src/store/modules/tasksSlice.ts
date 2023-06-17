import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { listTasks } from '../../services/api.service';
import Task from '../../types/TaskType';

interface ListTaskProps {
  id: string;
}

export const listTaskAction = createAsyncThunk('tasks/list', async (props: ListTaskProps) => {
  const result = await listTasks(props.id);
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
      // return action.payload.data ?? [];
      return action.payload;
    })
  }
})

export default tasksSlice.reducer;