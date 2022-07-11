import { configureStore } from '@reduxjs/toolkit';
import optionReducer from './optionSlice'

export const store = configureStore({
    reducer: {
        option: optionReducer,
    }, 
    // middleware: [thunk],
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;