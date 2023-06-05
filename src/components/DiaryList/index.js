import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DiaryItem from '../DiaryItem';

const sortOptionList = [
	{
		value: 'latest',
		name: '최근순',
	},
	{
		value: 'oldest',
		name: '오래된 순',
	},
];

const filterOptionList = [
	{
		value: 'all',
		name: '전체',
	},
	{
		value: 'good',
		name: '좋은 감정만',
	},
	{
		value: 'bad',
		name: '나쁜 감정만',
	},
];

const ControlMenu = ({ value, onChange, optionList }) => {
	return (
		<select value={value} onChange={(e) => onChange(e.target.value)}>
			{optionList.map((v) => {
				return (
					<option key={v.value} value={v.value}>
						{v.name}
					</option>
				);
			})}
		</select>
	);
};

const DiaryList = () => {
	const { diaryPosts } = useSelector((state) => state.diary);
	const [sortDateType, setSortDateType] = useState('latest');
	const [filterEmotion, setFilterEmotion] = useState('all');

	const getProcessedDiaryList = () => {
		const compare = (a, b) => {
			if (sortDateType === 'latest') {
				return parseInt(b.date) - parseInt(a.date);
			} else return parseInt(a.date) - parseInt(b.date);
		};
		const copyList = JSON.parse(JSON.stringify(diaryPosts));
		const sortedList = copyList.sort(compare);
		return sortedList;
	};

	return (
		<>
			<ControlMenu
				value={sortDateType}
				onChange={setSortDateType}
				optionList={sortOptionList}
			/>
			<ControlMenu
				value={filterEmotion}
				onChange={setFilterEmotion}
				optionList={filterOptionList}
			/>
			<div>
				{getProcessedDiaryList().map((v) => {
					return <DiaryItem key={v.id} {...v} />;
				})}
			</div>
		</>
	);
};

export default DiaryList;
