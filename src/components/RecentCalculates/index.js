import React from "react";
import { RecentTable, RecentContainer, RecentTableTR, RecentTableTH, RecentTableTD, RecentTableResultTd } from "../../styles/RecentCalculates.style"

function RecentCalculates() {
	const recent = JSON.parse(localStorage.getItem("bmi"));
	console.log(recent);
	return <RecentContainer>
	  <RecentTable>
	    <RecentTableTR>
	      <RecentTableTH>Name</RecentTableTH>
	      <RecentTableTH>Weight</RecentTableTH>
	      <RecentTableTH>Height</RecentTableTH>
	      <RecentTableTH>Gender</RecentTableTH>
	      <RecentTableTH>Result</RecentTableTH>
      <RecentTableTH>Date</RecentTableTH>
	    </RecentTableTR>
	    {
	    	  recent && recent.map((item) => (
	    	  	<RecentTableTR key={item.id}>
	    	  	  <RecentTableTD>{item.name}</RecentTableTD>
	    	  	  <RecentTableTD>{item.weight}</RecentTableTD>
	    	  	  <RecentTableTD>{item.height}</RecentTableTD>
	    	  	  <RecentTableTD>{item.gender}</RecentTableTD>
	    	  	  <RecentTableResultTd $bgc={(item.weight / (item.height * item.height)).toFixed(0)}>{(item.weight / (item.height * item.height)).toFixed(0)}</RecentTableResultTd>
	    	  	  <RecentTableTD>{item.date}</RecentTableTD>
	    	  	</RecentTableTR>
	    	  ))
	    }
	    
	  </RecentTable>
	</RecentContainer>;
}

export default RecentCalculates;
