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
import diarySlice, { edit, remove } from '../../reducers/diarySlice';
import MyHeader from '../MyHeader';
import EmotionList from '../EmotionList';

const getStringDate = (date) => {
	return date.toISOString().slice(0, 10);
};

const DiaryForm = ({ isEdit, targetId }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { emotionList } = useSelector((state) => state.emotion);
	const [content, setContent] = useState('');
	const [date, setDate] = useState(getStringDate(new Date()));
	const [emotion, setEmotion] = useState(1);

	//수정 시 원본 데이터
	const [originData, setOriginData] = useState();

	const dataId = useRef(0);
	const { diaryPosts } = useSelector((state) => state.diary);

	useEffect(() => {
		if (isEdit) {
			const targetData = diaryPosts.find((v) => v.id === parseInt(targetId));
			setOriginData(targetData);
			setContent(targetData.content);
			setDate(getStringDate(new Date(targetData.date)));
			setEmotion(targetData.emotion);
		} else {
			return;
		}
	}, []);

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

	const handleEdit = () => {
		dispatch(
			edit({
				id: targetId,
				emotion,
				content,
				date: new Date(date).getTime(),
			})
		);
		navigate('/', { replace: true });
	};

	const handleDelete = () => {
		dispatch(remove(targetId));
		navigate('/', { replace: true });
	};

	return (
		<div>
			<MyHeader
				headText={isEdit ? '수정하기' : '새로운 일기 쓰기'}
				leftChild={<MyButton text={'돌아가기'} status={'default'} />}
				onClickLeft={() => {
					navigate(-1);
				}}
				rightChild={
					isEdit ? (
						<MyButton
							text={'삭제하기'}
							status={'negative'}
							onClick={handleDelete}
						/>
					) : null
				}
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
					onClick={isEdit ? handleEdit : handleCreate}
					text={isEdit ? '수정하기' : '등록하기'}
				></MyButton>
			</ButtonDiv>
		</div>
	);
};

export default DiaryForm;
