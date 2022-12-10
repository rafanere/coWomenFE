import { Container } from "@mui/system";
import { React } from "react";
import AdsDetails from "../components/ads/ads-details";

const ads = {
  id: 0,
  title: "Fulana",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  image: "a.ds",
  avaliacao: 5,
};

export default function AdsDetailsPage() {
  return (
    <Container sx={{ padding: "5vh" }}>
      <AdsDetails
        id={ads.id}
        title={ads.title}
        description={ads.description}
        image={ads.image}
        avaliacao={ads.avaliacao}
      />
    </Container>
  );
}
