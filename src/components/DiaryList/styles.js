import styled from 'styled-components';

export const HeaderWrapper = styled.div`
	display: flex;
	margin-top: 8px;
	& button {
		flex: 1;
	}
	& select {
		border: none;
		background: #f9f9f9;
		border-radius: 4px;
		margin-right: 4px;
	}
`;

export const ListDiv = styled.div`
	margin-top: 18px;
`;

export const Select = styled.select`
	font-size: 12px;
`;
