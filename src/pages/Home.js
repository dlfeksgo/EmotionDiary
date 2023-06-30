import React, { useEffect, useState } from 'react';
import DiaryList from '../components/DiaryList';
import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';
import { useSelector } from 'react-redux';

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
	const { diaryPosts } = useSelector((state) => state.diary);
	const [curDate, setCurDate] = useState(new Date()); //현재 선택된 날짜 정보
	const [data, setData] = useState([]);
	const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

	useEffect(() => {
		if (diaryPosts.length >= 1) {
			const firstDay = new Date(
				curDate.getFullYear(),
				curDate.getMonth(),
				1
			).getTime();
			const lastDay = new Date(
				curDate.getFullYear(),
				curDate.getMonth() + 1,
				0,
				23,
				59,
				59
			).getTime();

			setData(
				diaryPosts.filter((v) => firstDay <= v.date && v.date <= lastDay)
			);
		}
	}, [diaryPosts, curDate]);

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
			<DiaryList data={data} />
		</div>
	);
};

export default Home;
