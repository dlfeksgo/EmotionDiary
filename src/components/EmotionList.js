import React, { memo, useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

const emotionColor = {
	1: '#64C964',
	2: '#9DD772',
	3: '#FDCE17',
	4: '#FD8446',
	5: '#FD565F',
	default: '#eeeeee',
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
	${({ grade, isSelected }) => {
		const color = emotionColor[grade] || emotionColor['default'];
		const selectStyle = () => {
			if (isSelected) {
				return css`
					background: ${color};
					color: white;
				`;
			}
		};
		return css`
			${selectStyle}
			&:hover {
				background: ${color};
			}
		`;
	}}
	border-radius: 8px;
	cursor: pointer;

	img {
		width: 40px;
		margin-bottom: 8px;
	}
	span {
		font-size: 8px;
	}
`;

const EmotionList = ({ grade, name, img, onClick, isSelected }) => {
	return (
		<Wrapper onClick={onClick(grade)} grade={grade} isSelected={isSelected}>
			<img src={img} />
			<span>{name}</span>
		</Wrapper>
	);
};

export default React.memo(EmotionList);
