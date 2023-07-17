// eslint-disable-next-line no-unused-vars
import React, {useState}from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./styles";
import LogoImg from "../../assets/images/logo.png";


function Navbar() {

    const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      {/* <div>
        <img src="src\assets\images\logo.png" alt="imagem de logo" />
        <span>Felipe André</span>
      </div> */}
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={LogoImg}></Logo>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/Projetos">Projetos</NavbarLink>
            <NavbarLink to="/Tecnologias">Tecnologias</NavbarLink>
            <NavbarLink to="/SobreMim">Sobre Mim</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
                
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer></RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && 
        <NavbarExtendedContainer>
            <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
            <NavbarLinkExtended to="/Projetos">Projetos</NavbarLinkExtended>
            <NavbarLinkExtended to="/Tecnologias">Tecnologias</NavbarLinkExtended>
            <NavbarLinkExtended to="/SobreMim">Sobre Mim</NavbarLinkExtended>
      </NavbarExtendedContainer>
      }
    </NavbarContainer>
  );
}

export default Navbar;
