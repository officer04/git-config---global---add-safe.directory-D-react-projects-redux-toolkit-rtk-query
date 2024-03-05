import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserById = (userId) => {
  return {id: 1, name: 'tema'}
}
  // new Promise((resolve) => {
  //   setTimeout(() => resolve({ id: 1, name: 'Max' }), 1000);
  // });

export const getUserById = createAsyncThunk('user/by-id', async (userId, thunkApi) => {
  try {
    const response = await fetchUserById(userId);
    console.log(response)
    return response;
  } catch (err) {
    thunkApi.rejectWithValue({})
  }
});
