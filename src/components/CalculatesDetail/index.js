import React from "react";
import { DetailBottom, DetailContainer, DetailTop, Details } from "../../styles/CalculatesDetail.style";
import { useParams } from "react-router-dom";
import weak from "../../assets/weak.png";
import normal from "../../assets/normal.png";
import fat from "../../assets/fat.png";
import obese from "../../assets/obese.png";
import eobese from "../../assets/eobese.png";

function CalculatesDetail({ params }) {
	const { id } = useParams(params);

	const recent = JSON.parse(localStorage.getItem("bmi")).filter((item) => item.id === id);

	console.log(recent);

	const result = (recent[0].weight / (recent[0].height * recent[0].height)).toFixed(0);

	const imgSrc = result <= 18.5 ? weak : result <= 24.9 ? normal : result <= 29.9 ? fat : result <= 35 ? obese : eobese;

	const weakText = "1-Balanced Nutrition: Create a balanced meal plan with carbohydrates, protein, and fats in each meal. Ensure an adequate intake of vegetables and fruits. 2-Protein Intake: Increase protein intake to maintain muscle mass. Include sources like chicken, fish, eggs, red meat, and legumes. 3-Exercise: Engage in regular exercise to increase muscle mass and support overall health. Weight training can be effective for muscle building.";
	const normalText = "1-Healthy Eating Habits: Opt for unprocessed, whole-grain foods.Limit sugar and salt intake. 2-Portion Control: Pay attention to portion control and avoid overeating. 3-Diverse Food Groups: Include a variety of food groups in each meal.";
	const fatText =
		"1-Balanced Nutrition: Create a healthy, balanced eating plan that includes protein, carbohydrates, healthy fats, and fiber.Pay attention to portion control without overeating. 2-Regular Exercise: Aim for at least 150 minutes of moderate-intensity aerobic exercise per week. Additionally, engage in strength training exercises twice a week.Make exercise a part of your lifestyle. 3-Hydration Habits: Ensure an adequate daily intake of water. Water is vital for bodily functions and can contribute to a feeling of fullness. 4-Avoid Refined Foods: Steer clear of refined sugars, white flours, and processed foods. Focus on whole grain products and natural foods. 5-Healthy Snacking: Choose healthy snacks such as fruits, nuts, and yogurt. Opt for nutritious options to satisfy hunger between meals.";
	const obeseText = "1-Balanced and Low-Calorie Diet: Focus on weight loss with a low-calorie diet.Choose high-fiber foods. 2-Regular Exercise: Aim for at least 150 minutes of moderate-intensity aerobic exercise per week.";
	const extraObeseText = "1-Seek Professional Help: Consult healthcare professionals. Collaborate with a nutritionist or doctor. 2-Diet and Exercise for Weight Control: Implement a low-calorie diet.Make exercise a part of your lifestyle, focusing on both aerobic and strength training. 3-Hydration Habits: Ensure an adequate daily intake of water.";

	return (
		<DetailContainer>
			<DetailTop>
				<img src={imgSrc} alt="" />
				<Details>
					<h1>{recent[0].name}</h1>
					<h3>Weight: {recent[0].weight} kg</h3>
					<h3>Height: {recent[0].height} m</h3>
					<h3>Calculate Date: {recent[0].date}</h3>
				</Details>
			</DetailTop>
			<DetailBottom>
				<h1>Tips and Diet Recommendations</h1>
				<p>{result <= 18.5 ? weakText : result <= 24.9 ? normalText : result <= 29.9 ? fatText : result <= 35 ? obeseText : extraObeseText}</p>
			</DetailBottom>
		</DetailContainer>
	);
}

export default CalculatesDetail;
