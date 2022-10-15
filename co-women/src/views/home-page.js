import SearchBar from "../components/search-bar/search-bar";
import { CenteredContainer } from "../styles/centered-container";
import { LeftAlignedContainer } from "../styles/left-aligned-container";

export default function HomePage() {
  return (
    <div>
      <LeftAlignedContainer style={{ paddingTop: "5vw", paddingBottom: "1vw" }}>
        Encontre a prestadora de serviços ideal para o que você precisa
      </LeftAlignedContainer>
      <CenteredContainer>
        <SearchBar />
        {/* <p>OU</p>
        <p>
          Se for uma prestadora de serviços, clique{" "}
          <a className="App-link" href="/">
            aqui
          </a>
        </p>*/}
      </CenteredContainer>
    </div>
  );
}
