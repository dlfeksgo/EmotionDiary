import React from 'react';
import { useParams } from 'react-router';
import DiaryForm from '../components/DiaryForm';

const Edit = () => {
	const { id } = useParams();

	return (
		<div>
			<DiaryForm editId={id} />
		</div>
	);
};

export default Edit;
