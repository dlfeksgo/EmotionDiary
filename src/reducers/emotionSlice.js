import { createSlice } from '@reduxjs/toolkit';
import emotion1 from '../assets/emotion1.png';
import emotion2 from '../assets/emotion2.png';
import emotion3 from '../assets/emotion3.png';
import emotion4 from '../assets/emotion4.png';
import emotion5 from '../assets/emotion5.png';

const initialState = {
	emotionList: [
		{
			grade: 1,
			name: '완전 좋음',
			img: emotion1,
		},
		{
			grade: 2,
			name: '좋음',
			img: emotion2,
		},
		{
			grade: 3,
			name: '그럭저럭',
			img: emotion3,
		},
		{
			grade: 4,
			name: '나쁨',
			img: emotion4,
		},
		{
			grade: 5,
			name: '완전 나쁨',
			img: emotion5,
		},
	],
};

const emotionSlice = createSlice({
	name: 'emotion',
	initialState,
	reducers: {
		read: (state, action) => {
			console.log(state);
		},
	},
});

export const { read } = emotionSlice.actions;

export default emotionSlice;
