import styled from "styled-components";

export const CalculateContainer = styled.div`
	max-width: 1200px;
	margin: 50px auto 0 auto;

	@media (max-width: 700px) {
		max-width: 90%;
		margin: 20px auto 0 auto;
	}
`;

export const RadioButtonDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

export const RadioButton = styled.input.attrs({ type: "radio" })``;

export const Label = styled.label`
	font-size: 14px;
`;

export const FormDiv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Input = styled.input.attrs({ type: "text" })`
	border: none;
	border-bottom: 0.5px solid darkgray;
	border-radius: 0;
	width: 90%;
	margin-bottom: 15px;
	padding: 15px 0;

	&:focus {
		outline: none;
	}
`;

export const CalculateButton = styled.button`
	width: 50%;
	height: 50px;
	margin-top: 20px;
	border: none;
	background-color: #e2e2e2;
	color: #1b1833;
	cursor: pointer;

	@media (min-width: 700px) {
		width: 15%;
	}
`;