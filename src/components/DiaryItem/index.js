import React from 'react';
import { ContentDiv, ContentWrapper, ImgDiv, ItemDiv, ItemImg } from './styles';
import MyButton from '../MyButton';
import { useNavigate } from 'react-router';

const DiaryItem = ({ emotion, content, date, id }) => {
	const navigate = useNavigate();
	const strDate = new Date(parseInt(date)).toLocaleDateString();
	// const strDate = new Date(parseInt(date)).toISOString().slice(0, 10);

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
					<MyButton
						status={'default'}
						text={'수정하기'}
						onClick={() => {
							navigate(`/edit/${id}`);
						}}
					/>
				</div>
			</ItemDiv>
		</>
	);
};

export default DiaryItem;
