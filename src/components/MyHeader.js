import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
	padding-top: 20px;
	padding-bottom: 20px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #d5d6e7;
`;

const HeadText = styled.div`
	display: flex;
	width: 60%;
	justify-content: center;
`;

const LeftButton = styled.div`
	display: flex;
	width: 20%;
	justify-content: start;
`;

const RightButton = styled.div`
	display: flex;
	width: 20%;
	justify-content: end;
`;

const MyHeader = ({ headText, leftChild, rightChild }) => {
	return (
		<Header>
			<LeftButton>{leftChild}</LeftButton>
			<HeadText>{headText}</HeadText>
			<RightButton>{rightChild}</RightButton>
		</Header>
	);
};

export default MyHeader;
