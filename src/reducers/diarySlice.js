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
		{
			id: 6,
			emotion: 2,
			content: '6번 다이어리',
			date: 1785969864967,
		},
	],
};

const diarySlice = createSlice({
	name: 'diary',
	initialState,
	reducers: {
		create: (state, action) => {
			console.log(action.payload);
			state.diaryPosts.unshift(action.payload);
		},
		edit: (state, action) => {
			console.log(action.payload);

			const data = state.diaryPosts.find(
				(v) => v.id === parseInt(action.payload.id)
			);
			data.content = action.payload.editContent;
			data.emotion = parseInt(action.payload.editEmotion);
			data.date = action.payload.editDate;
		},
		remove: (state, action) => {
			// console.log(action.payload);
			state.diaryPosts = state.diaryPosts.filter(
				(v) => v.id !== parseInt(action.payload.id)
			);
		},
	},
});

export const { edit, remove } = diarySlice.actions;

export default diarySlice;
