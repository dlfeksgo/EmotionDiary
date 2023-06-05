import styled from 'styled-components';
import emotion1 from '../../assets/emotion1.png';
import emotion2 from '../../assets/emotion2.png';
import emotion3 from '../../assets/emotion3.png';
import emotion4 from '../../assets/emotion4.png';
import emotion5 from '../../assets/emotion5.png';

export const EmotionDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const EmotionButton = styled.button`
	width: 60px; //확인필요
	height: 70px;
	font-size: 8px;
	border: none;
	border-radius: 4px;
	background: #eeeeee;
	cursor: pointer;
	padding: 0;
	&:hover {
		${({ value }) => {
			switch (value) {
				case 1:
					return `background: #64C964`;
				case 2:
					return `background: #9DD772`;
				case 3:
					return `background: #FDCE17`;
				case 4:
					return `background: #FD8446`;
				case 5:
					return `background: #FD565F`;
				default:
					return `background: #FD565F`;
			}
		}}
	}
`;

export const EmotionImg = styled.img`
	width: 30px;
	height: 30px;
`;

export const DiaryTextArea = styled.textarea`
	border: none;
	border-radius: 4px;
	background: #eeeeee;
	width: 100%;
	height: 100px;
	padding: 10px;
`;

export const ButtonDiv = styled.div`
	display: flex;
	justify-content: space-between;
`;
