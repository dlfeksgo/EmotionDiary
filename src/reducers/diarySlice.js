import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	diaryPosts: [
		{
			id: 1,
			emotion: 3,
			content: '1번 다이어리',
			date: 1685969864960,
		},
		{
			id: 2,
			emotion: 4,
			content: '2번 다이어리',
			date: 1685969864964,
		},
		{
			id: 3,
			emotion: 1,
			content: '3번 다이어리',
			date: 1685969864965,
		},
		{
			id: 4,
			emotion: 5,
			content: '4번 다이어리',
			date: 1685969864966,
		},
		{
			id: 5,
			emotion: 2,
			content: '5번 다이어리',
			date: 1685969864967,
		},
	],
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
