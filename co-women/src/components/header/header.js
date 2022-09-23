import logo from "../../logo.svg";
import MenuList from "../menu-list/menu-list";

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <MenuList className="App-menu" />
    </header>
  );
}
