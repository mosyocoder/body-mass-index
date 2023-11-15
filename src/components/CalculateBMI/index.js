import React, {useState} from 'react'

import {CalculateContainer, RadioButtonDiv, RadioButton, Label, FormDiv, Input, CalculateButton} from "../../styles/CalculateBMI.style"

function CalculateBMI() {
  
  const [name,setName] = useState();
  const [weight,setWeight] = useState();
  const [height,setHeight] = useState();
  const [gender,setGender] = useState();
  
  const calculate = () => {
    const data = {
      name,
      weight,
      height,
      gender
    }
    
    console.log(data)
  }
  
  return (
    <CalculateContainer> 
      <FormDiv>
        <Input onChange={(e) => setName(e.target.value)} placeHolder="Enter your name..." />
        <Input onChange={(e) => setWeight(e.target.value)} placeHolder="Enter your weight..." />
        <Input onChange={(e) => setHeight(e.target.value)} placeHolder="Enter your height..." />
      </FormDiv>
      <RadioButtonDiv>
        <div>
          <RadioButton value="male" onChange={(e) => setGender(e.target.value)} name="gender" id="radioButMale" />
          <Label htmlFor="radioButMale">Male</Label>
        </div>
        <div>
          <RadioButton value="famale" onChange={(e) => setGender(e.target.value)} name="gender" id="radioButFamale" />
          <Label htmlFor="radioButFamale">Famale</Label>
        </div>
      </RadioButtonDiv>
      <FormDiv>
        <CalculateButton onClick={()=> calculate()}>Calculate BMI</CalculateButton>
      </FormDiv>
    </CalculateContainer>
  )
}

export default CalculateBMI;