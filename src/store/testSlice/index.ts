import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store';

interface InitialState {
	value: number;
}

const initialState: InitialState = {
	value: 0,
};

export const testSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
	},
});

export const { increment, decrement, incrementByAmount } = testSlice.actions;

export const selectCount = (state: RootState) => state.test.value;
export default testSlice.reducer;
