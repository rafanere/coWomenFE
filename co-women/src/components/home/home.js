import { CenteredContainer } from "../../styles/centered-container";
import { LeftAlignedContainer } from "../../styles/left-aligned-container";
import SearchBar from "../search-bar/search-bar";

export default function Home() {
  return (
    <>
      <LeftAlignedContainer style={{ paddingTop: "5vw", paddingBottom: "1vw" }}>
        Encontre a prestadora de serviços ideal para o que você precisa
      </LeftAlignedContainer>
      <CenteredContainer>
        <SearchBar />
        <p>OU</p>
        <p>
          <a className="App-link" href="/search">
            Clique aqui
          </a>{" "}
          para ver todos os anúncios cadastrados
        </p>
      </CenteredContainer>
    </>
  );
}
