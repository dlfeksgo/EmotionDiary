import React from 'react';
import { ContentDiv, ContentWrapper, ImgDiv, ItemDiv, ItemImg } from './styles';
import MyButton from '../MyButton';

const DiaryItem = ({ emotion, content, date }) => {
	const strDate = new Date(parseInt(date)).toLocaleDateString();

	return (
		<>
			<ItemDiv>
				<ImgDiv emotionGrade={emotion}>
					<ItemImg src={require(`../../assets/emotion${emotion}.png`)} alt="" />
				</ImgDiv>
				<ContentWrapper>
					<div>{strDate}</div>
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
