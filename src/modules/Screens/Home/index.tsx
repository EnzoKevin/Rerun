"use client";
import * as S from "./styles";

import Hero from "./Hero";
import Guide from "./Guide";
import Cards from "./Cards";
import HowWorks from "./HowItWorks";

export function InitialHome() {
  return (
    <S.Container>
      <Hero />
      <Guide />
      <Cards />
      <HowWorks />
    </S.Container>
  );
}
