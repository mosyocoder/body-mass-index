import React from "react";
import { BIMSubTitle, BMIContainer, BMIContent, BMITitle } from "../../styles/WhatIsBMI.style";

function WhatIsBMI() {
	return (
		<BMIContainer>
			<BMITitle>What is BMI?</BMITitle>
			<BMIContent>Body Mass Index (BMI) is a numerical measurement that provides an indication of a person's overall body composition. It is a widely used screening tool to assess whether an individual has a healthy body weight in relation to their height. BMI is a simple and quick method to categorize individuals into different weight status categories, ranging from underweight to obese.</BMIContent>
			<BIMSubTitle>How is BMI Calculated?</BIMSubTitle>
			<BMIContent>
				BMI is calculated by dividing a person's weight in kilograms by the square of their height in meters. The formula is as follows: BMI = Height(m)<sup>2</sup> Weight(kg){" "}
			</BMIContent>
			<BIMSubTitle>BMI Categories</BIMSubTitle>
			<BMIContent>
				Underweight: BMI less than 18.5 <br />
				Normal weight: BMI between 18.5 and 24.9 <br />
				Overweight: BMI between 25 and 29.9 <br />
				Obese: BMI 30 or greater <br />
			</BMIContent>
		</BMIContainer>
	);
}

export default WhatIsBMI;
