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
import diarySlice, { edit } from '../../reducers/diarySlice';
import MyHeader from '../MyHeader';
import emotionSlice from '../../reducers/emotionSlice';
import EmotionList from '../EmotionList';

const getStringDate = (date) => {
	return date.toISOString().slice(0, 10);
};

const DiaryForm = ({ editId }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { emotionList } = useSelector((state) => state.emotion);
	const [content, setContent] = useState('');

	const [date, setDate] = useState(getStringDate(new Date()));

	const [emotion, setEmotion] = useState(1);

	const dataId = useRef(0);
	const { diaryPosts } = useSelector((state) => state.diary);
	// useEffect(() => {
	// 	dispatch(emotionSlice.actions.statusUpdate({ emotionGrade }));
	// }, [emotionGrade]);

	const [data] = diaryPosts.filter((v) => v.id === parseInt(editId));
	const [editDate, setEditDate] = useState(
		editId ? getStringDate(new Date(parseInt(data.date))) : null
	);
	const [editContent, setEditContent] = useState(editId ? data.content : null);
	const [editEmotion, setEditEmotion] = useState(editId ? data.emotion : null);
	// const strDate = getStringDate(new Date(parseInt(data.date)));

	const handleEmotion = useCallback(
		(grade) => () => {
			setEmotion(grade);
			setEditEmotion(grade);
		},
		[]
	);

	const handleContent = useCallback((e) => {
		setContent(e.target.value);
		setEditContent(e.target.value);
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

	const handleEdit = () => {
		dispatch(
			edit({
				id: data.id,
				editEmotion,
				editContent,
				editDate: new Date(editDate).getTime(),
			})
		);
		navigate('/', { replace: true });
	};

	if (editId) {
		return (
			<div>
				<MyHeader
					headText={'일기 수정하기'}
					leftChild={'돌아가기'}
					onClickLeft={() => {
						navigate(-1);
					}}
				/>
				<DateWrapper>
					<h5>날짜</h5>
					<DateInput
						type="date"
						value={editDate}
						onChange={(e) => {
							setEditDate(e.target.value);
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
									isSelected={v.grade === editEmotion}
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
							value={editContent}
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
						onClick={handleEdit}
						text={'수정하기'}
					></MyButton>
				</ButtonDiv>
			</div>
		);
	} else {
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
	}
};

export default DiaryForm;
{
	/* {emotion.map((v, i) => {
						return <EmotionList key={v.grade} {...v} onClick={handleEmotion} />;
					})} */
}
