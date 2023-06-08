import styled from 'styled-components';

export const ItemDiv = styled.div`
	display: flex;
	padding-top: 12px;
	padding-bottom: 12px;
	border-bottom: 1px solid #e2e2e2;
`;

export const ImgDiv = styled.div`
	width: 100px;
	display: flex;
	justify-content: center;
	margin-right: 8px;
	border-radius: 8px;
	background: ${({ emotionGrade }) => {
		switch (emotionGrade) {
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
`;

export const ItemImg = styled.img`
	width: 60px;
`;

export const ContentWrapper = styled.div`
	flex: 1;
`;

export const ContentDiv = styled.div`
	font-size: 11px;
`;
