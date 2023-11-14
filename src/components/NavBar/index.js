import React, { useState } from "react";
import { LeftContainer, Logo, NavbarContainer, NavbarExtendedContainer, NavbarInnerContainer, NavbarLink, NavbarLinkContainer, NavbarLinkExtended, OpenLinkButton, RightContainer } from "../../styles/Navbar.style";

import LogoImg from "../../assets/logo.png";

function NavBar() {
	const [extendNavbar, setExtendNavbar] = useState(false);

	return (
		<NavbarContainer extendNavbar={extendNavbar}>
			<NavbarInnerContainer>
				<LeftContainer>
					<NavbarLinkContainer>
						<NavbarLink to={"/"}>Calculate</NavbarLink>
						<NavbarLink to={"/whatis"}>What is BMI ?</NavbarLink>
						<NavbarLink to={"/whatis"}>Recent Calculates</NavbarLink>
						<OpenLinkButton onClick={() => setExtendNavbar((curr) => !curr)}>{extendNavbar ? <>&#10005;</> : <>&#8801;</>}</OpenLinkButton>
					</NavbarLinkContainer>
				</LeftContainer>
				<RightContainer>
					<Logo src={LogoImg} />
				</RightContainer>
			</NavbarInnerContainer>
			{extendNavbar && (
				<NavbarExtendedContainer>
					<NavbarLinkExtended to={"/"}>Calculate</NavbarLinkExtended>
					<NavbarLinkExtended to={"/whatis"}>What is BMI ?</NavbarLinkExtended>
					<NavbarLinkExtended to={"/whatis"}>Recent Calculates</NavbarLinkExtended>
				</NavbarExtendedContainer>
			)}
		</NavbarContainer>
	);
}

export default NavBar;
