import styled from "styled-components";

export const RecentContainer = styled.div`
  max-width: 90%;
  margin: 25px auto 0 auto;
  overflow-x: auto;
`;

export const ResultDetailDiv = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;

	@media (max-width: 700px) {
		font-size: 10px;
	}

	@media (min-width: 850px) {
		justify-content: space-evenly;
	}
`;

export const ColorDiv = styled.div`
	width: 40px;
	height: 40px;
	background-color: ${(props) => (props.$bgc === "blue" ? "blue" : props.$bgc === "green" ? "green" : props.$bgc === "yellow" ? "yellow" : props.$bgc === "orange" ? "orange" : "red")};

	@media (min-width: 850px) {
		width: 50px;
		height: 50px;
	}

	@media (max-width: 700px) {
		width: 20px;
		height: 20px;
	}
`;

export const RecentTable = styled.table`
	border-radius: 5px;
	width: 100%;
	border-collapse: collapse;
	border-spacing: 0;
	margin-top: 25px;
`;

export const RecentTableTR = styled.tr`

  &:first-child{
    background-color: #1b1833!important;
    color: #e2e2e2;
  }

  &:nth-child(odd){
    background-color: #eeeeee;
  }
`;

export const RecentTableTH = styled.th`
  border-bottom: 1px solid #e2e2e2;
  border-right: 1px solid #e2e2e2;
  padding: 10px;

  &:last-child{
    border-right: none;
  }
`;

export const RecentTableTD = styled.td`
  text-align: center;
  padding: 7px;
  max-height: 30px;
`;

export const RecentTableResultTd = styled.td`
  text-align: center;
  max-height: 30px;
  padding: 7px;
  background-color: ${(props) => ((props.$bgc <= 18.5) ? 'blue' : (props.$bgc <= 24.9) ? 'green' : (props.$bgc <= 29.9) ? 'yellow' : (props.$bgc <= 35) ? 'orange' : 'red')}
`;




