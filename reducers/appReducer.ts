import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './rootReducer';
import { lg } from '../utils/constants';

interface AppState {
    isMobile: boolean;
}

const initialState: AppState = {
    isMobile: false,
};

//------------------------------------------------------------------//
//--------------------------- Slice ----------------------------//
//------------------------------------------------------------------//
const app = createSlice({
    name: 'app',
    initialState,
    reducers: {
        getScreen(state, action: PayloadAction<number>) {
            state.isMobile = action.payload < lg ? true : false;
        },
    },
});

//------------------------------------------------------------------//
//--------------------------- Actions ----------------------------//
//------------------------------------------------------------------//
export const { getScreen } = app.actions;

//------------------------------------------------------------------//
//--------------------------- Selectors ----------------------------//
//------------------------------------------------------------------//
export const screenState = (state: RootState) => state.app.isMobile;

//------------------------------------------------------------------//
//--------------------------- Thunk ----------------------------//
//------------------------------------------------------------------//

export default app.reducer;
