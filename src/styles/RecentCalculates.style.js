import styled from "styled-components";

export const RecentContainer = styled.div`
  max-width: 90%;
  margin: 25px auto 0 auto;
  overflow-x: auto;
`;

export const RecentTable = styled.table`
  border-radius: 5px;
  width: 100%;
  border-collapse: collapse;
  borde-spacing: 0;
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




