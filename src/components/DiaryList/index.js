import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const SortingDiv = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
`;

const SortingSelect = styled.select`
	border-style: none;
	border-radius: 5px;
	background: #eeeeee;
	padding: 4px;
	margin-right: 8px;
`;

const SortingButton = styled.button`
	width: 100%;
	background: #24be62;
	border-style: none;
	padding: 4px;
	border-radius: 5px;
	color: white;
	cursor: pointer;
`;

const DiaryList = () => {
	const navigate = useNavigate();
	return (
		<>
			<SortingDiv>
				<SortingSelect name="latest">
					<option value={1}>최신순</option>
					<option value={-1}>오래된순</option>
				</SortingSelect>
				<SortingSelect name="emotion">
					<option value={0}>전부다</option>
					<option value={1}>좋은 감정만</option>
					<option value={-1}>나쁜 감정만</option>
				</SortingSelect>
				<SortingButton
					onClick={() => {
						navigate('/create');
					}}
				>
					일기 쓰기
				</SortingButton>
			</SortingDiv>
		</>
	);
};

export default DiaryList;
