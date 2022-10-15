import { AdsItem } from "./AdsItem";

export const AdsList = ({ ads }) => (
  <section>
    <ul>
      {ads.map((m) => (
        <AdsItem title={m.title} description={m.description} />
      ))}
      {console.log('Passou pelo AdsList')}
    </ul>
  </section>
);
