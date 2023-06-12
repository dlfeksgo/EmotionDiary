import React from 'react';
import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';
import DiaryDetail from '../components/DiaryDetail/DiaryDetail';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';

const Diary = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { diaryPosts } = useSelector((state) => state.diary);
	const [data] = diaryPosts.filter((v) => v.id === parseInt(id));
	const rowDate = new Date(data.date);
	const headText = `${rowDate.getFullYear()}년 ${
		rowDate.getMonth() + 1
	}월 ${rowDate.getDate()}일 기록`;

	return (
		<div>
			<MyHeader
				leftChild={
					<MyButton
						text={'돌아가기'}
						status={'default'}
						onClick={() => {
							navigate('/');
						}}
					/>
				}
				headText={headText}
				rightChild={
					<MyButton
						text={'수정하기'}
						status={'default'}
						onClick={() => {
							navigate(`/edit/${id}`);
						}}
					/>
				}
			/>
			<DiaryDetail data={data} />
		</div>
	);
};

export default Diary;
