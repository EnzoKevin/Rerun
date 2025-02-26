import React from "react";
import * as S from "./styles";
import Image from "next/image";

import Star from "@/components/images/icons/star.png";
import Arrow from "@/components/images/icons/right-arrow.png";

export default function Hero() {
  return (
    <S.Container>
      <S.Content>
        <S.ButtonGradient>
          {" "}
          <span>
            <Image src={Star} width={16} height={16} alt="" />
          </span>{" "}
          Button muito colorido
          <Image src={Arrow} width={16} height={16} alt="" />
        </S.ButtonGradient>
        <S.Title>The multimodal data stack</S.Title>
        <S.Text>
          Open source log handling and visualization for spatial and embodied
          AI. Managed infrastructure to ingest, store, analyze, and stream data
          at scale with built-in visual debugging. Fast, flexible, and easy to
          use.
        </S.Text>
        <S.BContainer>
          <S.buttons>Try browser demo</S.buttons>
          <S.buttons white={"false"}>explore example</S.buttons>
        </S.BContainer>
        <S.Nota>
          <p>Rerun is open source</p>
          <Image src={Star} width={16} height={16} alt="" />
          <p>nota</p>
        </S.Nota>
      </S.Content>
    </S.Container>
  );
}
