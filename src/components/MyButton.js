import styled from 'styled-components';

const Button = styled.button`
	height: 30px;
	border-style: none;
	border-radius: 4px;
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
		return status === 'default' ? 'black' : 'white';
	}};
	cursor: pointer;
`;

const MyButton = ({ status, text, onClick, id }) => {
	return (
		<Button status={status} onClick={onClick} id={id}>
			{text}
		</Button>
	);
};

export default MyButton;
