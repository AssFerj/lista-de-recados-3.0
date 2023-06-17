import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import LogedUserType from '../../types/LogedUserType';

const userSlice = createSlice({
  name: 'logedUser',
  initialState: {
    // id: '76030930-e007-4e99-8a7b-a2af0903a953'
  } as LogedUserType,
  reducers: {}
});

export default userSlice.reducer;
