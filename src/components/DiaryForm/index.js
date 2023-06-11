import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
	EmotionButton,
	EmotionDiv,
	EmotionImg,
	DiaryTextArea,
	ButtonDiv,
	DateWrapper,
	EmotionWrapper,
	ContentWrapper,
	DateInput,
} from './styles';
import MyButton from '../MyButton';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import diarySlice from '../../reducers/diarySlice';
import MyHeader from '../MyHeader';
import emotionSlice from '../../reducers/emotionSlice';
import EmotionList from '../EmotionList';

const getStringDate = (date) => {
	return date.toISOString().slice(0, 10);
};

const DiaryForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { emotionList } = useSelector((state) => state.emotion);
	const [content, setContent] = useState('');

	const [date, setDate] = useState(getStringDate(new Date()));
	const [emotion, setEmotion] = useState(1);

	const dataId = useRef(0);
	// useEffect(() => {
	// 	dispatch(emotionSlice.actions.statusUpdate({ emotionGrade }));
	// }, [emotionGrade]);

	const handleEmotion = useCallback(
		(grade) => () => {
			setEmotion(grade);
		},
		[]
	);

	const handleContent = useCallback((e) => {
		setContent(e.target.value);
	}, []);

	const handleCreate = () => {
		dispatch(
			diarySlice.actions.create({
				id: dataId.current,
				emotion,
				content,
				date: new Date().getTime(),
			})
		);
		setEmotion('');
		setContent('');
		navigate('/', { replace: true });
	};

	return (
		<div>
			<MyHeader
				headText={'새로운 일기 쓰기'}
				leftChild={'돌아가기'}
				onClickLeft={() => {
					navigate(-1);
				}}
			/>
			<DateWrapper>
				<h5>날짜</h5>
				<DateInput
					type="date"
					value={date}
					onChange={(e) => {
						setDate(e.target.value);
					}}
				/>
			</DateWrapper>
			<EmotionWrapper>
				<h5>오늘의 감정</h5>
				<EmotionDiv>
					{emotionList.map((v) => {
						return (
							<EmotionList
								key={v.grade}
								{...v}
								onClick={handleEmotion}
								isSelected={v.grade === emotion}
							/>
						);
					})}
				</EmotionDiv>
			</EmotionWrapper>
			<ContentWrapper>
				<h5>오늘의 일기</h5>
				<div>
					<DiaryTextArea
						name="diaryData"
						placeholder="오늘은 어땠어요?"
						value={content}
						onChange={handleContent}
					></DiaryTextArea>
				</div>
			</ContentWrapper>
			<ButtonDiv>
				<MyButton
					status={'default'}
					onClick={() => {
						navigate(-1);
					}}
					text={'취소하기'}
				></MyButton>
				<MyButton
					status={'positive'}
					onClick={handleCreate}
					text={'등록하기'}
				></MyButton>
			</ButtonDiv>
		</div>
	);
};

export default DiaryForm;
{
	/* {emotion.map((v, i) => {
						return <EmotionList key={v.grade} {...v} onClick={handleEmotion} />;
					})} */
}
