import React from "react";

function RecentCalculates() {
	const recent = JSON.parse(localStorage.getItem("bmi"));
	console.log(recent);
	return <div>RecentCalculates</div>;
}

export default RecentCalculates;
