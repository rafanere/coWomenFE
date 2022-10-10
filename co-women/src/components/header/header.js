import logo from "../../logo.svg";
import MenuList from "../menu-list/menu-list";
import { HeaderContainer } from "../../styles/header-container";

export default function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <MenuList style={{ paddingTop: "15vw", paddingBottom: "1vw" }} />
    </HeaderContainer>
  );
}
