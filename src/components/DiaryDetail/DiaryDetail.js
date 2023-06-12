import React from 'react';
import styled from 'styled-components';
import emotion1 from '../../assets/emotion1.png';
import emotion2 from '../../assets/emotion2.png';
import emotion3 from '../../assets/emotion3.png';
import emotion4 from '../../assets/emotion4.png';
import emotion5 from '../../assets/emotion5.png';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
	margin-top: 18px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	h5 {
		margin-top: 8px;
		margin-bottom: 20px;
	}
`;

const ImgDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100px;
	height: 100px;
	margin: 0 0 40px 0;
	border-radius: 8px;
	background: ${({ emotion }) => {
		switch (emotion) {
			case 1:
				return `#64C964`;
			case 2:
				return `#9DD772`;
			case 3:
				return `#FDCE17`;
			case 4:
				return `#FD8446`;
			case 5:
				return `#FD565F`;
			default:
				return `#eeeeee`;
		}
	}};
	img {
		width: 70%;
		height: 70%;
	}
	span {
		color: white;
		font-size: 12px;
	}
`;

const ContentDiv = styled.div`
	width: 100%;
	padding: 18px;
	font-size: 12px;
	border-radius: 8px;
	background: #eeeeee;
`;

const DiaryDetail = ({ data }) => {
	const { emotionList } = useSelector((state) => state.emotion);
	const emotionName = emotionList.find((v) => v.grade === data.emotion);

	return (
		<Wrapper>
			<h5>이날의 감정</h5>
			<ImgDiv emotion={data.emotion}>
				<img src={require(`../../assets/emotion${data.emotion}.png`)} alt="" />
				<span>{emotionName.name}</span>
			</ImgDiv>
			<h5>이날의 일기</h5>
			<ContentDiv>{data.content}</ContentDiv>
		</Wrapper>
	);
};

export default DiaryDetail;
