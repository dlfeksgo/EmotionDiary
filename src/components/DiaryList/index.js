import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import DiaryItem from '../DiaryItem';
import MyButton from '../MyButton';
import { useNavigate } from 'react-router';
import { HeaderWrapper, ListDiv, Select } from './styles';

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
		<Select value={value} onChange={(e) => onChange(e.target.value)}>
			{optionList.map((v) => {
				return (
					<option key={v.value} value={v.value}>
						{v.name}
					</option>
				);
			})}
		</Select>
	);
};

const DiaryList = ({ data }) => {
	const navigate = useNavigate();
	// const { diaryPosts } = useSelector((state) => state.diary);
	const [sortDateType, setSortDateType] = useState('latest');
	const [filterEmotion, setFilterEmotion] = useState('all');

	const getProcessedDiaryList = () => {
		const compare = (a, b) => {
			if (sortDateType === 'latest') {
				return parseInt(b.date) - parseInt(a.date);
			} else return parseInt(a.date) - parseInt(b.date);
		};
		const copyList = JSON.parse(JSON.stringify(data));
		const sortedList = copyList.sort(compare);
		return sortedList;
	};

	return (
		<>
			<HeaderWrapper>
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

				<MyButton
					status={'positive'}
					onClick={() => {
						navigate('/create');
					}}
					text={'새 일기 쓰기'}
				/>
			</HeaderWrapper>
			<ListDiv>
				{getProcessedDiaryList().map((v) => {
					return <DiaryItem key={v.id} {...v} />;
				})}
			</ListDiv>
		</>
	);
};

export default DiaryList;
