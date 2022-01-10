import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import alertsSlice from './slices/alertsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    alerts: alertsSlice
    // middleware: (getDefaultMiddleware: any) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [
    //                 ...Object.keys(rrfActionTypes).map(
    //                     (type) => `@@reactReduxFirebase/${type}`
    //                 ),
    //             ],
    //             ignoredPaths: ['firebase', 'firestore'],
    //         },
    //         thunk: {
    //             extraArgument: {
    //                 getFirebase,
    //             },
    //         },
    //     }),
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
