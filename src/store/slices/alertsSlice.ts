import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isAlertOpen: false,
  alertOptions: {}
};

export const alertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    openAlert(state, action: PayloadAction<Record<string, any>>) {
      state.isAlertOpen = true;
      state.alertOptions = action.payload;
    }
  }
});

export const { openAlert } = alertsSlice.actions;

export default alertsSlice.reducer;
