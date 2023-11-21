import styled from "styled-components";

export const BMIContainer = styled.div`
	width: 1000px;
	margin: 50px auto 0 auto;
	padding: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-left: 1px solid rgba(0, 0, 0, 0.4);
	border-right: 1px solid rgba(0, 0, 0, 0.4);

	@media (max-width: 700px) {
		max-width: 600px;
	}
`;

export const BMITitle = styled.h1`
	border-bottom: 0.2px solid rgba(0, 0, 0, 0.9);
`;

export const BMIContent = styled.p`
	max-width: 800px;
	margin: 10px auto 0 auto;
`;

export const BIMSubTitle = styled.h3`
	border-bottom: 0.2px solid rgba(0, 0, 0, 0.6);
`;
