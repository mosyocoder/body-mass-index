import React, {useState} from 'react'

import { CalculateContainer, RadioButtonDiv, RadioButton, Label, FormDiv, Input, CalculateButton } from "../../styles/CalculateBMI.style";
import { nanoid } from "nanoid";

function CalculateBMI() {
	const [name, setName] = useState("");
	const [weight, setWeight] = useState("");
	const [height, setHeight] = useState("");
	const [gender, setGender] = useState("");

	const calculate = () => {
		if (name && weight && height && gender) {
			const data = {
				id: nanoid(10),
				name,
				weight,
				height,
				gender,
				date: Date.now(),
			};
			const oldData = JSON.parse(localStorage.getItem("bmi"));
			if (!oldData) {
				localStorage.setItem("bmi", JSON.stringify([data]));
			} else {
				oldData.push(data);
				localStorage.setItem("bmi", JSON.stringify(oldData));
			}
		} else alert("Please fill all fields");
	};

	return (
		<CalculateContainer>
			<FormDiv>
				<Input onChange={(e) => setName(e.target.value)} placeholder="Enter your name..." />
				<Input type="number" onChange={(e) => setWeight(e.target.value)} placeholder="Enter your weight... (68 etc.)" />
				<Input type="number" onChange={(e) => setHeight(e.target.value)} placeholder="Enter your height... (1.75 etc.)" />
			</FormDiv>
			<RadioButtonDiv>
				<div style={{ display: "flex", alignItems: "center" }}>
					<RadioButton value="male" onChange={(e) => setGender(e.target.value)} name="gender" id="radioButMale" />
					<Label htmlFor="radioButMale">Male</Label>
				</div>
				<div style={{ display: "flex", alignItems: "center" }}>
					<RadioButton value="famale" onChange={(e) => setGender(e.target.value)} name="gender" id="radioButFamale" />
					<Label htmlFor="radioButFamale">Famale</Label>
				</div>
			</RadioButtonDiv>
			<FormDiv>
				<CalculateButton onClick={() => calculate()}>Calculate BMI</CalculateButton>
			</FormDiv>
		</CalculateContainer>
	);
}

export default CalculateBMI;