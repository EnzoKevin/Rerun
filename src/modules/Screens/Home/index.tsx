import React from "react";

import * as S from "./styles";

import Hero from "./Hero";
import Guide from "./Guide";
import Cards from "./Cards";
import HowWorks from "./HowItWorks";
import Community from "./community";
import Open from "./open";
import Blog from "./Blog";

export function InitialHome() {
  return (
    <S.Container>
      <Hero />
      <Guide />
      <Cards />
      <HowWorks />
      <Community />
      <Open />
      <Blog />
    </S.Container>
  );
}
