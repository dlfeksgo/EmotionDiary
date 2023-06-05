import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { useNavigate } from 'react-router';

const Header = styled.header`
	padding-top: 20px;
	padding-bottom: 20px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #d5d6e7;
`;

const HeadText = styled.div`
	width: 70%;
	text-align: center;
`;

const LeftButton = styled(Button)`
	width: 15%;
`;

const RightButton = styled(Button)`
	width: 15%;
`;

const MyHeader = ({ headText, leftChild, rightChild }) => {
	return (
		<Header>
			<LeftButton status={'default'}>{leftChild}</LeftButton>
			<HeadText>{headText}</HeadText>
			<RightButton status={'default'}>{rightChild}</RightButton>
		</Header>
	);
};

export default MyHeader;
