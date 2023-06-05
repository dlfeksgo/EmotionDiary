import React from 'react';
import DiaryList from '../components/DiaryList';
import HeaderNav from '../components/Header';

const Home = ({ params }) => {
	return (
		<div>
			<HeaderNav page={params} />
			<DiaryList />
		</div>
	);
};

export default Home;
