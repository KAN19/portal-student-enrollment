import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import BaseInitialState from 'models/baseInitalState';
import { AppRootState } from 'stores';

interface Test extends BaseInitialState {
	user: string;
}

const initialState: Test = {
	user: '',
	status: 'idle',
};

export const fetchTestingText = createAsyncThunk(
	'test/fetchTestingText',
	async (query: void, { dispatch, rejectWithValue }) => {
		try {
			// const response = await testApi.getTestString();
			// return response;
		} catch (error) {
			const message = 'ERORR Message';
			return rejectWithValue(message);
		}
	}
);

const userSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		setTestValue(state, action: PayloadAction<Test>) {
			state.user = action.payload.user;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTestingText.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchTestingText.fulfilled, (state, action) => {
				state.status = 'succeeded';
			})
			.addCase(fetchTestingText.rejected, (state) => {
				state.status = 'failed';
			});
	},
});

export const { setTestValue: setUser } = userSlice.actions;
export default userSlice.reducer;
