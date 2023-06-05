import React from 'react';
import HeaderNav from '../components/Header';
import DiaryForm from '../components/DiaryForm';

const Create = () => {
	return (
		<>
			<HeaderNav page={'create'} />
			<DiaryForm />
		</>
	);
};

export default Create;
