import * as S from "./styles";

import { useState } from "react";
import Button from "../buttons";
import { StaticImageData } from "next/image";
import SmallSide from "./smallSide";

interface Sides {
  side: { id: number; title: string; text: string; img: StaticImageData }[];
}
export function Sides({ side }: Sides) {
  const [actual, setActual] = useState<number>(0);

  return (
    <S.Container>
      <S.PC>
        <S.options>
          {side.map((side) => (
            <S.option
              key={side.id}
              $actual={actual == side.id}
              onClick={() => setActual(side.id)}
            >
              {side.title}
            </S.option>
          ))}
        </S.options>
        <S.SubContainer>
          <S.Figure>
            <S.ImageNext src={side[actual].img} alt="" />
          </S.Figure>
          <S.Text>
            <S.H1>{side[actual].title}</S.H1>
            <S.P>{side[actual].text}</S.P>
            <Button white={false}>Go to Project</Button>
          </S.Text>
        </S.SubContainer>
      </S.PC>
      <S.Mobile>
        {side.map((side) => (
          <SmallSide key={side.id} side={side} />
        ))}
      </S.Mobile>
    </S.Container>
  );
}
