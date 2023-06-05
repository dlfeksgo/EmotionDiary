import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { useNavigate } from 'react-router';

const Nav = styled.nav`
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #d5d6e7;
`;

const HeaderNav = ({ page }) => {
	const navigate = useNavigate();
	switch (page) {
		case 'home':
			return (
				<>
					<Nav>
						<button>이전</button>
						<p>날짜</p>
						<button>다음</button>
					</Nav>
				</>
			);
		case 'create':
			return (
				<>
					<Nav>
						<Button
							status={'default'}
							onClick={() => {
								navigate(-1);
							}}
						>
							뒤로가기
						</Button>
						<p>새로운 일기 쓰기</p>
					</Nav>
				</>
			);
		case 'edit':
			return (
				<>
					<Nav>EDIT 헤더입니다</Nav>
				</>
			);
		default:
			return (
				<>
					<Nav>HOME 헤더입니다</Nav>
				</>
			);
	}
};

export default HeaderNav;
