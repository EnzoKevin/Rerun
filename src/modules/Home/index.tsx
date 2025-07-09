"use client";
import * as S from "./styles";

import Hero from "./Hero";
import Guide from "./Guide";
import Cards from "./Cards";
import HowWorks from "./HowItWorks";
import Community from "./community";
import Open from "./open";
import Blog from "./Blog";
import Canvas from "@/components/canvas";

export function InitialHome() {
  return (
    <S.Container>
      <Hero />
      <Canvas />
      <Guide />
      <Cards />
      <HowWorks />
      <Community />
      <Open />
      <Blog />
    </S.Container>
  );
}
