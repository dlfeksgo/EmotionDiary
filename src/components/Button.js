import styled from 'styled-components';

export const Button = styled.button`
	width: 70px;
	height: 30px;
	border-style: none;
	border-radius: 8px;
	font-size: 12px;
	background: ${({ status }) => {
		switch (status) {
			case 'default':
				return '#eeeeee';
			case 'positive':
				return '#24be62';
			case 'negative':
				return '#FF5757';
			default:
				return 'black';
		}
	}};
	color: ${({ status }) => {
		return status === 'positive' ? 'white' : 'black';
	}};
	cursor: pointer;
`;
