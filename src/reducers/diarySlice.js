import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	diaryPosts: [],
};

const diarySlice = createSlice({
	name: 'diary',
	initialState,
	reducers: {
		create: (state, action) => {
			state.diaryPosts.unshift(action.payload);
		},
	},
});

export default diarySlice;
