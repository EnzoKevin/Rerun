import * as S from "./styles";

import { useState } from "react";
import Link from "next/link";
import { StaticImageData } from "next/image";
import Arrow from "@/assets/icons/arrow-down.png";
import Image from "next/image";

interface Sides {
  side: { title: string; text: string; img: StaticImageData };
}

export default function SmallSide({ side }: Sides) {
  const [visible, SetVisible] = useState<boolean>(false);

  return (
    <S.Container onClick={() => SetVisible(!visible)} $visible={visible}>
      <S.Title>
        {side.title} <S.Arrow src={Arrow} alt="" $visible={visible} />
      </S.Title>
      <S.Hidden $visible={visible}>
        <S.Text>
          {side.text} <Link href={"/"}>Go to project</Link>{" "}
          <S.ImageNext src={side.img} alt="" />
        </S.Text>
      </S.Hidden>
    </S.Container>
  );
}
