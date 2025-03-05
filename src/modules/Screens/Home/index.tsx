import React from "react";

import Hero from "./Hero";
import Guide from "./Guide";
import Cards from "./Cards";

import * as S from "./styles";

export function InitialHome() {
  return (
    <S.Container>
      <Hero />
      <Guide />
      <Cards />
    </S.Container>
  );
}
