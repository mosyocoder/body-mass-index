import styled from "styled-components";

export const DetailContainer = styled.div`
	max-width: 1200px;
	margin: 50px auto 0 auto;
	background-color: #f9f9f9;
	border-left: 1px solid rgba(0, 0, 0, 0.2);
	border-right: 1px solid rgba(0, 0, 0, 0.2);

	@media (max-width: 700px) {
		max-width: 90%;
		margin: 20px auto 0 auto;
	}
`;

export const DetailTop = styled.div`
	display: flex;
	width: 80%;
	margin: 0 auto;
	padding: 20px;
	border-bottom: 2px solid rgba(0, 0, 0, 0.3);
`;

export const Details = styled.div`
	margin-left: 50px;
`;

export const DetailBottom = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	width: 90%;
	margin: 0 auto;
`;
