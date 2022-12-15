import { Container } from "@mui/system";
import { React } from "react";
import AdsDetails from "../components/ads/ads-details";

export default function AdsDetailsPage() {
  return (
    <Container sx={{ padding: "5vh" }}>
      <AdsDetails
        id={localStorage.getItem("AdId")}
        title={localStorage.getItem("AdTitle")}
        description={localStorage.getItem("AdDescription")}
        image={localStorage.getItem("AdImage")}
        avaliacao={0}
      />
    </Container>
  );
}
