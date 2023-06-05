import React from 'react';
import DiaryList from '../components/DiaryList';
import HeaderNav from '../components/MyHeader';

const Home = ({ params }) => {
	return (
		<div>
			<DiaryList />
		</div>
	);
};

export default Home;
