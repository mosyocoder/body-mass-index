import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
	width: 100%;
	height: ${(props) => (props.$extendNavbar ? "100vh" : "80px")};
	background-color: #e2e2e2;
	display: flex;
	flex-direction: column;

	@media (min-width: 700px) {
		height: 80px;
	}
`;

export const LeftContainer = styled.div`
	flex: 70%;
	display: flex;
	align-items: center;
	padding-left: 5%;
`;

export const RightContainer = styled.div`
	flex: 30%;
	display: flex;
	align-items: center;
	padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
`;

export const NavbarLinkContainer = styled.div`
	display: flex;
`;

export const NavbarLink = styled(Link)`
	color: #1b1833;
	font-size: x-large;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	margin: 10px;

	@media (max-width: 700px) {
		display: none;
	}
`;

export const NavbarLinkExtended = styled(Link)`
	color: #1b1833;
	font-size: x-large;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	margin: 10px;
`;

export const Logo = styled.img`
	margin: 10px;
	max-width: 150px;
	height: auto;
`;

export const OpenLinkButton = styled.button`
	width: 70px;
	height: 50px;
	background: none;
	border: none;
	color: #1b1833;
	font-size: 45px;
	cursor: pointer;

	@media (min-width: 700px) {
		display: none;
	}
`;

export const NavbarExtendedContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	@media (min-width: 700px) {
		display: none;
	}
`;
