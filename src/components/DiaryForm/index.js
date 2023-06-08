import React, { useState } from 'react';
import {
	EmotionButton,
	EmotionDiv,
	EmotionImg,
	DiaryTextArea,
	ButtonDiv,
} from './styles';
import MyButton from '../MyButton';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import diarySlice from '../../reducers/diarySlice';
import MyHeader from '../MyHeader';

const DiaryForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { emotion } = useSelector((state) => state.emotion);
	const [content, setContent] = useState('');
	const [emotionGrade, setEmotionGrade] = useState('');

	const handleEmotion = (e) => () => {
		setEmotionGrade(e);
	};

	const handleContent = (e) => {
		setContent(e.target.value);
	};

	const handleCreate = () => {
		dispatch(diarySlice.actions.create({ emotionGrade, content }));
		setEmotionGrade('');
		setContent('');
		navigate('/');
	};

	return (
		<div>
			<MyHeader headText={'새로운 일기 쓰기'} leftChild={'돌아가기'} />
			<div>
				<h5>오늘의 감정</h5>
				<EmotionDiv>
					{emotion.map((v, i) => {
						return (
							<EmotionButton
								key={v.name}
								value={v.grade}
								onClick={handleEmotion(v.grade)}
								status={v.status}
							>
								<EmotionImg src={v.img} />

								<p style={{ margin: 0 }}>{v.name}</p>
							</EmotionButton>
						);
					})}
				</EmotionDiv>
			</div>
			<div>
				<h5>오늘의 일기</h5>
				<div>
					<DiaryTextArea
						name="diaryData"
						placeholder="오늘은 어땠어요?"
						value={content}
						onChange={handleContent}
					></DiaryTextArea>
				</div>
			</div>
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
