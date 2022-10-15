import { Link } from "react-router-dom";

export const AdsItem = ({ title, description}) => (
    <li>
        <Link to={`ads/`}>{title}</Link>
    </li>
);