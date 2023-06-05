import { configureStore } from '@reduxjs/toolkit';
import diarySlice from './reducers/diarySlice';
import emotionSlice from './reducers/emotionSlice';

const store = configureStore({
	reducer: {
		diary: diarySlice.reducer,
		emotion: emotionSlice.reducer,
	},
});

export default store;
