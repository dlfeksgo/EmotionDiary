import React from 'react';
import { ImgDiv, ItemDiv, ItemImg, ItemP } from './styles';

const DiaryItem = ({ emotionGrade, content }) => {
	return (
		<>
			<ItemDiv>
				<ImgDiv emotionGrade={emotionGrade}></ImgDiv>
				<ItemP>내용 : {content}</ItemP>
			</ItemDiv>
		</>
	);
};

export default DiaryItem;
