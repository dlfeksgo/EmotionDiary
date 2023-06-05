import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const diarySlice = createSlice({
	name: 'diary',
	initialState,
	reducers: {
		create: (state, action) => {},
	},
});

export default diarySlice;
