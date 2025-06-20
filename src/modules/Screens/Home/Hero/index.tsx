import * as S from "./styles";
import Image from "next/image";

import Star from "@/components/images/icons/star.png";
import Arrow from "@/components/images/icons/right-arrow.png";
import Button from "@/components/layout/buttons";

export default function Hero() {
  return (
    <S.Container>
      <S.ButtonGradient>
        {" "}
        <span>
          <Image src={Star} width={16} height={16} alt="" />
        </span>{" "}
        We raised $17m to build the data stack for Physical AI{" "}
        <Image src={Arrow} width={16} height={16} alt="" />
      </S.ButtonGradient>
      <S.Title>The data stack for Physical AI</S.Title>
      <S.Text>
        Open source log handling and visualization for spatial and embodied AI.
        Managed infrastructure to ingest, store, analyze, and stream data at
        scale with built-in visual debugging. Fast, flexible, and easy to use.
      </S.Text>
      <S.BContainer>
        <Button white={true}>Try browser demo</Button>
        <Button white={false}>explore example</Button>
      </S.BContainer>
      <S.Nota>
        <p>Rerun is open source</p>
        <Image src={Star} width={16} height={16} alt="" />
        <p>8.68</p>
      </S.Nota>
    </S.Container>
  );
}
