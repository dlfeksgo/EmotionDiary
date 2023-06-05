import React, { useState } from 'react';
import DiaryList from '../components/DiaryList';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';

// const SortingDiv = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// 	margin-top: 10px;
// `;

// const SortingSelect = styled.select`
// 	border-style: none;
// 	border-radius: 5px;
// 	background: #eeeeee;
// 	padding: 4px;
// 	margin-right: 8px;
// `;

// const SortingButton = styled.button`
// 	width: 100%;
// 	background: #24be62;
// 	border-style: none;
// 	padding: 4px;
// 	border-radius: 5px;
// 	color: white;
// 	cursor: pointer;
// `;

const Home = () => {
	const [curDate, setCurDate] = useState(new Date()); //현재 선택된 날짜 정보
	const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

	const increaseMonth = () => {
		setCurDate(
			new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
		);
	};

	const decreaseMonth = () => {
		setCurDate(
			new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
		);
	};

	return (
		<div>
			<MyHeader
				headText={headText}
				leftChild={
					<MyButton status={'default'} text={'<'} onClick={decreaseMonth} />
				}
				rightChild={
					<MyButton status={'default'} text={'>'} onClick={increaseMonth} />
				}
			/>
			<DiaryList />
		</div>
	);
};

export default Home;
