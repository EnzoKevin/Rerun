import React from "react";
import * as S from "./styles";

import Image from "next/image";

interface Card {
  Img: string;
  title: string;
  text: string;
}

export default function Card({ Img, title, text }: Card) {
  return (
    <S.Container>
      <S.Content>
        <S.Figure>
          <Image src={Img} alt="" />
        </S.Figure>
        <S.Text>
          <S.Title>{title}</S.Title>
          <S.P>{text}</S.P>
        </S.Text>
      </S.Content>
    </S.Container>
  );
}
