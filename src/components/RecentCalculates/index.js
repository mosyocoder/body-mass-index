import React from "react";
import { RecentTable, ResultDetailDiv, RecentContainer, RecentTableTR, RecentTableTH, RecentTableTD, RecentTableResultTd, ColorDiv } from "../../styles/RecentCalculates.style";

function RecentCalculates() {
	const recent = JSON.parse(localStorage.getItem("bmi"));

	if (!recent)
		return (
			<div style={{ width: "100%", textAlign: "center", marginTop: "50px" }}>
				<h1>any items not found</h1>
			</div>
		);

	return (
		<RecentContainer>
			<ResultDetailDiv>
				<ColorDiv $bgc={"blue"}></ColorDiv>
				<p>Zayıf</p>
				<ColorDiv $bgc={"green"}></ColorDiv>
				<p>Normal</p>
				<ColorDiv $bgc={"yellow"}></ColorDiv>
				<p>Kilolu</p>
				<ColorDiv $bgc={"orange"}></ColorDiv>
				<p>1. derece Obazite</p>
				<ColorDiv></ColorDiv>
				<p>2. derece Obazite</p>
			</ResultDetailDiv>
			<RecentTable>
				<tbody>
					<RecentTableTR>
						<RecentTableTH>Name</RecentTableTH>
						<RecentTableTH>Weight</RecentTableTH>
						<RecentTableTH>Height</RecentTableTH>
						<RecentTableTH>Gender</RecentTableTH>
						<RecentTableTH>Result</RecentTableTH>
						<RecentTableTH>Date</RecentTableTH>
					</RecentTableTR>

					{recent &&
						recent.map((item) => (
							<RecentTableTR key={item.id}>
								<RecentTableTD>{item.name}</RecentTableTD>
								<RecentTableTD>{item.weight}</RecentTableTD>
								<RecentTableTD>{item.height}</RecentTableTD>
								<RecentTableTD>{item.gender}</RecentTableTD>
								<RecentTableResultTd $bgc={(item.weight / (item.height * item.height)).toFixed(0)}>{(item.weight / (item.height * item.height)).toFixed(0)}</RecentTableResultTd>
								<RecentTableTD>{item.date}</RecentTableTD>
							</RecentTableTR>
						))}
				</tbody>
			</RecentTable>
		</RecentContainer>
	);
}

export default RecentCalculates;
