import { Container } from "@/components/container";
import { About } from "@/components/screens/about/about";
import { Gallery } from "@/components/screens/gallery/galleryList/gallery";
import { HowToJoin } from "@/components/screens/howToJoin/howToJoin";
import { Join } from "@/components/screens/join/join";
import { Main } from "@/components/screens/main/main";
import { PopularToursList } from "@/components/screens/popularTours/popularToursList/popularToursList";
import { PopularToursGroup } from "@/components/screens/popularToursGroup/popularToursGroup";
import { Reviews } from "@/components/screens/reviews/reviewsList/reviews";
import React from "react";
import { Founders } from "./tours/[tour]/components/founders/founders";

const Page: React.FC = () => {
  return (
    <>
      <Main />
      <Container>
        <PopularToursList />
        <Join />
        <HowToJoin />
        <Founders />
        <Reviews />
      </Container>
      <Gallery />
    </>
  );
};

export default Page;
