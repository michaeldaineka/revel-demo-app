import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthState } from '../../types/slices/auth';

const initialState: AuthState = {
  isAuthenticated: JSON.parse(localStorage.isAuthenticated ?? false),
  isFetching: false
};

const loginRequest: any = createAsyncThunk('auth/loginRequest', async (): Promise<any> => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      localStorage.isAuthenticated = true;
      state.isAuthenticated = true;
      state.isFetching = false;
    }
  },
  extraReducers: {
    [loginRequest.pending]: (state) => {
      state.isFetching = true;
    },
    [loginRequest.fulfilled]: (state) => {
      state.isFetching = false;
      state.isAuthenticated = true;
      localStorage.isAuthenticated = true;
    }
  }
});

export const { login } = authSlice.actions;

export { loginRequest };

export default authSlice.reducer;
