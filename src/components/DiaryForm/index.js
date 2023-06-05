import React, { useState } from 'react';
import {
	EmotionButton,
	EmotionDiv,
	EmotionImg,
	DiaryTextArea,
	ButtonDiv,
} from './styles';
import { Button } from '../Button';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import diarySlice from '../../reducers/diarySlice';

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
				<Button
					status={'default'}
					onClick={() => {
						navigate(-1);
					}}
				>
					취소하기
				</Button>
				<Button status={'positive'} onClick={handleCreate}>
					등록하기
				</Button>
			</ButtonDiv>
		</div>
	);
};

export default DiaryForm;
