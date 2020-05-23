import { combineReducers } from '@reduxjs/toolkit';
import stepReducer from './stepReducer';

const rootReducer = combineReducers({
    step: stepReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
