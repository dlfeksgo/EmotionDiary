import styled from 'styled-components';
import emotion1 from '../../assets/emotion1.png';
import emotion2 from '../../assets/emotion2.png';
import emotion3 from '../../assets/emotion3.png';
import emotion4 from '../../assets/emotion4.png';
import emotion5 from '../../assets/emotion5.png';

export const ItemDiv = styled.div`
	margin-top: 10px;
	border: 1px solid #eeeeee;
	border-radius: 8px;
	padding: 8px;
	font-size: 12px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ItemP = styled.p`
	margin-top: 8px;
	margin-bottom: 8px;
`;

export const ImgDiv = styled.div`
	background-image: url();
	background-size: contain;
	background-repeat: no-repeat;
	width: 80px;
	height: 50px;
`;
