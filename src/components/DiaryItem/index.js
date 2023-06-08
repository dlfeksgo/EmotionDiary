import React from 'react';
import { ContentDiv, ContentWrapper, ImgDiv, ItemDiv, ItemImg } from './styles';
import MyButton from '../MyButton';

const DiaryItem = ({ emotion, content }) => {
	return (
		<>
			<ItemDiv>
				<ImgDiv emotionGrade={emotion}>
					<ItemImg src={require(`../../assets/emotion${emotion}.png`)} alt="" />
				</ImgDiv>
				<ContentWrapper>
					<div>날짜</div>
					<ContentDiv>{content}</ContentDiv>
				</ContentWrapper>
				<div>
					<MyButton status={'default'} text={'수정하기'} />
				</div>
			</ItemDiv>
		</>
	);
};

export default DiaryItem;
