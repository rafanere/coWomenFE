import SearchBar from "../components/search-bar/search-bar";
import { CenteredContainer } from "../styles/centered-container";
import { LeftAlignedContainer } from "../styles/left-aligned-container";
import { adsService } from "../services/ads-service";

export default function HomePage() {
  return (
    <div>
      <div>
        <section>
          <ul>{adsService.getService}</ul>
        </section>
      </div>
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
    </div>
  );
}
