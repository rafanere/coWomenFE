import { AdsItem } from "./AdsItem";

export const AdsList = ({ ads }) => (
    <section>
        <ul>
            {ads.map(m => <AdsItem />)}
        </ul>
    </section>
)