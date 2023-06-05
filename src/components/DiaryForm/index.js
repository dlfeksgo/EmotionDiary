import React, { useState } from 'react';
import {
	EmotionButton,
	EmotionDiv,
	EmotionImg,
	DiaryTextArea,
	ButtonDiv,
} from './styles';
import emotion1 from '../../assets/emotion1.png';
import emotion2 from '../../assets/emotion2.png';
import emotion3 from '../../assets/emotion3.png';
import emotion4 from '../../assets/emotion4.png';
import emotion5 from '../../assets/emotion5.png';
import { Button } from '../Button';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

const DiaryForm = () => {
	const navigate = useNavigate();
	// const dispatch = useDispatch();
	const [content, setContent] = useState('');
	const [emotion, setEmotion] = useState('');
	const [toggleEmotion, setToggleEmotion] = useState(false);
	const handleEmotion = (e) => () => {
		console.log(e);
	};

	const handleContent = (e) => {
		setContent(e.target.value);
	};

	const emotionValue = [
		{
			grade: 1,
			name: '완전 좋음',
			img: emotion1,
		},
		{
			grade: 2,
			name: '좋음',
			img: emotion2,
		},
		{
			grade: 3,
			name: '그럭저럭',
			img: emotion3,
		},
		{
			grade: 4,
			name: '나쁨',
			img: emotion4,
		},
		{
			grade: 5,
			name: '완전 나쁨',
			img: emotion5,
		},
	];

	return (
		<div>
			<div>
				<h5>오늘의 감정</h5>
				<EmotionDiv>
					{emotionValue.map((v, i) => {
						return (
							<EmotionButton
								key={v.name}
								value={v.grade}
								onClick={handleEmotion(v.grade)}
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
				<Button
					status={'positive'}
					onClick={() => {
						console.log(content);
					}}
				>
					등록하기
				</Button>
			</ButtonDiv>
		</div>
	);
};

export default DiaryForm;
