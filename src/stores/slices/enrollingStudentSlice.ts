import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { enrollingStudentApi } from 'api/enrollingStudentApi';
import { EnrollingStudentRequest } from 'models/enrollingStudent';

const initialState = {
	status: 'idle' || 'loading' || 'succeeded' || 'failed',
};

export const studentEnrolling = createAsyncThunk(
	'enrollingStudent/enrollingStudent',
	async (request: EnrollingStudentRequest, thunkAPI) => {
		try {
			const response = await enrollingStudentApi.enroll(request);
			return response;
		} catch (error) {
			const message = 'Error Message';
			return thunkAPI.rejectWithValue(message);
		}
	}
);

const enrollingStudentSlice = createSlice({
	name: 'enollingStudent',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(studentEnrolling.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(studentEnrolling.fulfilled, (state) => {
				state.status = 'succeeded';
			})
			.addCase(studentEnrolling.rejected, (state) => {
				state.status = 'failed';
			});
	},
});

export default enrollingStudentSlice.reducer;
