import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, AppDispatch } from './store';
import { RootState } from './rootReducer';

interface StepState {
    loading: boolean;
    error: string | null;
    name: string;
}

const initialState: StepState = {
    loading: false,
    error: null,
    name: '',
};

interface SelectedLoaded {
    name?: string;
}

//------------------------------------------------------------------//
//--------------------------- Slice ----------------------------//
//------------------------------------------------------------------//
const step = createSlice({
    name: 'step',
    initialState,
    reducers: {
        setStepStart(state) {
            state.loading = true;
            state.error = null;
        },
        setStepFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        setStepSuccess(state, action: PayloadAction<SelectedLoaded>) {
            const { name } = action.payload;
            state.name = name;
            state.loading = false;
            state.error = null;
        },
    },
});

//------------------------------------------------------------------//
//--------------------------- Actions ----------------------------//
//------------------------------------------------------------------//
export const { setStepStart, setStepFailure, setStepSuccess } = step.actions;

//------------------------------------------------------------------//
//--------------------------- Selectors ----------------------------//
//------------------------------------------------------------------//
export const stepsState = (state: RootState) => state.step.name;

//------------------------------------------------------------------//
//--------------------------- Thunk ----------------------------//
//------------------------------------------------------------------//
export const setStep = ({ name }: SelectedLoaded): AppThunk => async (dispatch: AppDispatch) => {
    console.log('name2: ', name);
    try {
        dispatch(setStepStart());
        dispatch(setStepSuccess({ name }));
    } catch (err) {
        dispatch(setStepFailure(err));
    }
};

export default step.reducer;
