import React from "react";
import { DetailBottom, DetailContainer, DetailTop } from "../../styles/CalculatesDetail.style";
import { useParams } from "react-router-dom";
import zayif from "../../assets/zayif.png";

function CalculatesDetail({ params }) {
	const { id } = useParams(params);

	const recent = JSON.parse(localStorage.getItem("bmi")).filter((item) => item.id === id);

	return (
		<DetailContainer>
			<DetailTop>
				<img src={zayif} alt="" />
			</DetailTop>
			<DetailBottom></DetailBottom>
		</DetailContainer>
	);
}

export default CalculatesDetail;
