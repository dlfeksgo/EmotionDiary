import styled from 'styled-components';

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
	/* background: #eeeeee; */
	background: ${({ status }) => {
		switch (status) {
			case true:
				return `rgba(252,252,252,0.5)`;

			default:
				return `#eeeeee`;
		}
	}};
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
					return `background: #eeeeee`;
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
